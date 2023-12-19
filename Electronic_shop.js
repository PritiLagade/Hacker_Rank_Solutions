function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let maxAmount = -1;

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      const total = keyboards[i] + drives[j];
      if (total <= b && total > maxAmount) {
        maxAmount = total;
      }
    }
  }

  return maxAmount;
}

// Example usage
const budget = 100;
const keyboardPrices = [40, 50, 60];
const drivePrices = [5, 8, 12];
const result = getMoneySpent(budget, keyboardPrices, drivePrices);
console.log(result); // Output: 90
