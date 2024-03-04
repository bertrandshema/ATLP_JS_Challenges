// A prime number is a number only divided by 1 and itself
// to find if a number is prime I will calculate the factors of that number
// if the factors of that number is less or equal to 2 that number is prime

function findPrimeNumber(array){

    var factors = 0;
    var newArray = [];
    
    // Illitirate trhu the array
    for(var j = 0; j < array.length ; j++){
        //Calculate the factors of the number
        for(var i = 1; i <= array[j]; i++){
            if(array[j] % i === 0){
                factors++;
            }
        } 
        if( factors <= 2){
            newArray.push(array[j]);
        }
        factors = 0;
    }

    console.log(newArray);
}

findPrimeNumber([1,2,3,4,5,6,7,8,9,10]);