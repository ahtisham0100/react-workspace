package leviathan.bot;

import leviathan.model.Cell;
import leviathan.model.Ship;
import leviathan.plan.AStarPlanner;
import leviathan.strategy.Strategy;

/**
 * Abstract base class for all bots
 * Provides common functionality for navigation and knowledge management
 */
public abstract class Bot {
    protected int x, y; // Current position
    protected int width, height; // Grid dimensions
    protected Cell[][] knowledge; // Knowledge base
    protected Strategy strategy; // Movement strategy
    protected AStarPlanner planner; // Path planner
    
    public Bot(int startX, int startY, int width, int height) {
        this.x = startX;
        this.y = startY;
        this.width = width;
        this.height = height;
        
        // Initialize knowledge base
        this.knowledge = new Cell[height][width];
        for (int i = 0; i < height; i++) {
            for (int j = 0; j < width; j++) {
                knowledge[i][j] = new Cell();
            }
        }
        
        // Mark starting position as open and visited
        knowledge[startY][startX].setState(Cell.OPEN);
        knowledge[startY][startX].setVisited(true);
        
        this.planner = new AStarPlanner();
    }
    
    /**
     * Updates the bot's knowledge based on current position
     * Must be implemented by subclasses
     */
    public abstract void updateKnowledge(Ship ship);
    
    /**
     * Plans the next move using the current strategy
     */
    public int[] planNextMove() {
        if (strategy == null) {
            throw new RuntimeException("No strategy set for bot!");
        }
        return strategy.selectNextTarget(this);
    }
    
    /**
     * Moves the bot to a new position
     */
    public void moveTo(int newX, int newY) {
        this.x = newX;
        this.y = newY;
        knowledge[newY][newX].setVisited(true);
    }
    
    /**
     * Checks if exploration is complete (no unknown reachable cells)
     */
    public boolean isExplorationComplete() {
        int unknownReachable = 0;
        int totalUnvisited = 0;
        int totalKnownCells = 0;
        
        // Count different types of cells
        for (int y = 0; y < height; y++) {
            for (int x = 0; x < width; x++) {
                if (!knowledge[y][x].isUnknown()) {
                    totalKnownCells++;
                    if (knowledge[y][x].isOpen() && !knowledge[y][x].isVisited()) {
                        totalUnvisited++;
                    }
                } else {
                    // Check if this unknown cell is adjacent to a known open cell
                    if (isAdjacentToKnownOpen(x, y)) {
                        unknownReachable++;
                    }
                }
            }
        }
        
        boolean complete = (unknownReachable == 0 && totalUnvisited == 0);
        
        if (complete) {
            System.out.printf("→ Status: %d unknown reachable, %d unvisited open, %d total known cells%n", 
                             unknownReachable, totalUnvisited, totalKnownCells);
            System.out.println("→ Exploration complete: All reachable areas explored");
        }
        
        return complete;
    }
    
    /**
     * Checks if an unknown cell is adjacent to a known open cell
     */
    private boolean isAdjacentToKnownOpen(int x, int y) {
        int[] dx = {-1, 1, 0, 0};
        int[] dy = {0, 0, -1, 1};
        
        for (int i = 0; i < 4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];
            
            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                if (knowledge[ny][nx].isOpen()) {
                    return true;
                }
            }
        }
        return false;
    }
    
    /**
     * Prints the current knowledge base
     */
    public void printKnowledge(int viewSize) {
        System.out.println("Knowledge Base:");
        
        // For small grids, show the entire grid
        int startY, endY, startX, endX;
        
        if (height <= viewSize && width <= viewSize) {
            startY = 0;
            endY = height;
            startX = 0;
            endX = width;
        } else {
            startY = Math.max(0, y - viewSize/2);
            endY = Math.min(height, y + viewSize/2 + 1);
            startX = Math.max(0, x - viewSize/2);
            endX = Math.min(width, x + viewSize/2 + 1);
        }
        
        for (int row = startY; row < endY; row++) {
            for (int col = startX; col < endX; col++) {
                if (col == x && row == y) {
                    System.out.print("B ");
                } else {
                    Cell cell = knowledge[row][col];
                    if (cell.isUnknown()) {
                        System.out.print("? ");
                    } else if (cell.isBlocked()) {
                        System.out.print("X ");
                    } else {
                        System.out.print(". ");
                    }
                }
            }
            System.out.println();
        }
        System.out.println();
    }
    
    /**
     * Calculates exploration percentage based on reachable cells
     */
    public double getExplorationPercentage() {
        int totalReachable = 0;
        int explored = 0;
        
        // Count all open cells that are reachable from start
        boolean[][] reachable = findReachableCells();
        
        for (int y = 0; y < height; y++) {
            for (int x = 0; x < width; x++) {
                if (reachable[y][x] && knowledge[y][x].isOpen()) {
                    totalReachable++;
                    if (knowledge[y][x].isVisited()) {
                        explored++;
                    }
                }
            }
        }
        
        return totalReachable > 0 ? (explored * 100.0) / totalReachable : 100.0;
    }
    
    /**
     * Finds all cells reachable from the current position
     */
    private boolean[][] findReachableCells() {
        boolean[][] reachable = new boolean[height][width];
        boolean[][] visited = new boolean[height][width];
        
        // DFS from current position
        dfsReachable(x, y, reachable, visited);
        
        return reachable;
    }
    
    /**
     * DFS helper for finding reachable cells
     */
    private void dfsReachable(int x, int y, boolean[][] reachable, boolean[][] visited) {
        if (x < 0 || x >= width || y < 0 || y >= height || visited[y][x]) {
            return;
        }
        
        visited[y][x] = true;
        
        if (knowledge[y][x].isOpen()) {
            reachable[y][x] = true;
            
            // Explore neighbors
            int[] dx = {-1, 1, 0, 0};
            int[] dy = {0, 0, -1, 1};
            
            for (int i = 0; i < 4; i++) {
                dfsReachable(x + dx[i], y + dy[i], reachable, visited);
            }
        }
    }
    
    // Getters and setters
    public int getX() { return x; }
    public int getY() { return y; }
    public int getWidth() { return width; }
    public int getHeight() { return height; }
    public Cell[][] getKnowledge() { return knowledge; }
    public void setStrategy(Strategy strategy) { this.strategy = strategy; }
    public AStarPlanner getPlanner() { return planner; }
}
