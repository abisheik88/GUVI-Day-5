//convert all strings to Title Caps using arrow function

var Caps =(string)=>{
    var sen= string.toLowerCase().split(" ");
    for(var i=0;i<sen.length;i++){
      sen[i] = sen[i][0].toUpperCase() + sen[i].slice(1);
    }
        
         return sen
  }
  console.log(Caps("Learning is unstoppable process"))
  

 
  