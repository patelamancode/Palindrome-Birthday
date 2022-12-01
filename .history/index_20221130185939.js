

function reverseStr(str){
    let strArray = str.split('');
    let reversedStrArray = strArray.reverse();
    let reversedStr = reversedStrArray.join('');
    return reversedStr;
}

function checkForPalindrome(str){
    let reversedValue = reverseStr(str);
    if(str === reversedValue){
        console.log("Is palindrome");
    } else console.log("Not a Palindrome");   
}

function numberToStringDateConverter(date){
    console.log(date);
    
}


checkForPalindrome("Aman namA")
var date = { 
    day: 14, 
    month: 9, 
    year: 2020 
}