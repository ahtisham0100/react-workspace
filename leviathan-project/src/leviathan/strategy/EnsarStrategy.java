package leviathan.strategy;

import leviathan.bot.Bot;
import leviathan.model.Cell;
import java.util.ArrayList;
import java.util.List;

/**
 * Advanced strategy that prioritizes frontier cells
 * (unknown cells adjacent to known open cells)
 */
public class EnsarStrategy implements Strategy {
    
    @Override
    public int[] selectNextTarget(Bot bot) {
        Cell[][] knowledge = bot.getKnowledge();
        int botX = bot.getX();
        int botY = bot.getY();
        
        // First, look for frontier cells (unknown cells adjacent to known open cells)
        List<int[]> frontierCells = findFrontierCells(bot);
        
        System.out.printf("→ Found %d frontier cells%n", frontierCells.size());
        
        if (!frontierCells.isEmpty()) {
            // Select the nearest frontier cell
            int[] bestTarget = null;
            double minDistance = Double.MAX_VALUE;
            
            for (int[] cell : frontierCells) {
                double distance = Math.sqrt((cell[0] - botX) * (cell[0] - botX) + 
                                          (cell[1] - botY) * (cell[1] - botY));
                if (distance < minDistance) {
                    minDistance = distance;
                    bestTarget = cell;
                }
            }
            System.out.printf("→ Selected nearest frontier cell at distance %.1f%n", minDistance);
            return bestTarget;
        }
        
        // If no frontier cells, look for unvisited open cells
        System.out.println("→ No frontier cells found, looking for unvisited open cells...");
        int[] bestTarget = null;
        double minDistance = Double.MAX_VALUE;
        int unvisitedCount = 0;
        
        for (int y = 0; y < bot.getHeight(); y++) {
            for (int x = 0; x < bot.getWidth(); x++) {
                if (knowledge[y][x].isOpen() && !knowledge[y][x].isVisited()) {
                    unvisitedCount++;
                    double distance = Math.sqrt((x - botX) * (x - botX) + (y - botY) * (y - botY));
                    if (distance < minDistance) {
                        minDistance = distance;
                        bestTarget = new int[]{x, y};
                    }
                }
            }
        }
        
        System.out.printf("→ Found %d unvisited open cells%n", unvisitedCount);
        if (bestTarget != null) {
            System.out.printf("→ Selected nearest unvisited cell at distance %.1f%n", minDistance);
        }
        
        return bestTarget;
    }
    
    /**
     * Finds frontier cells - unknown cells that are adjacent to known open cells
     */
    private List<int[]> findFrontierCells(Bot bot) {
        List<int[]> frontierCells = new ArrayList<>();
        Cell[][] knowledge = bot.getKnowledge();
        int[] dx = {-1, 1, 0, 0};
        int[] dy = {0, 0, -1, 1};
        
        for (int y = 0; y < bot.getHeight(); y++) {
            for (int x = 0; x < bot.getWidth(); x++) {
                if (knowledge[y][x].isUnknown()) {
                    // Check if this unknown cell is adjacent to a known open cell
                    boolean isFrontier = false;
                    for (int i = 0; i < 4; i++) {
                        int nx = x + dx[i];
                        int ny = y + dy[i];
                        
                        if (nx >= 0 && nx < bot.getWidth() && ny >= 0 && ny < bot.getHeight()) {
                            if (knowledge[ny][nx].isOpen()) {
                                isFrontier = true;
                                break;
                            }
                        }
                    }
                    
                    if (isFrontier) {
                        frontierCells.add(new int[]{x, y});
                    }
                }
            }
        }
        
        return frontierCells;
    }
}
