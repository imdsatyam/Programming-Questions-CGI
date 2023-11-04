// Read about the Tower of Hanoi algorithm. Write a program to implement it.
function towerOfHanoi(n, source, auxiliary, target) {
    if (n === 1) {
      console.log(`Move disk 1 from rod ${source} to rod ${target}`);
      return;
    }
  
    towerOfHanoi(n - 1, source, target, auxiliary);
    console.log(`Move disk ${n} from rod ${source} to rod ${target}`);
    towerOfHanoi(n - 1, auxiliary, source, target);
  }
  
  const numDisks = 3;
  towerOfHanoi(numDisks, 'A', 'B', 'C');
  