// Copyright (c) 2021 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
function MonthName(MonthNum) {
    //above we made a "custom block" named MonthName with Inputs MonthNum
    let cache
    switch(MonthNum) {
        case 1: cache= "January"; break;
        case 2: cache= "February"; break;
        case 3: cache= "March"; break;
        case 4: cache= "April"; break;
        case 5: cache= "May"; break;
        case 6: cache= "June"; break;
        case 7: cache= "July"; break;
        case 8: cache= "August"; break;
        case 9: cache= "September"; break;
        case 10: cache= "October"; break;
        case 11: cache= "November"; break;
        case 12: cache= "December"; break;
    };
    return cache;
};
function DayName(DayNum) { //this creates a function named dayname with inputs daynum
    let cache
    switch(DayNum) { //case and switch is more efficient than if elseif, as it halts the checks, saving CPU cycles. if you want to see what happens when you user if else
                    //over and over again, check out this video https://www.youtube.com/watch?v=r97nq2h8k9M
        case 1: cache= "Sunday"; break;
        case 2: cache= "Monday"; break;
        case 3: cache= "Tuesday"; break;
        case 4: cache= "Wednesday"; break;
        case 5: cache= "Thursday"; break;
        case 6: cache= "Friday"; break;
        case 7: cache= "Saturday"; break;
    };
    return cache;
};
function DaysIn(MonthNum) {
    let cache
    switch(MonthNum) { //cases can be stacked if you dont use return or break.
        case 1: case 3: case 5: case 7: case 8: case 10: case 12: cache=31; //months with 31 days
        case 2: cache=28; //months with 28 days
        case 4: case 6: case 9: case 11: cache=30; //months with 30 days
    };
    return cache;
};
function IsLeapYear(Year) {
    return Boolean(Year%400==0 || Year%4==0 && Year%100!=0);
};
function IsValidDate(MonthNum, DayNum) {
    return true //Boolean(DaysIn(MonthNum)>=DayNum);
};
function MonthGivenDay(Year, DayNum) {
    if(!IsLeapYear(Year) && DayNum==366) { //I don't think you can use ternary operators on just IF statements without an else
        return "Only leap years have 366 days!";
    };
    let LeapDay = Number(IsLeapYear ? 1 : 0); //let is the new way of making vars
    let cache
    switch(DayNum) {
        case DayNum<=31: cache=1; break;
        case DayNum<=59+LeapDay: cache=2; break;
        case DayNum<=90+LeapDay: cache=3; break;
        case DayNum<=120+LeapDay: cache=4; break;
        case DayNum<=151+LeapDay: cache=5; break;
        case DayNum<=181+LeapDay: cache=6; break;
        case DayNum<=212+LeapDay: cache=7; break;
        case DayNum<=243+LeapDay: cache=8; break;
        case DayNum<=273+LeapDay: cache=9; break;
        case DayNum<=304+LeapDay: cache=10; break;
        case DayNum<=334+LeapDay: cache=11; break;
        case DayNum<=365+LeapDay: cache=12; break;
    };
    return cache;
};
function DayOfMonth(Year, DayNum) {
    let LeapDay = Number(IsLeapYear ? 1 : 0);
    let cache
    switch(Number(DayNum)) {
        case DayNum<=31: cache= DayNum; break;
        case DayNum<=59+LeapDay: cache= DayNum-31; break;
        case DayNum<=90+LeapDay: cache= DayNum-LeapDay-59; break;
        case DayNum<=120+LeapDay: cache= DayNum-LeapDay-90; break;
        case DayNum<=151+LeapDay: cache= DayNum-LeapDay-120; break;
        case DayNum<=181+LeapDay: cache= DayNum-LeapDay-151; break;
        case DayNum<=212+LeapDay: cache= DayNum-LeapDay-181; break;
        case DayNum<=243+LeapDay: cache= DayNum-LeapDay-212; break;
        case DayNum<=273+LeapDay: cache= DayNum-LeapDay-243; break;
        case DayNum<=304+LeapDay: cache= DayNum-LeapDay-273; break;
        case DayNum<=334+LeapDay: cache= DayNum-LeapDay-304; break;
        case DayNum<=365+LeapDay: cache= DayNum-LeapDay-334; break;
    };
    return cache;
};
let YearInput = Number(prompt("Enter a year"));
let MonthInput = Number(prompt("Enter month (number)"));
let DayInput = Number(prompt("Enter a day (0-366)"));
if(IsValidDate(MonthInput, DayInput)) {
    alert("leapyear?: " + IsLeapYear(YearInput) + " Month: " + MonthName(MonthInput) + " Day of Month: " + DayOfMonth(YearInput, DayInput) + " This month has " + DaysIn(MonthInput));
} else {
    alert("this isn't a valid date!");
};