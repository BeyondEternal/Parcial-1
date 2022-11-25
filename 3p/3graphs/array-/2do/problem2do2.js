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
 
    dfs(startingNode){
        let visited = {};
 
        this.DFSUtil(startingNode, visited);
    }
     
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
