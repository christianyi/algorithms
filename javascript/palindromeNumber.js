// Given an integer x, return true if x is a palindrome, and false otherwise.

/**
* @param {number} x
* @return {boolean}
*/
var isPalindrome = function(x) {
    let forwardString = x.toString();
    let forwardArray = [];
    let backwardArray = [];

    for(i=0; i<forwardString.length; i++){
        forwardArray.push(forwardString[i])
    }
    for(i=forwardString.length-1; i>=0; i--){
        backwardArray.push(forwardString[i])
    }

    // console.log(forwardArray);
    // console.log(backwardArray);

    let backwardString = backwardArray.join('');

    // console.log(forwardString);
    // console.log(backwardString);

    if (forwardString==backwardString){
        return true;
    } else{
        return false;
    }
};
