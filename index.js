const initQueue = require("./queues");

// Testing queues.js
const q = initQueue();
q.enqueue("Element in queue");
q.enqueue("Other element");
q.enqueue("Itemm");

console.log("Next element to be removed:", q.peek());
console.log("Size:", q.length());
console.log("Remover elemento:", q.dequeue());
console.log("New size:", q.length());
console.log("Is empty?", q.isEmpty());
