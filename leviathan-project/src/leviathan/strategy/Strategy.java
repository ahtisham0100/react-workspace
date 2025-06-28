package leviathan.strategy;

import leviathan.bot.Bot;

/**
 * Interface for bot movement strategies
 * Defines how bots select their next target location
 */
public interface Strategy {
    /**
     * Selects the next target position for the bot
     * Returns null if no valid target is found
     */
    int[] selectNextTarget(Bot bot);
}
