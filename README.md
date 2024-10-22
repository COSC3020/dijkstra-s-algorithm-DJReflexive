# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

# Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## My Runtime Analysis

For my algorithm, it starts out by scanning the given graph to detect whether the sourceNode is actually in the graph (then stores the index if it is found and initialized nodes to Infinity). This process will happen $|V|$ times, the entire length of the graph. If the sourceNode is not found, then the program will terminate, and $\Theta(|V|)$ is the runtime complexity for the scenerio where the sourceNode is not in the given graph.

If the sourceNode was found in the graph, then the bulk of dijkstra's algorithm begins with the while loop. All nodes, at initialization, are set to "not visited," but every node has to be checked for this property (using the method checkForVisited()) every time the loop executes. Since the checkForVisited() method checks every node for this property, the method loops $|V|$ times. As each node is analyzed, it is set to "visited" and will never revert back to a "not visited" state. Implying that this loop will run $|V|$ times because it will have to do this for every node. The while loop by itself will take a complexity of $\Theta(2|V|)$

Nested inside the while loop is a for loop that will go through the length of each node's edge list. Which will also take $|V|$ times since the graph is square in nature.

The nextNode() method (also nested inside the while loop), checks every node in the graph to decide what node to pick next for processing. This will take $|V|$ to complete.

Putting everything together, considering where certain processes are nested, we get the time complexity of $\Theta(2|V| + |V|*(|V| + |V|))$, which can simplify down to $\Theta(|V|^2)$.

# Sources

- None, I was able to do this by myself!

# Plagiarism Acknowledgment

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.