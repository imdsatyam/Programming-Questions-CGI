// Write a program to check if all the brackets are closed in a given code snippet.
function areBracketsBalanced(code) {
    const stack = [];
    const bracketPairs = {
      ')': '(',
      '}': '{',
      ']': '[',
    };
  
    for (const char of code) {
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } else if (char === ')' || char === '}' || char === ']') {
        if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  const codeSnippet = "function add(a, b) { return a + b; }";
  if (areBracketsBalanced(codeSnippet)) {
    console.log("All brackets are properly closed.");
  } else {
    console.log("Brackets are not balanced in the code snippet.");
  }
  