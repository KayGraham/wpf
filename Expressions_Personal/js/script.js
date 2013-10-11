//Kayla Robinson
//10-10-13
//Expressions - Personal

//This calculator will tell how much I will have to spend in a year for vitamins.

//Variable for the name of pill 1
var pill1 = prompt("We are calculating the total cost of a year supply of three(3) vitamins. \nPlease enter the name of the first vitamin:");

//Variable for the name of pill 2
var pill2 = prompt("Please enter the name of the second vitamin:");

//Variable for the name of pill 3
var pill3 = prompt("Please enter the name of the third vitamin:");

//Variable for cost of pill 1 per bottle
var pill1Cost = prompt("Please enter the cost for one bottle of " + pill1 + ": \n(Example 16.00)");

//Variable for cost of pill 2 per bottle
var pill2Cost = prompt("Please enter the cost for one bottle of " + pill2 + ":");

//Variable for cost of pill 3 per bottle
var pill3Cost = prompt("Please enter the cost for one bottle of " + pill3 + ":");

//Variable for number of pills in bottle for pill1
var numPill1 = prompt("Please enter the number of pills in one bottle of " + pill1 + ":");

//Variable for number of pills in bottle for pill2
var numPill2 = prompt("Please enter the number of pills in one bottle of " + pill2 + ":");

//Variable for number of pills in bottle for pill3
var numPill3 = prompt("Please enter the number of pills in one bottle of " + pill3 + ":");

//Variable for number of pills taken in a day for pill1
var pill1PerDay = prompt("Please enter the number of " + pill1 + " pills taken per day:");

//Variable for number of pills taken in a day for pill2
var pill2PerDay = prompt("Please enter the number of " + pill2 + " pills taken per day:");

//Variable for number of pills taken in a day for pill3
var pill3PerDay = prompt("Please enter the number of " + pill3 + " pills taken per day:");

//Variable for number of days in a year
var days = prompt("Please enter the number of days in the year:");

//Calculate number of pill1 per week
var pill1PerWeek = pill1PerDay * 7;

//Calculate number of pill1 per month
var pill1PerMonth = pill1PerWeek * 4;

//Calculate number of pill1 per year
var pill1PerYear = pill1PerMonth * 12;

//Calculate number of pill2 per week
var pill2PerWeek = pill2PerDay * 7;

//Calculate number of pill2 per month
var pill2PerMonth = pill2PerWeek * 4;

//Calculate number of pill2 per year
var pill2PerYear = pill2PerMonth * 12;

//Calculate number of pill3 per week
var pill3PerWeek = pill3PerDay * 7;

//Calculate number of pill3 per month
var pill3PerMonth = pill3PerWeek * 4;

//Calculate number of pill3 per year
var pill3PerYear = pill3PerMonth * 12;

//Calculate number of bottles needed for a year for pill1
var pill1Bottles = pill1PerYear / numPill1;

//Calculate number of bottles needed for a year for pill2
var pill2Bottles = pill2PerYear / numPill2;

//Calculate number of bottles needed for a year for pill3
var pill3Bottles = pill3PerYear / numPill3;

//Calculate total cost for 1 year for pill1
var totalPill1 = pill1Cost * pill1Bottles;

//Calculate total cost for 1 year for pill2
var totalPill2 = pill2Cost * pill2Bottles;

//Calculate total cost for 1 year for pill3
var totalPill3 = pill3Cost * pill3Bottles;

//Calculate total cost for all 3 pills for a year
var result = totalPill1 + totalPill2 + totalPill3;

//Print out total cost for pill1 for 1 year
console.log("It will cost $" + totalPill1 + " for enough " + pill1 + " vitamins for one year.");

//Print out total cost for pill1 for 1 year
console.log("It will cost $" + totalPill2 + " for enough " + pill2 + " vitamins for one year.");

//Print out total cost for pill1 for 1 year
console.log("It will cost $" + totalPill3 + " for enough " + pill3 + " vitamins for one year.");

//Print out total cost for all pills for 1 year
console.log("It will cost a total of $" + result + " for enough of each pill for the year.")