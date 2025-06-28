package leviathan;

import leviathan.bot.BasicBot;
import leviathan.bot.SensoryBot;
import leviathan.model.Ship;
import leviathan.sim.Simulator;
import leviathan.strategy.EnsarStrategy;
import leviathan.strategy.FarthestFirstStrategy;
import leviathan.strategy.NearestFirstStrategy;

/**
 * Main class for the Leviathan project - autonomous bot exploration system
 * Runs simulations of bots exploring ship environments using different strategies
 */
public class Main {
    
    public static void main(String[] args) {
        // Default parameters
        int seed = 42;
        int size = 5;
        double openProbability = 0.5;
        String botType = "sensory";
        String strategyType = "ensar";
        
        // Parse command line arguments if provided
        if (args.length >= 5) {
            seed = Integer.parseInt(args[0]);
            size = Integer.parseInt(args[1]);
            openProbability = Double.parseDouble(args[2]);
            botType = args[3].toLowerCase();
            strategyType = args[4].toLowerCase();
        }
        
        System.out.println("Generating ship ...");
        
        // Create the ship environment
        Ship ship = new Ship(size, size, openProbability, seed);
        
        System.out.printf("Ship ready. %% open = %.1f%n", ship.getOpenPercentage());
        
        // Find a valid starting position
        int[] startPos = ship.findRandomOpenCell(seed);
        System.out.printf("Start @ (%d,%d)%n", startPos[0], startPos[1]);
        
        // Create the appropriate bot
        leviathan.bot.Bot bot;
        if (botType.equals("basic")) {
            bot = new BasicBot(startPos[0], startPos[1], ship.getWidth(), ship.getHeight());
        } else {
            bot = new SensoryBot(startPos[0], startPos[1], ship.getWidth(), ship.getHeight());
        }
        
        // Set the strategy
        switch (strategyType) {
            case "nearest":
                bot.setStrategy(new NearestFirstStrategy());
                break;
            case "farthest":
                bot.setStrategy(new FarthestFirstStrategy());
                break;
            case "ensar":
            default:
                bot.setStrategy(new EnsarStrategy());
                break;
        }
        
        // Create and run the simulator
        Simulator simulator = new Simulator(ship, bot);
        
        System.out.println("\nStarting and Running simulation ...");
        simulator.run();
        
        // Print final report
        simulator.printFinalReport();
        
        // Print summary line for batch processing
        System.out.printf("seed=%d size=%d p=%.1f bot=%s strat=%s  -->  moves=%d, nodes=%d%n",
            seed, size, openProbability, botType, strategyType, 
            simulator.getTotalMoves(), simulator.getTotalPlanningNodes());
    }
}
