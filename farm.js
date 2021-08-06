function farm(chicken, cow, pig){
    return (chicken * 2) + (cow * 4) + (pig * 4);
}

var chicken = 1;
var cow = 2;
var pig = 3;
var legs = farm(chicken, cow, pig);
console.log("Total legs of all animals",legs); 