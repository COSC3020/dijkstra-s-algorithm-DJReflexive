// Helper class to track nodes
export class GraphNode {
    /*
    *  name - the name of the node
    *  edges - the list of edges where 0 is empty and positive values 
    *           are the weight of the edge (negative values disallowed).
    */
    constructor(name, edges) {
        this.name = name;
        this.edges = edges;
        this.visited = false;
    }

    getName() { return this.name; }
    getEdges() { return this.edges; }

    setName(name) { this.name = name; }
    setEdges(edges) { this.edges = edges; }

    hasBeenVisited() { return this.visited; }
    setVisited() { this.visited = true; }
}