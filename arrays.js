function maxarr(arr){
    var high = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] > high){
            high = arr[i];
        }
    }
    return high;
}

function positive(arr){
    var newarr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}

var arr = [40, 100, 1, 5, -25, 10, -87, 123, -57, 68, -92, -83, 90];
var sum = 0;
for(itr in arr){
    sum += arr[itr];
}

console.log("Array is",arr);
console.log("Sum is",sum);

var t = maxarr(arr);
console.log("Max is",t);

var y = positive(arr);
console.log("New array is",y);
