package leviathan.strategy;

import leviathan.bot.Bot;
import leviathan.model.Cell;

/**
 * Strategy that selects the nearest unvisited open cell
 */
public class NearestFirstStrategy implements Strategy {
    
    @Override
    public int[] selectNextTarget(Bot bot) {
        Cell[][] knowledge = bot.getKnowledge();
        int botX = bot.getX();
        int botY = bot.getY();
        
        int[] bestTarget = null;
        double minDistance = Double.MAX_VALUE;
        
        // Find the nearest unvisited open cell
        for (int y = 0; y < bot.getHeight(); y++) {
            for (int x = 0; x < bot.getWidth(); x++) {
                if (knowledge[y][x].isOpen() && !knowledge[y][x].isVisited()) {
                    double distance = Math.sqrt((x - botX) * (x - botX) + (y - botY) * (y - botY));
                    if (distance < minDistance) {
                        minDistance = distance;
                        bestTarget = new int[]{x, y};
                    }
                }
            }
        }
        
        return bestTarget;
    }
}
