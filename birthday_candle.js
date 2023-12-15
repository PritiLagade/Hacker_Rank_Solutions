
var candles=[3,2,1,3];
function birthdayCakeCandles(candles) {
    // Write your code here
    var count = 0;
    var max = 0;
    for(let i=0; i<candles.length; i++){
        if(candles[i]>=max){
            if(candles[i]>max){
                count=1;
                max=candles[i];
            }
            else{
                count=count+1;
            }
            
            
        }
    }
return count;

}
let result=birthdayCakeCandles(candles);

console.log(result);