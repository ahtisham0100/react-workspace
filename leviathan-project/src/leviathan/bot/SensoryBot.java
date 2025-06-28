package leviathan.bot;

import leviathan.model.Cell;
import leviathan.model.Ship;

/**
 * Advanced bot with sensor capabilities
 * Can sense surrounding cells within a certain range
 */
public class SensoryBot extends Bot {
    private static final int SENSOR_RANGE = 1; // Reduced sensor range for better frontier detection
    
    public SensoryBot(int startX, int startY, int width, int height) {
        super(startX, startY, width, height);
    }
    
    @Override
    public void updateKnowledge(Ship ship) {
        // Mark current position as visited
        knowledge[y][x].setState(Cell.OPEN);
        knowledge[y][x].setVisited(true);
        
        int newCellsDiscovered = 0;
        
        // Use sensors to update knowledge of surrounding area
        for (int dy = -SENSOR_RANGE; dy <= SENSOR_RANGE; dy++) {
            for (int dx = -SENSOR_RANGE; dx <= SENSOR_RANGE; dx++) {
                int nx = x + dx;
                int ny = y + dy;
                
                if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                    // Only update if we don't already know about this cell
                    if (knowledge[ny][nx].isUnknown()) {
                        int cellState = ship.getCell(nx, ny);
                        knowledge[ny][nx].setState(cellState);
                        newCellsDiscovered++;
                    }
                }
            }
        }
        
        System.out.printf("Knowledge updated using sensor... (%d new cells discovered)", newCellsDiscovered);
    }
}
