//Given an array of integers, find the sum of its elements.

 
function simpleArraySum(ar) {
    const arr=[1,2,3,4,10,11];
    var sum = 0;

     for (var i = 0 ; i <arr.length; i += 1){

          sum += arr[i];
        
         
         }
         return sum;
        }
console.log(simpleArraySum([1,2,3,4,10,11]));