//Return median of two sorted arrays of the same size using anonymous functions

var med=function median(arr1,arr2){
  var arr=arr1.concat(arr2)
  arr.sort()
  var num1= arr[arr.length/2 -1]
  var num2 = arr[arr.length/2]
  var num = (num1+num2)/2
  return num
}
console.log(med([1,2,3],[4,5,6]))


//Return median of two sorted arrays of the same size using IIFE functions

(function median(arr1,arr2){
  var arr=arr1.concat(arr2)
  arr.sort()
  var num1= arr[arr.length/2 -1]
  var num2 = arr[arr.length/2]
  var num = (num1+num2)/2
  console.log(num)
})
([1,2,3],[4,5,6])

