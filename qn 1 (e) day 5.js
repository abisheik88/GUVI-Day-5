//return all the palindromes in array using anonymous functions
var result = [];
  var input = function(arr){
      for(var i=0; i<arr.length; i++){
          var a = arr[i];
          var b = arr[i].split("").reverse().join("");
          
          if(a == b){
             result.push(a);
          }
      }
    return result;
  }
  console.log(input(["Abisheik", "malayalam", "oyo", "614526", "amma"]));



//return all the palindromes in array using IIFE functions

  var result = [];
  (function(arr){
      for(var i=0; i<arr.length; i++){
          var a = arr[i];
          var b = arr[i].split("").reverse().join("");
          
          if(a == b){
             result.push(a);
          }
      }
    console.log(result);
  })
  (["Abisheik", "malayalam", "oyo", "614526", "amma"]);


