// Write a program to convert prefix expression to infix expression.
function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
  }
  
  function prefixToInfix(prefixExpression) {
    const stack = [];
    const operators = "+-*/";
  
    for (let i = prefixExpression.length - 1; i >= 0; i--) {
      const token = prefixExpression[i];
  
      if (!isOperator(token)) {
        stack.push(token);
      } else {
        const operand1 = stack.pop();
        const operand2 = stack.pop();
        const infixExpression = `(${operand1} ${token} ${operand2})`;
        stack.push(infixExpression);
      }
    }
  
    return stack.pop();
  }
  
  const prefixExpression = "* + 2 3 - 4 5";
  const infixExpression = prefixToInfix(prefixExpression);
  console.log("Prefix Expression:", prefixExpression);
  console.log("Infix Expression:", infixExpression);
  