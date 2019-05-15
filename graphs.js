// Graphs

// Each node of the graph is represented as a vertex
// Edge represents a path between two  nodes linked (a line between 2 nodes)

function createNode(key) {
  const neighbors = [];
  return {
    key,
    neighbors,
    addNeihbors(node) {
      neighbors.push(node);
    }
  };
}

function createGraph(directed = false) {
  const nodes = [];
  const edges = [];

  return {
    directed,
    nodes,
    edges,
    addNode(key) {
      nodes.push(createNode(key));
    },
    getNode(key) {
      return nodes.find(n => n.key === key);
    },
    addEdge(node1Key, node2Key) {
      const node1 = this.getNode(node1Key);
      const node2 = this.getNode(node2Key);

      node1.addNeihbors(node2);
      edges.push(`${node1.key}-${node2.key}`);

      if (!directed) {
        node2.addNeihbors(node1);
      }
    },

    print() {
      return nodes
        .map(({ key, neighbors }) => {
          let result = `${key}`;

          if (neighbors.length) {
            result += ` => ${neighbors.map(node => node.key).join(" ")}`;
          }

          return result;
        })
        .join("\n");
    }
  };
}

const graph = createGraph(true);

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");

graph.addEdge("A", "B");
graph.addEdge("B", "A");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("B", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "B");
graph.addEdge("D", "A");

console.log(graph.print());
