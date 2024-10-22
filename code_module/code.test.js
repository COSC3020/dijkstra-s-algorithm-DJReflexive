import { GraphNode } from "./GraphNode.js";
import { dijkstra } from "./code.js";
import jsc from 'jsverify';


    /* Helper Method */

// Generates a graph with a given size and a limit to the weights
function generateGraph(size, maxWeight) {
    let graph = [];

    for (let i = 0; i < size; i++) {
        let edges = [];

        for (let j = 0; j < size; j++) {
            // -1 included to show the algorith can handle negative values
            edges.push(jsc.random(-1, maxWeight)); 
        }
        // using i for name, any name could be passed, the algorithm can handle
        graph.push(new GraphNode(i, edges));
    }

    return graph;
}



    /* Custom Testing */

const numTests = 100000; // Sufficiently Large Amount of Tests
const maxGraphSize = 30;
const maxWeightSize = 100;


/*  
*   This block generates lots of unit tests to stress test the algorithm.
*   Ensuring the alogrithm can handle all sort of example scenerios.
*
*   Note:
*
*   These unit tests will randomly test graph sizes of 0, 1, and values 
*   larger than 1.
*
*   Random weights will be assigned for every edge, where 0 indicates
*   there is no edge. Negative values are also assigned, which the 
*   algorithm will treat as if there is no edge, similarly to the 0 weight.
*/ 
for (let i = 0; i < numTests; i++) {
    const graphSize = jsc.random(0, maxGraphSize);
    const graph = generateGraph(graphSize, maxWeightSize);
    const sourceNode = jsc.random(0, graphSize);

    const result = dijkstra(graph, sourceNode);

    console.assert(result != null, "Result was null...");

    if (result == null) {
        throw "Result was null...";
    }
}
