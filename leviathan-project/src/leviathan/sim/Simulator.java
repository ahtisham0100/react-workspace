package leviathan.sim;

import leviathan.bot.Bot;
import leviathan.model.Ship;

/**
 * Main simulation controller
 * Manages the exploration process and provides reporting
 */
public class Simulator {
    private Ship ship;
    private Bot bot;
    private int totalMoves;
    private int totalPlanningNodes;
    private int stepCount;
    
    public Simulator(Ship ship, Bot bot) {
        this.ship = ship;
        this.bot = bot;
        this.totalMoves = 0;
        this.totalPlanningNodes = 0;
        this.stepCount = 0;
    }
    
    /**
     * Runs the complete simulation
     */
    public void run() {
        // Initial knowledge update
        bot.updateKnowledge(ship);
        
        System.out.printf("Initial position: Bot at (%d,%d)%n%n", bot.getX(), bot.getY());
        
        // Show initial state
        printGridView();
        printKnowledgeView();
        
        while (!bot.isExplorationComplete()) {
            stepCount++;
            
            System.out.printf("Step %d: Bot at (%d,%d)%n", stepCount, bot.getX(), bot.getY());
            
            // Strategy planning phase
            printStrategyPhase();
            
            int[] target = bot.planNextMove();
            
            if (target == null) {
                System.out.println("→ Frontier exhausted. No reachable unknowns.");
                break;
            }
            
            System.out.printf("→ Strategy selected target: (%d,%d)%n", target[0], target[1]);
            
            // Path planning phase
            int[] nextMove = bot.getPlanner().getNextMove(bot, target[0], target[1]);
            int planningNodes = bot.getPlanner().getNodesExpanded();
            totalPlanningNodes += planningNodes;
            
            if (nextMove == null) {
                System.out.printf("→ No path to target (%d,%d) found. Trying alternative...%n", target[0], target[1]);
                
                nextMove = findAlternativeMove(bot);
                if (nextMove == null) {
                    System.out.println("→ No alternative moves available. Exploration complete.");
                    break;
                }
                planningNodes += bot.getPlanner().getNodesExpanded();
                totalPlanningNodes += planningNodes;
            }
            
            System.out.printf("→ Next move: (%d,%d) | Planning nodes expanded: %d%n%n", 
                            nextMove[0], nextMove[1], planningNodes);
            
            // Move bot
            bot.moveTo(nextMove[0], nextMove[1]);
            totalMoves++;
            
            // Update knowledge after move
            bot.updateKnowledge(ship);
            System.out.println();
            
            // Show current state after move
            printGridView();
            printKnowledgeView();
            
            // Safety check to prevent infinite loops
            if (stepCount > 1000) {
                System.out.println("→ Maximum steps reached. Terminating simulation.");
                break;
            }
        }
        
        if (bot.isExplorationComplete()) {
            System.out.println("→ Frontier exhausted. No reachable unknowns.");
        }
        
        System.out.println("→ Finalizing simulation.");
        System.out.println("\nSimulation complete.");
    }

    /**
     * Prints the strategy decision phase
     */
    private void printStrategyPhase() {
        String strategyName = getStrategyName();
        System.out.printf("Planning using %s...%n", strategyName);
    }

    /**
     * Prints the current grid view
     */
    private void printGridView() {
        int viewSize = Math.min(18, Math.max(ship.getWidth(), ship.getHeight()));
        ship.printGrid(bot.getX(), bot.getY(), viewSize);
    }

    /**
     * Prints the current knowledge base view
     */
    private void printKnowledgeView() {
        int viewSize = Math.min(18, Math.max(ship.getWidth(), ship.getHeight()));
        bot.printKnowledge(viewSize);
    }

    /**
     * Finds an alternative move when primary target is unreachable
     */
    private int[] findAlternativeMove(Bot bot) {
        // Look for any adjacent unvisited open cell
        int[] dx = {-1, 1, 0, 0};
        int[] dy = {0, 0, -1, 1};
        
        for (int i = 0; i < 4; i++) {
            int nx = bot.getX() + dx[i];
            int ny = bot.getY() + dy[i];
            
            if (nx >= 0 && nx < bot.getWidth() && ny >= 0 && ny < bot.getHeight()) {
                if (bot.getKnowledge()[ny][nx].isOpen() && !bot.getKnowledge()[ny][nx].isVisited()) {
                    System.out.printf("→ Found adjacent alternative at (%d,%d)%n", nx, ny);
                    return new int[]{nx, ny};
                }
            }
        }
        
        System.out.println("→ No alternatives found");
        return null;
    }
    
    /**
     * Gets the strategy name from the bot's strategy
     */
    private String getStrategyName() {
        try {
            java.lang.reflect.Field strategyField = bot.getClass().getSuperclass().getDeclaredField("strategy");
            strategyField.setAccessible(true);
            Object strategy = strategyField.get(bot);
            if (strategy != null) {
                return strategy.getClass().getSimpleName();
            }
        } catch (Exception e) {
            // Fallback if reflection fails
        }
        return "UnknownStrategy";
    }
    
    /**
     * Prints the final simulation report
     */
    public void printFinalReport() {
        System.out.println("--------------------------------------------------");
        System.out.println("Final Report:");
        System.out.printf("Bot Type      : %s%n", bot.getClass().getSimpleName());
        System.out.printf("Strategy      : %s%n", getStrategyName());
        System.out.printf("Grid Size     : %dx%d%n", ship.getWidth(), ship.getHeight());
        System.out.printf("Open Cell %%   : %.1f%%%n", ship.getOpenPercentage());
        System.out.printf("Total Moves   : %d%n", totalMoves);
        System.out.printf("Planning Nodes: %d%n", totalPlanningNodes);
        System.out.printf("Explored %%    : %.1f%%%n", bot.getExplorationPercentage());
        System.out.println("--------------------------------------------------");
        
        // Print final grid state
        printGridView();
        printKnowledgeView();
    }
    
    // Getters
    public int getTotalMoves() { return totalMoves; }
    public int getTotalPlanningNodes() { return totalPlanningNodes; }
}
