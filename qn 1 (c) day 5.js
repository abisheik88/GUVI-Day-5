//Sum of all numbers in array using anonymous function
var sum =0;
var add =function addition(a){
for(var i=0;i<a.length;i++){
  sum= sum+a[i]
}
return sum
}
console.log(add([1,2,3,4,5]))


//Sum of all numbers in array using IIFE function

var sum =0;
(function addition(a){
for(var i=0;i<a.length;i++){
  sum= sum+a[i]
}
console.log(sum)
})
([1,2,3,4,5])