package leviathan.model;

/**
 * Represents knowledge about a cell in the bot's knowledge base
 */
public class Cell {
    public static final int UNKNOWN = -1;
    public static final int OPEN = 0;
    public static final int BLOCKED = 1;
    
    private int state;
    private boolean visited;
    
    public Cell() {
        this.state = UNKNOWN;
        this.visited = false;
    }
    
    public Cell(int state) {
        this.state = state;
        this.visited = false;
    }
    
    // Getters and setters
    public int getState() { return state; }
    public void setState(int state) { this.state = state; }
    public boolean isVisited() { return visited; }
    public void setVisited(boolean visited) { this.visited = visited; }
    
    public boolean isUnknown() { return state == UNKNOWN; }
    public boolean isOpen() { return state == OPEN; }
    public boolean isBlocked() { return state == BLOCKED; }
}
