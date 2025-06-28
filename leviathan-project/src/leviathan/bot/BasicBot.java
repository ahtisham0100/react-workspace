package leviathan.bot;

import leviathan.model.Cell;
import leviathan.model.Ship;

/**
 * Basic bot that only knows about cells`it has visited
 * No sensor capabilities - discovers environment by moving
 */
public class BasicBot extends Bot {
    
    public BasicBot(int startX, int startY, int width, int height) {
        super(startX, startY, width, height);
    }
    
    @Override
    public void updateKnowledge(Ship ship) {
        // Basic bot only updates knowledge of current position
        int currentState = ship.getCell(x, y);
        knowledge[y][x].setState(currentState);
        knowledge[y][x].setVisited(true);
        
        // Also check immediate neighbors when moving to a new position
        int[] dx = {-1, 1, 0, 0};
        int[] dy = {0, 0, -1, 1};
        
        for (int i = 0; i < 4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];
            
            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                if (knowledge[ny][nx].isUnknown()) {
                    int neighborState = ship.getCell(nx, ny);
                    knowledge[ny][nx].setState(neighborState);
                }
            }
        }
    }
}
