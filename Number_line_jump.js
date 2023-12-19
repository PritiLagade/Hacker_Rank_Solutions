function kangaroo(x1, v1, x2, v2) {
    // Write your code here
   if (v1 === v2) {
    return "NO";
  }

  const time = (x2 - x1) / (v1 - v2);
  if (time >= 0 && Number.isInteger(time)) {
    return "YES";
  } else {
    return "NO";
  }
}

// Example usage
const result = kangaroo(0,3,4,2);
console.log(result); // Output: YES
