// convert Roman numerals to integers
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.

// SUPER BRUTE FORCE
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(string) {
    let roman = ['I','V','X','L','C','D','M'];
    let value = 0;

    for (let i=0; i<string.length; i++){
        for(let j=0; j<roman.length; j++){
            if(string[i]==roman[j]){
                console.log(roman[j]);
                if ((string[i] == 'I' && string[i+1]=='V') || (string[i] == 'I' && string[i+1]=='X')){
                    value = value - 2;
                }else if((string[i] == 'X' && string[i+1]=='L') || (string[i] == 'X' && string[i+1]=='C')){
                    value = value - 20;
                }else if((string[i] == 'C' && string[i+1]=='D') || (string[i] == 'C' && string[i+1]=='M')){
                    value = value - 200;
                }

                if(roman[j]=='I'){
                    value = value + 1;
                }else if(roman[j]=='V'){
                    value = value + 5;
                }else if(roman[j]=='X'){
                    value = value + 10;
                }else if(roman[j]=='L'){
                    value = value + 50;
                }else if(roman[j]=='C'){
                    value = value + 100;
                }else if(roman[j]=='D'){
                    value = value + 500;
                }else if(roman[j]=='M'){
                    value = value + 1000;
                }
            }
        }
    }return value;
};

console.log(romanToInt('MCMXCIV'));