//return all prime numbers in array using arrow function

var temp =[];
var prime =(arr)=>{
for ( var i = 0; i <arr.length; i++) {
  
  for ( var j = 2; j <arr[i]; j++) {
    
    if ( arr[i] % j == 0 ) {
      
      break;
      
    }
    
  }
  if ( arr[i] == j ) {
    
    temp.push(arr[i]);
  }
  
}
return temp;
};
console.log(prime([1,2,3,4,5,7,8,9,11,12]));


