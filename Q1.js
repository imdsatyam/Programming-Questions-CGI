// Write a program to find all pairs of an integer array whose sum is equal to a given number?
function findPairsWithSum(arr, targetSum) {
    const pairs = new Set();
    const result = [];
    
    for (const number of arr) {
    const complement = targetSum - number;
    if (pairs.has(complement)) {
    result.push([number, complement]);
    }
    pairs.add(number);
    }
    
    return result;
    }
    
    const integerArray = [2, 4, 3, 5, 7, 8, 9];
    const targetSum = 10;
    const result = findPairsWithSum(integerArray, targetSum);
    
    if (result.length > 0) {
    console.log(`Pairs with a sum of ${targetSum}:`);
    result.forEach(pair => {
    console.log(`(${pair[0]}, ${pair[1]})`);
    });
    } else {
    console.log(`No pairs found with a sum of ${targetSum}`);
    }
    