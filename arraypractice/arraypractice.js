var num = [];
for (let i = 0; i < 10; i++) {
    num.push(Math.floor(Math.random()*(999-100+1)+100));  //Generates 10 Random 3 Digit number
}
console.log(num);            // Store this random numbers into a array.

// 2nd largest and the 2nd smallest element without sorting the array.
var temp = [...num];
var max1 = Math.max(...temp);
var min1 = Math.min(...temp);  
temp.splice(temp.indexOf(max1),1);
temp.splice(temp.indexOf(min1),1);
var max2 = Math.max(...temp);
var min2 = Math.min(...temp);  
console.log('Without sorting');
console.log('Second Minimum',min2);
console.log('Second Maximum',max2);

//Extend the above program to sort the array and then find the 2nd largest and the 2nd smallest element.
let l = num.length;
num.sort(function(a, b){
    return a - b
});
console.log('With sorting');
console.log('Second Minimum',num[1]);
console.log('Second Maximum',num[l-2]);

//Extend the Prime Factorization Program to store all the Prime Factors of a number n into an array and finally display the output.
var n = 35;
var factors = [];
for ( var i = 2; i <= n; i++) {
    if ( n % i == 0 ){
        factors.push(i);
    }
}
console.log('Factors of',n,'are',factors);
var primefactors = [];
for ( var i = 0; i < factors.length; i++) {
    var a = 0;
    if ( factors[i] == 2 ){
        primefactors.push(factors[i]);
        i++;
    }
    for ( var j =2; j < factors[i]; j++) {
        if ( factors[i] % j == 0 ){
            break;
        }
        a += 1;
    }
    if ( a ==  factors[i]-2 ) {
        primefactors.push(factors[i]);
    }
}
console.log('Prime factors are',primefactors);

//Sum of three Integer adds to ZERO
var numb = [-15,12,4,-16,-9,-8,24,0];
var len = numb.length;
let pairs = [];
for( let i = 0; i < len; i++ ) {
    for ( let j = i + 1; j < len; j++ ) {
        for ( let k = j + 1; k < len; k++ ) {
            if(( numb[i] + numb[j] + numb[k]) == 0 ) {
                pairs.push({
                    '1' : numb[i] ,
                    '2' : numb[j] ,
                    '3' : numb[k]
                }); 
            }
        }
    }
}
console.log("Pairs are",pairs);

// Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,etc and store them in an array
var nos = [1, 2, 3, 2, 2, 1, 12, 2, 23, 77, 7, 33, 23, 5, 99, 4, 77, 5, 5, 6];
var duplicate = nos.filter((item, index) => index !== nos.indexOf(item));
console.log(duplicate);