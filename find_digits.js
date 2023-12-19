function findDigits(n) {
    // Write your code here
    let count = 0;
  let numberString = n.toString();

  for (let i = 0; i < numberString.length; i++) {
    let digit = Number(numberString[i]);
    if (digit !== 0 && n % digit === 0) {
      count++;
    }
  }

  return count;
}

let result = findDigits(123456);
console.log(result); // Output: 3

