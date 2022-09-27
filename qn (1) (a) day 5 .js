//Print the odd numbers in an array using anonymous functions

var temp=[];
var arr1=function(arr){
  for(var i=0;i<arr.length;i++)
  {
  if(arr[i]%2 !=0)
  {
    temp.push(arr[i])
  }
  }
  return temp
}
console.log(arr1([1,2,3,4,5,6,7,8,9]))



//Print the odd numbers in an array using IIFE


var temp=[];
(function odd(arr){
  for(var i=0;i<arr.length;i++)
  {
  if(arr[i]%2 !=0)
  {
    temp.push(arr[i])
  }
  }
  console.log(temp)
})
([1,2,3,4,5,6,7,8,9])