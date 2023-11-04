// Write a program to reverse a stack.
class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  function reverseStack(stack) {
    if (!stack.isEmpty()) {
      const item = stack.pop();
      reverseStack(stack);
      insertAtBottom(stack, item);
    }
  }
  
  function insertAtBottom(stack, item) {
    if (stack.isEmpty()) {
      stack.push(item);
    } else {
      const temp = stack.pop();
      insertAtBottom(stack, item);
      stack.push(temp);
    }
  }
  
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  
  console.log("Original Stack:", stack.items);
  
  reverseStack(stack);
  
  console.log("Reversed Stack:", stack.items);
  