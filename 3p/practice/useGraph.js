import GD from './graphDirected.js'
import GU from './graphUndirected.js'

let graphUndirected = new GU(6)
let graphDirected = new GD(6)

let vertices= [ 'A', 'B', 'C', 'D', 'E', 'F' ];
for (let i = 0; i < vertices.length; i++) {
    graphUndirected.addVertex(vertices[i]);
}

for (let i = 0; i < vertices.length; i++) {
    graphDirected.addVertex(vertices[i]);
}


graphUndirected.addEdge('A', 'B');
graphUndirected.addEdge('A', 'D');
graphUndirected.addEdge('A', 'E');
graphUndirected.addEdge('B', 'C');
graphUndirected.addEdge('D', 'E');
graphUndirected.addEdge('E', 'F');
graphUndirected.addEdge('E', 'C');
graphUndirected.addEdge('C', 'F');

graphDirected.addEdge('A', 'B');
graphDirected.addEdge('A', 'D');
graphDirected.addEdge('A', 'E');
graphDirected.addEdge('B', 'C');
graphDirected.addEdge('D', 'E');
graphDirected.addEdge('E', 'F');
graphDirected.addEdge('E', 'C');
graphDirected.addEdge('C', 'F');

graphUndirected.printGraph();

graphUndirected.bfs('A');
graphUndirected.dfs('A')