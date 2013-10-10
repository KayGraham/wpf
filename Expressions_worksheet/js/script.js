//Kayla Robinson
//10-10-13
//Expressions-worksheet


//Dog Years

//Calculating Sparky's age in dog years

var humanAge = 14;

//Multiply age by 7 to get age in dog years

var result = humanAge * 7;

//print out dog years

console.log("Sparky is " + humanAge + " human years old which is " + result + " in dog years.");


//Slice of Pie part 1

//Calculating how many slices of pizza each person gets

var slicesPerPizza = 8;

var numOfPeople = 10;

var numOrdered = 4;

//Multiply the number of slices by number of pizza and divide by number of people

var result = slicesPerPizza * numOrdered / numOfPeople;

//Print out number of slices each person at the party got

console.log("Each person ate " + result + " slices of pizza at the party.");


//Slices of Pie part 2

//Calculating the number of whole slices Sparky gets

var a = slicesPerPizza * numOrdered;

var remainder = a % numOfPeople;

//Multiply the number of slices by the number of pizzas, divide by number of people, multiple remainder

var result = remainder;

console.log("Sparky got " + result + " slices of pizza.");


//Average shopping bill

//Calculating the average amount spent on grocery

var weeklyTotal = [52.30, 64.90, 83.70, 27.13, 48.72];

//Add each weeks total

var total = weeklyTotal[0] + weeklyTotal[1] + weeklyTotal[2] + weeklyTotal[3] + weeklyTotal[4];

var result = total / 5;
//Print out

console.log("You have spent a total of $" + total + " on groceries over 5 weekss. That is an average of $" + result + " per week.");


//Discounts

//Calculate the discount per item

var originalPrice = 10.00;

var discount = 20;

var descriptionOfItem = "Red Belt";

var salesTax = .07;

//Multiple pirce by dicount, subtrack from price; Multiply discounted price by sales tax, add to discounted price

var discountPercent = discount / 100;

var discountedPrice = originalPrice - originalPrice * discountPercent;

var withTax = discountedPrice + discountedPrice * salesTax;

console.log("Your " + descriptionOfItem + " was originally $" + originalPrice + ", but afer a " + discount + "% discount, it is now $" + discountedPrice + " without tax, and $" + withTax + " with tax.");
