// Graph Traversal

function bfs(graph, root) {
  let nodesLen = {};
  for (let i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity; // not visited yet 
  }
  nodesLen[root] = 0;

  let q = [root];
  let currentVal;

  while (q.length != 0) {
    currentVal = q.shift(); // 1 -> [2,3]
    let varConnected = graph[currentVal]; // [0 , 0 , 1 , 1]
    let neighboridx = [];
    let idx = varConnected.indexOf(1); // 1 means connected  (get me the fisrt indx for 1 in matrix)
    while (idx != -1) { // -1 means not exist 
      neighboridx.push(idx); // [2 , 3]
      idx = varConnected.indexOf(1, idx + 1);
    }
    for(let i = 0 ; i < neighboridx.length ; i++){
      if(nodesLen[neighboridx[i]] == Infinity){
        nodesLen[neighboridx[i]] = nodesLen[currentVal] + 1 //  nodesLen[2] = 0 + 1  = 1 -> nodesLen[3]  = 1 + 1 =0;  
        q.push(neighboridx[i])
      }
    }
  }
  return nodesLen
}
const matrix = [
  [0, 1, 0, 0],
  [0, 0, 1, 1],
  [1, 0, 0, 0],
];
// console.log(matrix[2][1])
console.log(bfs(matrix, 1));
