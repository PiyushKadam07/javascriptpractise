let myMap = new Map();
myMap.set(1,0);
myMap.set(2,0);
myMap.set(3,0);
myMap.set(4,0);
myMap.set(5,0);
myMap.set(6,0);
while( true ){  //Repeat the Die roll and find the result each time
    var die = Math.floor(Math.random() * 6) + 1;  //Roll a die and find the number between 1 to 6
    myMap.set(die, myMap.get(die)+1);
    if ( myMap.get(die) == 10 ){   // Repeat till any one of the number has reached 10 times
        var maximum = die;
        break;
    }
}
console.log(myMap.entries());    // Find the number that reached maximum times and the one that was for minimum times
let arr = [...myMap.values()];
let minimum = arr.indexOf(Math.min(...arr)) + 1;
console.log('Maximum :',maximum,'Minimum :',minimum);

// Generate a birth month of 50 individuals between the year 92 & 93. Find all the individuals having birthdays in the same month. 
let myMap1 = new Map();
myMap1.set(1,0);
myMap1.set(2,0);
myMap1.set(3,0);
myMap1.set(4,0);
myMap1.set(5,0);
myMap1.set(6,0);
myMap1.set(7,0);
myMap1.set(8,0);
myMap1.set(9,0);
myMap1.set(10,0);
myMap1.set(11,0);
myMap1.set(12,0);
var i = 0;
while( i < 50 ){      
    var birthmonth = Math.floor(Math.random() * 12) + 1; 
    myMap1.set(birthmonth, myMap1.get(birthmonth)+1);
    i++;
}
console.log(myMap1);