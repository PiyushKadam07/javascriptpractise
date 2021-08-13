function prime(num){
    for (var i = 2; i < num/2 ; i++){
        if (num % i == 0){
            return false;
        }
    }
    return true;
}

var n = 99;
var temp = prime(n); 
if (temp == true){
    console.log(n,"is prime");
}
else{
    console.log(n,"is not prime");
}