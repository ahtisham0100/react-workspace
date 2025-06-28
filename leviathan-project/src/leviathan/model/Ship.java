package leviathan.model;

import java.util.Random;

/**
 * Represents the ship environment as a 2D grid
 * Contains blocked and open cells that bots can navigate
 */
public class Ship {
    public static final int BLOCKED = 1;
    public static final int OPEN = 0;
    
    private int[][] grid;
    private int width;
    private int height;
    private double openPercentage;
    
    /**
     * Creates a new ship with random blocked/open cells
     */
    public Ship(int width, int height, double openProbability, int seed) {
        this.width = width;
        this.height = height;
        this.grid = new int[height][width];
        
        Random random = new Random(seed);
        int openCells = 0;
        
        // Generate random grid
        for (int i = 0; i < height; i++) {
            for (int j = 0; j < width; j++) {
                if (random.nextDouble() < openProbability) {
                    grid[i][j] = OPEN;
                    openCells++;
                } else {
                    grid[i][j] = BLOCKED;
                }
            }
        }
        
        this.openPercentage = (openCells * 100.0) / (width * height);
    }
    
    /**
     * Checks if a position is within bounds and open
     */
    public boolean isValidPosition(int x, int y) {
        return x >= 0 && x < width && y >= 0 && y < height && grid[y][x] == OPEN;
    }
    
    /**
     * Gets the cell type at a position
     */
    public int getCell(int x, int y) {
        if (x < 0 || x >= width || y < 0 || y >= height) {
            return BLOCKED; // Out of bounds treated as blocked
        }
        return grid[y][x];
    }
    
    /**
     * Finds a random open cell for starting position
     */
    public int[] findRandomOpenCell(int seed) {
        Random random = new Random(seed);
        int attempts = 0;
        while (attempts < 1000) {
            int x = random.nextInt(width);
            int y = random.nextInt(height);
            if (isValidPosition(x, y)) {
                return new int[]{x, y};
            }
            attempts++;
        }
        
        // Fallback: find first open cell
        for (int y = 0; y < height; y++) {
            for (int x = 0; x < width; x++) {
                if (isValidPosition(x, y)) {
                    return new int[]{x, y};
                }
            }
        }
        
        throw new RuntimeException("No open cells found in ship!");
    }
    
    /**
     * Prints a view of the grid with bot position
     */
    public void printGrid(int botX, int botY, int viewSize) {
        System.out.println("Grid View:");
        
        // For small grids, show the entire grid
        int startY, endY, startX, endX;
        
        if (height <= viewSize && width <= viewSize) {
            startY = 0;
            endY = height;
            startX = 0;
            endX = width;
        } else {
            startY = Math.max(0, botY - viewSize/2);
            endY = Math.min(height, botY + viewSize/2 + 1);
            startX = Math.max(0, botX - viewSize/2);
            endX = Math.min(width, botX + viewSize/2 + 1);
        }
        
        for (int y = startY; y < endY; y++) {
            for (int x = startX; x < endX; x++) {
                if (x == botX && y == botY) {
                    System.out.print("B ");
                } else if (grid[y][x] == BLOCKED) {
                    System.out.print("X ");
                } else {
                    System.out.print(". ");
                }
            }
            System.out.println();
        }
        System.out.println();
    }
    
    // Getters
    public int getWidth() { return width; }
    public int getHeight() { return height; }
    public double getOpenPercentage() { return openPercentage; }
}
