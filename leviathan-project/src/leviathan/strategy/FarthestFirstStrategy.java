package leviathan.strategy;

import leviathan.bot.Bot;
import leviathan.model.Cell;

/**
 * Strategy that selects the farthest unvisited open cell
 */
public class FarthestFirstStrategy implements Strategy {
    
    @Override
    public int[] selectNextTarget(Bot bot) {
        Cell[][] knowledge = bot.getKnowledge();
        int botX = bot.getX();
        int botY = bot.getY();
        
        int[] bestTarget = null;
        double maxDistance = -1;
        
        // Find the farthest unvisited open cell
        for (int y = 0; y < bot.getHeight(); y++) {
            for (int x = 0; x < bot.getWidth(); x++) {
                if (knowledge[y][x].isOpen() && !knowledge[y][x].isVisited()) {
                    double distance = Math.sqrt((x - botX) * (x - botX) + (y - botY) * (y - botY));
                    if (distance > maxDistance) {
                        maxDistance = distance;
                        bestTarget = new int[]{x, y};
                    }
                }
            }
        }
        
        return bestTarget;
    }
}
