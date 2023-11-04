// Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.
function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
      const temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  reverseArrayInPlace(originalArray);
  console.log("Reversed Array:", originalArray);
  