//print element index in array if present
let birds = new Array("Pigeon","Sparrow","Parrot","Peacock","Swan");
let key = "Parrot";
console.log(birds.indexOf(key));

//missing number in a given integer array of 1 to 100
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
var miss = new Array();
for (var i = 1; i < num.length; i++) {
  if (num.indexOf(i) == -1) {
    miss.push(i);
  }
}
console.log(miss);

//largest and smallest number in an unsorted integer array
let numbers = [1,12,2,23,77,7,33,5,99,234,];
let l = numbers.length;
numbers.sort(function(a, b){
    return a - b
});
console.log('Minimum',numbers[0]);
console.log('Maximum',numbers[l-1]);

//all pairs of an integer array whose sum is equal to a given number
var numb = [15,12,4,16,9,8,24,0];
var len = numb.length;
var no = 24
var pairs = [];
for( var i = 0; i < len; i++ ) {
    for ( var j = i; j < len; j++ ) {
       if(( numb[i] + numb[j]) == no && i != j ) {
           pairs.push(numb[i]);
           pairs.push(numb[j]);
       }
    }
}
console.log("Number is",no,"pairs are",pairs);

// duplicate numbers in an array if it contains multiple duplicates
var nos = [1, 2, 3, 2, 2, 1, 12, 2, 23, 77, 7, 33, 23, 5, 99, 234, 4, 77, 5, 5, 6];
var duplicate = nos.filter((item, index) => index !== nos.indexOf(item));
console.log(duplicate);

// Union and Intersection of the two sorted arrays
var a = [1, 2, 3, 4, 5];
var b = [4, 5, 6, 7, 8];
var union = [...new Set([...a, ...b])];
console.log(union);
var intersection = a.filter(value => b.includes(value));
console.log(intersection);
