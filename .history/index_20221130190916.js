

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
    let dateStr = {day : "", month : "", year : ""};

    if(date.day < 10){
        dateStr.day = "0" + date.day;
    }else{
        dateStr.day = date.day.toString();
    }
    if(date.month < 10){
        dateStr.month = "0" + date.month;
    }else{
        dateStr.month = date.month.toString();
    }
    dateStr.year = date.year.toString();

    console.log(dateStr);
}



var date = { 
    day: 14, 
    month: 9, 
    year: 2020 
}

numberToStringDateConverter(date)