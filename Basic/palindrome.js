function palindrome(input){
   
   var reg = /[\W_]/g;

   //Lower the case of the string
   var lowerString = input.toLowerCase();

   // Filter the string and remove unwanted character
   var regString = lowerString.replace(reg, '');
   
   //Split the string, Reverse it and rejoin it again to get the reversed string
   var reversedString = regString.split('').reverse().join('');

   //check if reversesd equal to original
   if(regString === reversedString){
    console.log("True");
   }
   else{
    console.log("False");
   }
   

}
palindrome("12321");
