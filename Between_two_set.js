function getTotalX(a, b) {
    // Write your code here
    let count = 0;

  for (let i = 1; i <= 100; i++) {
    if (a.every(num => i % num === 0) && b.every(num => num % i === 0)) {
      count++;
    }
  }

  return count;
}

const result = getTotalX([2, 4], [16, 32, 96]);
console.log(result); 
