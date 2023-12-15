function pythogrean_theorem(x,y){
    if((typeof x!=='number')||(typeof y!=='number'));
    return Math.sqrt(x*x + y*y);
}
console.log(pythogrean_theorem(2,3));

function triangle(a,b,c){
    
     const s =(a+b+c)/2;
    const area = Math.sqrt(s*((s-a)*(s-b)*(s-c)));
    return area;
}
console.log(triangle(11,9,9));



