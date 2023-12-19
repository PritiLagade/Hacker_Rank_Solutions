function diagonalDifference(arr) {
    arr =[[3],
         [11,2,4],
         [4, 5, 6],
         [10, 8, -12]];
    // Write your code here
    let d1 = 0;
    let d2 = 0;
    
    for(let i=0; i<arr.length;i++){
        d1 += arr[i][i];
        d2 += arr[arr.length-1-i][i];
    }
       return Math.abs(d1-d2);

}
let result = new diagonalDifference();
console.log(result);