package leviathan.plan;

import leviathan.bot.Bot;
import leviathan.model.Cell;
import java.util.*;

/**
 * A* pathfinding algorithm implementation
 * Plans optimal paths from current position to target
 */
public class AStarPlanner {
    private int nodesExpanded;
    
    /**
     * Plans a path from start to goal using A* algorithm
     */
    public List<int[]> planPath(Bot bot, int goalX, int goalY) {
        nodesExpanded = 0;
        
        int startX = bot.getX();
        int startY = bot.getY();
        Cell[][] knowledge = bot.getKnowledge();
        
        // Priority queue for open set
        PriorityQueue<Node> openSet = new PriorityQueue<>(Comparator.comparingDouble(n -> n.fCost));
        Set<String> closedSet = new HashSet<>();
        Map<String, Node> allNodes = new HashMap<>();
        
        // Create start node
        Node startNode = new Node(startX, startY);
        startNode.gCost = 0;
        startNode.hCost = heuristic(startX, startY, goalX, goalY);
        startNode.fCost = startNode.gCost + startNode.hCost;
        
        openSet.add(startNode);
        allNodes.put(startX + "," + startY, startNode);
        
        int[] dx = {-1, 1, 0, 0};
        int[] dy = {0, 0, -1, 1};
        
        while (!openSet.isEmpty()) {
            Node current = openSet.poll();
            String currentKey = current.x + "," + current.y;
            
            if (closedSet.contains(currentKey)) {
                continue;
            }
            
            closedSet.add(currentKey);
            nodesExpanded++;
            
            // Check if we reached the goal
            if (current.x == goalX && current.y == goalY) {
                return reconstructPath(current);
            }
            
            // Explore neighbors
            for (int i = 0; i < 4; i++) {
                int nx = current.x + dx[i];
                int ny = current.y + dy[i];
                String neighborKey = nx + "," + ny;
                
                // Check bounds and if cell is traversable
                if (nx < 0 || nx >= bot.getWidth() || ny < 0 || ny >= bot.getHeight()) {
                    continue;
                }
                
                if (knowledge[ny][nx].isBlocked() || closedSet.contains(neighborKey)) {
                    continue;
                }
                
                // Skip unknown cells unless it's the goal
                if (knowledge[ny][nx].isUnknown() && !(nx == goalX && ny == goalY)) {
                    continue;
                }
                
                double tentativeGCost = current.gCost + 1;
                
                Node neighbor = allNodes.get(neighborKey);
                if (neighbor == null) {
                    neighbor = new Node(nx, ny);
                    neighbor.gCost = Double.MAX_VALUE;
                    allNodes.put(neighborKey, neighbor);
                }
                
                if (tentativeGCost < neighbor.gCost) {
                    neighbor.parent = current;
                    neighbor.gCost = tentativeGCost;
                    neighbor.hCost = heuristic(nx, ny, goalX, goalY);
                    neighbor.fCost = neighbor.gCost + neighbor.hCost;
                    
                    if (!openSet.contains(neighbor)) {
                        openSet.add(neighbor);
                    }
                }
            }
        }
        
        // No path found
        return new ArrayList<>();
    }
    
    /**
     * Reconstructs the path from goal to start
     */
    private List<int[]> reconstructPath(Node goalNode) {
        List<int[]> path = new ArrayList<>();
        Node current = goalNode;
        
        while (current != null) {
            path.add(0, new int[]{current.x, current.y});
            current = current.parent;
        }
        
        return path;
    }
    
    /**
     * Manhattan distance heuristic
     */
    private double heuristic(int x1, int y1, int x2, int y2) {
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    }
    
    /**
     * Gets the next move towards the target
     */
    public int[] getNextMove(Bot bot, int goalX, int goalY) {
        List<int[]> path = planPath(bot, goalX, goalY);
        
        if (path.size() > 1) {
            return path.get(1); // Return the next step (skip current position)
        }
        
        return null; // No path found
    }
    
    public int getNodesExpanded() {
        return nodesExpanded;
    }
    
    /**
     * Node class for A* algorithm
     */
    private static class Node {
        int x, y;
        double gCost, hCost, fCost;
        Node parent;
        
        Node(int x, int y) {
            this.x = x;
            this.y = y;
        }
        
        @Override
        public boolean equals(Object obj) {
            if (this == obj) return true;
            if (obj == null || getClass() != obj.getClass()) return false;
            Node node = (Node) obj;
            return x == node.x && y == node.y;
        }
        
        @Override
        public int hashCode() {
            return Objects.hash(x, y);
        }
    }
}
