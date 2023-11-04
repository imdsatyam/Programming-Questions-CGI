// Write a program to print the first non-repeated character from a string?
function findFirstNonRepeatedCharacter(str) {
    const charCount = new Map();
  
    for (const char of str) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
    }
  
    for (const char of str) {
      if (charCount.get(char) === 1) {
        return char;
      }
    }
  
    return null;
  }
  
  const inputString = "programming";
  const result = findFirstNonRepeatedCharacter(inputString);
  
  if (result) {
    console.log(`The first non-repeated character is: ${result}`);
  } else {
    console.log("No non-repeated character found in the string.");
  }
  