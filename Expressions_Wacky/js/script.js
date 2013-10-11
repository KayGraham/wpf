//Kayla Robinson
//10-10-13
//Expressions - Wacky

//This will calculate the total amount you will earn when consigning books.

//Get the name for book1.
var book1Name = prompt("We are going to calculate the total amount earned when consigning 3 old books. \nEnter the name of the first book.");

//Get the sell price for book1.
var book1Prices = prompt("Enter the sell price of " + book1Name + ". (Example 16.99)");

//Get the name for book2.
var book2Name = prompt("Enter the name of the second book.");

//Get the sell price for book2.
var book2Prices = prompt("Enter the sell price of " + book2Name + ".");

//Get the name for book3.
var book3Name = prompt("Enter the name of the third book.");

//Get the sell price for book3.
var book3Prices = prompt("Enter the sell price of " + book3Name + ".");

//Assign book1 to array
var books = [book1Prices, book2Prices, book3Prices];

//Print out the name and price for each book.
console.log("You earned $" + book1Prices + " for " + book1Name + ". \nYou earned $" + book2Prices + " for " + book2Name + ". \nYou earned $" + book3Prices + " for " + book3Name + ".");

//Use array to calculate the total amount for the three books.
var result = Number(books[0]) + Number(books[1]) + Number(books[2]);

//Print out the total amount for the books.
console.log("You earned a total of $" + result + " for consigning your books.");

//Calculate the amount for consigning three books.
result ++ ;

//Print out the total amount for all three books plus additional money earned.
console.log("You earned an additional $1 for consigning three books, your new total is $" + result + ".");
