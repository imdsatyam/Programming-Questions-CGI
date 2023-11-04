// Write a program to find the smallest number using a stack.
class StackWithMin {
    constructor() {
      this.dataStack = [];
      this.minStack = [];
    }
  
    push(value) {
      this.dataStack.push(value);
  
      if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(value);
      }
    }
  
    pop() {
      if (this.isEmpty()) {
        return null;
      }
  
      const poppedValue = this.dataStack.pop();
  
      if (poppedValue === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
  
      return poppedValue;
    }
  
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.dataStack[this.dataStack.length - 1];
    }
  
    getMin() {
      if (this.minStack.length === 0) {
        return null;
      }
      return this.minStack[this.minStack.length - 1];
    }
  
    isEmpty() {
      return this.dataStack.length === 0;
    }
  }
  
  const stack = new StackWithMin();
  stack.push(3);
  stack.push(5);
  stack.push(2);
  stack.push(7);
  stack.push(1);
  
  console.log("Smallest Number in the Stack:", stack.getMin());
  