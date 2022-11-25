let graph = {
    A: [1, 0, 0, 1, 1, 0, 0],
    B: [0, 1, 1, 0, 1, 1, 1],
    C: [1, 1, 0, 0, 0, 1, 0],
    D: [0, 0, 1, 1, 0, 0, 1],
  }  
  
  function Weight(x, y) {
    let s = 0, i;
    for (i = 0; i < x[y].length; i++) {
      s = s + (x[y])[i]
    }
    console.log(s)
  }
  
  Weight(graph, 'A')