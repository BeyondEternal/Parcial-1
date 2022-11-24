import Queue from '../../2p/4queue/5es/mcm14queue.js'

export default class Graph {
    constructor(noOfVertices)
    {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }
    addVertex(v){
        this.AdjList.set(v, []);
    }
    addEdge(v, w){
        this.AdjList.get(v).push(w);
        //Si el grafo es sin dirección
        this.AdjList.get(w).push(v);
    }
    printGraph(){
        let get_keys = this.AdjList.keys();
        for (let i of get_keys){
            let get_values = this.AdjList.get(i);
            let conc = "";
            for (let j of get_values)
                conc += j + " ";
            console.log(i + " -> " + conc);
        }
    }
 
    // bfs(startingNode){
         
    // // create a visited object
    // let visited = {};
 
    // // Create an object for queue
    // let q = new Queue();
 
    // // add the starting node to the queue
    // visited[startingNode] = true;
    // q.enqueue(startingNode);
 
    // // loop until queue is empty
    // while (!q.isEmpty()) {
    //     // get the element from the queue
    //     let getQueueElement = q.dequeue();
 
    //     // passing the current vertex to callback function
    //     console.log(getQueueElement);
 
    //     // get the adjacent list for current vertex
    //     let get_List = this.AdjList.get(getQueueElement);
 
    //     // loop through the list and add the element to the
    //     // queue if it is not processed yet
    //     for (let i in get_List) {
    //         let neigh = get_List[i];
 
    //         if (!visited[neigh]) {
    //             visited[neigh] = true;
    //             q.enqueue(neigh);
    //         }
    //     }
    // }
    // }
    dfs(startingNode){
        let visited = {};
 
        this.DFSUtil(startingNode, visited);
    }
     
    // Recursive function which process and explore
    // all the adjacent vertex of the vertex with which it is called
    DFSUtil(vert, visited)
    {
        visited[vert] = true;
        console.log(vert);
     
        let get_neighbours = this.AdjList.get(vert);
     
        for (let i in get_neighbours) {
            let get_elem = get_neighbours[i];
            if (!visited[get_elem])
                this.DFSUtil(get_elem, visited);
        }
    }
}


