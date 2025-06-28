package leviathan.exp;

import leviathan.Main;

/**
 * Experimental runner for batch testing different configurations
 */
public class ExperimentRunner {
    
    public static void main(String[] args) {
        // Test different configurations
        String[] botTypes = {"basic", "sensory"};
        String[] strategies = {"nearest", "farthest", "ensar"};
        int[] seeds = {42, 123, 456, 789, 999};
        
        System.out.println("Running batch experiments...");
        System.out.println("seed\tsize\tp\tbot\tstrat\tmoves\tnodes");
        
        for (String botType : botTypes) {
            for (String strategy : strategies) {
                for (int seed : seeds) {
                    // Run simulation with these parameters
                    String[] mainArgs = {
                        String.valueOf(seed),
                        "25", // size
                        "0.6", // probability
                        botType,
                        strategy
                    };
                    
                    // Capture output or run Main.main(mainArgs)
                    // For now, just print the configuration
                    System.out.printf("%d\t25\t0.6\t%s\t%s\t?\t?%n", 
                                    seed, botType, strategy);
                }
            }
        }
    }
}
