function convert(ctemp){
    var ftemp;
    ftemp = (ctemp * 9/5) + 32
    return ftemp;
}

var temp = 26;
var fhtemp = convert(temp);
console.log("Celsius temperature:",temp,"Fahrenheit temperature:",fhtemp);