//Remove duplicates from an array using anonymous functions

var unique=function(arr){
  var num=[...new Set(arr)];
  return num;
}
console.log(unique(["a",1,"b",2,4,"a","c",2,"b",4]))


//Remove duplicates from an array using IIFE functions

(function(arr){
  var num=[...new Set(arr)];
  console.log(num);
})
(["a",1,"b",2,4,"a","c",2,"b",4])