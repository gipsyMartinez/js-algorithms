// Stack. last in first out (LIFO)

function initStack() {
  const array = [];
  return {
    push(item) {
      array.push(item);
    },
    pop() {
      return array.pop();
    },
    peek() {
      return array[array.length - 1];
    },
    get stackLength() {
      // is get is not used I will always receive 0, because it takes the length of the newly created array when I initialize stack
      return array.length;
    },
    isEmpty() {
      return array.length === 0;
    }
  };
}

const s = initStack();

s.push("stack element");
s.push("other stack element");
s.push("other stack item");

s.pop();

console.log("Peek:", s.peek());

s.pop();

console.log("Current stack length. ", s.stackLength);
