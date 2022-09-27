//Rotate an array by k times using anonymous functions 
var rotate =function turn(arr,k){
    var tmp=0;
    let leng= arr.length;
    for( var i=0;i<k;i++){
      tmp=arr.pop();
      arr.unshift(tmp);
    }
    return arr;
  }
  console.log(rotate([1,2,3,4],3))


  //rotate an array k times using  IIFE 

  (function turn(arr,k){
    var tmp=0;
    let leng= arr.length;
    //k= k%leng;
    for( var i=0;i<k;i++){
      tmp=arr.pop();
      arr.unshift(tmp);
    }
    console.log(arr);
  })
  ([1,2,3,4],3)
