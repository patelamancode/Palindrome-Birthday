function reverseStr(str) {
    let strArray = str.split('');
    let reversedStrArray = strArray.reverse();
    let reversedStr = reversedStrArray.join('');
    return reversedStr;
}

function checkForPalindrome(str) {
    let reversedValue = reverseStr(str);
    if (str === reversedValue) {
        return true;
    } else return false;
}

function numberToStringDateConverter(date) {
    let dateStr = {
        day: "",
        month: "",
        year: ""
    };

    if (date.day < 10) {
        dateStr.day = "0" + date.day;
    } else {
        dateStr.day = date.day.toString();
    }
    if (date.month < 10) {
        dateStr.month = "0" + date.month;
    } else {
        dateStr.month = date.month.toString();
    }
    dateStr.year = date.year.toString();

    return dateStr;
}

function allVariationOfDateFormats(date) {
    let dateStrValue = numberToStringDateConverter(date);

    let DDMMYYYY = dateStrValue.day + dateStrValue.month + dateStrValue.year;
    let MMDDYYYY = dateStrValue.month + dateStrValue.day + dateStrValue.year;
    let YYYYDDMM = dateStrValue.year + dateStrValue.day + dateStrValue.month;
    let YYYYMMDD = dateStrValue.year + dateStrValue.month + dateStrValue.day;
    let DDMMYY = dateStrValue.day + dateStrValue.month + dateStrValue.year.split(-2);
    let MMDDYY = dateStrValue.month + dateStrValue.day + dateStrValue.year.split(-2);
    let YYMMDD = dateStrValue.year.split(-2) + dateStrValue.month + dateStrValue.day;
    let YYDDMM = dateStrValue.year.split(-2) + dateStrValue.day + dateStrValue.month;

    return [DDMMYYYY, MMDDYYYY, YYYYDDMM, YYYYMMDD, DDMMYY, MMDDYY, YYMMDD, YYDDMM];

}

function checkPalindromeForAllDateFormat(date) {
    let allDateFormatsForPalindrome = allVariationOfDateFormats(date);
    console.log(allDateFormatsForPalindrome);
    let IsThisAPalindrome = false;

    for (let i = 0; i < allDateFormatsForPalindrome.length; i++) {
        if (checkForPalindrome(allDateFormatsForPalindrome[i])) {
            IsThisAPalindrome = true;
            break;
        }
    }
    return IsThisAPalindrome;
}

function isALeapYear(year) {
    if (year % 4 === 0) {
        return true;
    }
    if (year % 100 !== 0) {
        return false;
    }
    if (year % 400 === 0) {
        return true;
    }
    return false;
}

function forNextDate(date) {
    let day = date.day + 1;
    let month = date.month;
    let year = date.year;

    let numberOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // For Feb month cases;
    if (month === 2) {
        if(isALeapYear(year)){
            if(day > 29){
                day = 1;
                month++;
            }
        }
        else {
            if(day > 28){
            day = 1;
            month++;
            }
        }
    } 
    else {
        if(day > numberOfDays[month-1]){
            day = 1;
            month++;
        }
    }
    // For Dec month cases;
    if(month > 12){
        month = 1;
        year++;
    }

    return {
        day : day,
        month : month,
        year : year
    }
}

function nextPalindromeDate(date){
    let count = 0;
    let nextDate = forNextDate(date);

    console.log(count, nextDate);

}


var date = {
    day: 2,
    month: 11,
    year: 2020
}

console.log(nextPalindromeDate(1999));