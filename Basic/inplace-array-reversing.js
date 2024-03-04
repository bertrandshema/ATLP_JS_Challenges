function arrayReversing(array){
    
    var times = array.length - 2;
    for(var i = times; i >= 0 ; i--){
       var digit = array.splice(i, 1);
       array.push(Number(digit));
    }
    console.log(array);
 }
 arrayReversing([5,4,3,2,1]);