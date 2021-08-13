function reverse(word){
    var temp = "";
    for (var i = word.length-1; i >=0; i--){
      temp += word[i];
    }
    return temp;
  }
  
  function result(str){
    var rev = "";
    var ans = str.split(" ");
    for (i in ans){
      var t = reverse(ans[i]);
      rev += t + ' ';
    }
    return rev;
  }
  
  var text = "It was a good day";
  console.log(text);
  console.log(result(text));