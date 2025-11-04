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
    while (idx != -1) {
      // -1 means not exist
      neighboridx.push(idx); // [2 , 3]
      idx = varConnected.indexOf(1, idx + 1);
    }
    for (let i = 0; i < neighboridx.length; i++) {
      if (nodesLen[neighboridx[i]] == Infinity) {
        nodesLen[neighboridx[i]] = nodesLen[currentVal] + 1; //  nodesLen[2] = 0 + 1  = 1 -> nodesLen[3]  = 1 + 1 =0;
        q.push(neighboridx[i]);
      }
    }
  }
  return nodesLen;
}
const matrix = [
  [0, 1, 0, 0],
  [0, 0, 1, 1],
  [1, 0, 0, 0],
];
// console.log(matrix[2][1])
console.log(bfs(matrix, 1));

// Get depth from Nested JSON

const bigNestedObj = {
  company: {
    name: "TechCorp",
    founded: 2001,
    departments: {
      engineering: {
        head: "Marwa",
        teams: {
          backend: {
            lead: "Bob",
            members: ["John", "Jane", "Mike"],
          },
          frontend: {
            lead: "Carol",
            members: ["Sara", "Tom", "Lucy"],
          },
        },
      },
      marketing: {
        head: "Dave",
        teams: {
          seo: {
            lead: "Eve",
            members: ["Paul", "Nina"],
          },
          content: {
            lead: "Frank",
            members: ["Anna", "Sophia", "Liam"],
          },
        },
      },
      sales: {
        head: "Grace",
        teams: {
          domestic: {
            lead: "Hank",
            members: ["Olivia", "Mason"],
          },
          international: {
            lead: "Ivy",
            members: ["Noah", "Emma", "Lucas"],
          },
        },
      },
    },
  },
  location: {
    headquarters: {
      city: "New York",
      country: "USA",
    },
    branches: [
      { city: "London", country: "UK" },
      { city: "Tokyo", country: "Japan" },
      { city: "Berlin", country: "Germany" },
    ],
  },
  ceo: {
    name: "Zara",
    age: 45,
    contact: {
      email: "zara@techcorp.com",
      phone: "+1234567890",
    },
  },
  ceo: {
    name: "Zara",
    age: 45,
    contact: {
      email: "zara@techcorp.com",
      phone: "+1234567890",
    },
  },
};

function getDepth(obj) {
  let depth = 0;
  while (obj) {
    const firstKey = Object.keys(obj).find((k) => {
      return typeof obj[k] == "object";
    });
    depth++;
    obj = obj[firstKey];
  }
  return depth;
}
console.log(getDepth(bigNestedObj));

const bigNestedObjForSameKey = {
  nested: {
    name: "TechCorp",
    founded: 2001,
    nested: {
      nested: {
        head: "Marwa",
        nested: {
          nested: {
            lead: "Bob",
            members: ["John", "Jane", "Mike"],
          },
          nested: {
            lead: "Carol",
            members: ["Sara", "Tom", "Lucy"],
          },
        },
      },
    },
  },
};
function getDepthForSameKey(obj) {
  let depth = 0;
  while (obj.nested) {
    depth++;
    obj = obj.nested;
    console.log(obj)
  }
  return depth;
}
console.log(getDepthForSameKey(bigNestedObjForSameKey));
