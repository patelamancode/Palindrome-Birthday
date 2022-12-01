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
    let dateStr = {day: "",month: "",year: ""};

    if (date.day < 10) dateStr.day = "0" + date.day;
    else dateStr.day = date.day.toString();

    if (date.month < 10) dateStr.month = "0" + date.month;
    else dateStr.month = date.month.toString();

    dateStr.year = date.year.toString();

    return dateStr;
}

function allVariationOfDateFormats(date) {
    let dateStrValue = numberToStringDateConverter(date);

    let DDMMYYYY = dateStrValue.day + dateStrValue.month + dateStrValue.year;
    let MMDDYYYY = dateStrValue.month + dateStrValue.day + dateStrValue.year;
    let YYYYDDMM = dateStrValue.year + dateStrValue.day + dateStrValue.month;
    let YYYYMMDD = dateStrValue.year + dateStrValue.month + dateStrValue.day;
    let DDMMYY = dateStrValue.day + dateStrValue.month + dateStrValue.year.slice(-2);
    let MMDDYY = dateStrValue.month + dateStrValue.day + dateStrValue.year.slice(-2);
    let YYMMDD = dateStrValue.year.slice(-2) + dateStrValue.month + dateStrValue.day;
    let YYDDMM = dateStrValue.year.slice(-2) + dateStrValue.day + dateStrValue.month;

    return [DDMMYYYY, MMDDYYYY, YYYYDDMM, YYYYMMDD, DDMMYY, MMDDYY, YYMMDD, YYDDMM];

}

function checkPalindromeForAllDateFormat(date) {
    let allDateFormatsForPalindrome = allVariationOfDateFormats(date);
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

    if((year % 4 === 0)  &&  (year % 100 !== 0)  ||  (year % 400 === 0)) return true;
    return false;

    // if (year % 4 === 0) {
    //     return true;
    // }
    // if (year % 100 !== 0) {
    //     return false;
    // }
    // if (year % 400 === 0) {
    //     return true;
    // }
    // return false;
}

function forNextDate(date) {
    let day = date.day + 1;
    let month = date.month;
    let year = date.year;

    let numberOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // For Feb month cases;
    if (month === 2) {
        if (isALeapYear(year)) {
            if (day > 29) {
                day = 1;
                month++;
            }
        } else {
            if (day > 28) {
                day = 1;
                month++;
            }
        }
    } else {
        if (day > numberOfDays[month - 1]) {
            day = 1;
            month++;
        }
    }
    // For Dec month cases;
    if (month > 12) {
        month = 1;
        year++;
    }

    return {
        day: day,
        month: month,
        year: year
    }
}

function forPreviousDate(date) {
    let day = date.day - 1;
    let month = date.month;
    let year = date.year;
    let numberOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month === 3) {
        if (isALeapYear(year)) {
            if (day === 0) {
                day = 29;
                month--;
            }
        } else {
            if (day === 0) {
                day = 28;
                month--;
            }
        }
    }
    if (month === 1) {
        if (day === 0) {
            day = 31;
            month = 12;
            year--;
        }
    } else {
        if (day === 0) {
            day = numberOfDays[month];
            month--;
        }
    }

    return {
        day: day,
        month: month,
        year: year
    }
}

function nextPalindromeDate(date) {
    let count = 0;
    let nextDate = forNextDate(date);

    while (1) {
        count++;
        let isPalindrome = checkPalindromeForAllDateFormat(nextDate);
        if (isPalindrome) {
            break;
        }
        nextDate = forNextDate(nextDate);
    }
    return [count, nextDate];
}

function lastPalindromeDate(date) {
    let count = 0;
    let previousDate = forPreviousDate(date);
    while (1) {
        count++;
        let dateAsStr = numberToStringDateConverter(previousDate);
        let isPalindrome = checkPalindromeForAllDateFormat(dateAsStr);
        if (isPalindrome) {
            break;
        }
        previousDate = forPreviousDate(previousDate);
    }
    return [count, previousDate];
}

var date = {
    day: 31,
    month: 12,
    year: 2020
}

// console.log(nextPalindromeDate(date));
console.log(lastPalindromeDate(date));