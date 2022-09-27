//Sum of all numbers in array using arrow function
var sum =0;
var add =(a)=>{
for(var i=0;i<a.length;i++){
  sum= sum+a[i]
}
return sum
}
console.log(add([1,2,3,4,5]))


