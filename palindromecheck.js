function palincheck(str){
    var rev = [];
    for(var i = str.length-1; i >= 0; i--){
        rev.push(str[i]);
    }
    var palin = rev.join('');
    if (palin.toLowerCase() == str.toLowerCase()){
        return true;
    }
    else{
        return false;
    }
}

var text = "level";
var t = palincheck(text);
if (t == true){
    console.log(text,"is palindrome");
}
else{
    console.log(text,"is not palindrome");
}