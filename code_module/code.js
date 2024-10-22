
// Uses Adjaceny Matrix Representation
export function dijkstra(graph, sourceNode) {
    // Init the weight to each vertex to infinity, source to 0
    let weightsList = [];
    let sourceNodeIndex;
    for (let i = 0; i < graph.length; i++) {
        let node = graph[i];

        if (node.getName() == sourceNode) { 
            weightsList[i] = 0; 
            sourceNodeIndex = i;
        } else { 
            weightsList[i] = Infinity; 
        }
    }

    // if sourceNode wasn't found in graph
    if (sourceNodeIndex == null) {
        return [];
    }


    // While there are unvisited nodes left
    let currentNodeIndex = sourceNodeIndex;
    while (checkForVisited(graph)) {
        let node = graph[currentNodeIndex];

        if (node == undefined) { return []; } // Return if not found
        if (node.hasBeenVisited()) { continue; } // Skip if node was visited
        else { node.setVisited(); } // Set current node to visited

        // Select unvisited edge w/ lowest weight
        let edges = node.getEdges();
        for (let i = 0; i < edges.length; i++) { // loops through edges
            let edgeWeight = edges[i];
            
            if (edgeWeight <= 0) { continue; } // no negative weights
            
            // Add up weights along current path
            let nextNodeIndex = i;
            let newWeight = weightsList[currentNodeIndex] + edgeWeight;
            if (newWeight < weightsList[nextNodeIndex]) {
                weightsList[nextNodeIndex] = newWeight;
            }
        }

        // Get next currentNodeIndex 
        currentNodeIndex = nextNode(graph, weightsList);
    }

    return weightsList;
}




// Returns the index of the next node
function nextNode(graph, weightsList) {
    let minWeight = Infinity;
    let minNodeIndex = -1;

    for (let i = 0; i < weightsList.length; i++) {
        if (!graph[i].hasBeenVisited() && weightsList[i] < minWeight) {
            minWeight = weightsList[i];
            minNodeIndex = i;
        }
    }

    return minNodeIndex;
}


// Returns true if graph contains visited nodes
function checkForVisited(graph) {
    for (let i = 0; i < graph.length; i++) {
        let node = graph[i];

        if (!node.hasBeenVisited()) {
            return true;
        }
    }
    
    return false;
}
