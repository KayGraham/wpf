//Kayla Robinson
//10-17-13
//Conditional Worksheet

//Stuff Your Face 1
//Determines whether an entrant qualifies base on his weight

//Get entrant's weight
var entrantWeight = Number(prompt("Please enter the competitor's weight. This will be used to determine if he can enter into the heavyweight eating contest."));

//If entrant weights 250lbs or more
if(entrantWeight >= 250){
    //You can enter
    console.log("The competitor qualifies for the heavyweight division.");
}else {
    //You do not weight enough
    console.log("The competitor needs to gain some weight!");
}


//Last Chance for Gas!
//Determine whether the traveler needs to stop for gas or not

//Get gas efficiency of the car
var carEfficiency = Number(prompt("Enter the gas efficiency of the car in mpg."));

//Get current gas tank reading
var gasReading = Number(prompt("Enter your current gauge reading of the gas tank in percent. \nExample: If you have half a tank enter .50"));

//Get car's gas tank capacity
var tankCapacity = Number(prompt("Enter the car's gas tank capacity in gallons."));

//Calculate gallons of gas in tank
var gallonsInTank = gasReading * tankCapacity;

//If there is enough gas
if( gallonsInTank * carEfficiency >= 200){
    //You can make it
    console.log("Yes, you can make it without stopping for gas!");
}else{
    //You need to get gas
    console.log("You only have " + gallonsInTank + " gallons of gas in your tank, better get gas now while you can!");
}


//Check the Login
//Checks for correct user name and password

//Get username
var username = prompt("Please enter your username.");

//Get password
var password = prompt("Please enter your password.");

//Correct username
var correctUsername = "user1";

//Correct password
var correctPassword = "petname";

//If username is correct
if(username === correctUsername){
    //If pass word is correct
    if(password === correctPassword){
        //Username and password are correct
        console.log("Welcome, " + username + "!");
    }else{
        //Password is not correct
        console.log("Password does not match our records.");
    }
}else{
    //Username is not correct
    console.log("User not found. Try again.");
    }


//Movie Ticket Price
//Determines the price of a movie ticket

//Get time of movie
var movieTime = Number(prompt("Please enter the time of the movie. \nExample: 10 for ten o'clock."));

//Get the age of the customer
var customerAge = Number(prompt("Please enter your age. \nExample: 25"));

//Ticket price
var ticketPrice;

//if movie time is between 3pm and 5pm, age is less than 10 or age is grater than 55
if((movieTime >= 3 && movieTime <= 5) || (customerAge < 10 || customerAge >= 55)){
    ticketPrice = "$7.00";
}else{
    ticketPrice = "$12.00";
}

console.log("The ticket price is " + ticketPrice);