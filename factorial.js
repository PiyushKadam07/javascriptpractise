function factorial(num){
    var fact = 1;
    for(var i = 1; i <= num; i++){
        fact *= i
    }
    return fact;
}

var n = 10;
var temp = factorial(n); 
console.log(temp);