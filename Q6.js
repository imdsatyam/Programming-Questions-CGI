// Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.
function postfixToPrefix(postfixExpression) {
    const stack = [];
    const operators = "+-*/";
  
    for (let token of postfixExpression.split(' ')) {
      if (!operators.includes(token)) {
        stack.push(token);
      } else {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        const prefixExpression = token + operand1 + operand2;
        stack.push(prefixExpression);
      }
    }
  
    return stack.pop();
  }
  
  const postfixExpression = "2 3 + 4 *";
  const prefixExpression = postfixToPrefix(postfixExpression);
  console.log("Postfix Expression:", postfixExpression);
  console.log("Prefix Expression:", prefixExpression);
  