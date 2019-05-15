// Queues (first in first out)

function initQueue() {
  const queue = [];

  return {
    enqueue(item) {
      // prepend item to the beginning of an array to keep FIFO method
      queue.unshift(item);
    },
    dequeue() {
      return queue.pop();
    },
    length() {
      return queue.length;
    },
    isEmpty() {
      return queue.length === 0;
    },
    peek() {
      return queue[queue.length - 1];
    }
  };
}

const q = initQueue();

q.enqueue("Element in queue");
q.enqueue("Other element");
q.enqueue("Itemm");

console.log("Next element to be removed:", q.peek());
console.log("Size:", q.length());
console.log("Remover elemento:", q.dequeue());
console.log("New size:", q.length());
console.log("Is empty?", q.isEmpty());

exports.initQueue = initQueue;
