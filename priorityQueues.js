// Priority Queues

const initQueue = require("./queues");

function initPriorityQueue() {
  const lowPriorityQueue = initQueue();
  const highPriorityQueue = initQueue();

  return {
    enqueue(item, isHighPriority = false) {
      isHighPriority
        ? highPriorityQueue.enqueue(item)
        : lowPriorityQueue.enqueue(item);
    },
    dequeue() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.dequeue();
      }

      return lowPriorityQueue.dequeue();
    },
    length() {
      return highPriorityQueue.length + lowPriorityQueue.length;
    },
    peek() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peek();
      }

      return lowPriorityQueue.peek();
    },
    isEmpty() {
      return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
    }
  };
}

const q = initPriorityQueue();

q.enqueue("low priority item");
q.enqueue("other low priority item");
q.enqueue("other low priority element");

console.log("Low priority Peek:", q.peek());

q.enqueue("High priority item", true);

console.log("Peek:", q.peek());
console.log("Dequeue:", q.dequeue());
