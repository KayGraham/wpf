//Kayla Robinson
//10-17-13
//Conditional_Personal

//Determine if the checkout line is too long to wait

//Get the number of people in line ahead of you
var numAhead = Number(prompt("Please count the number of people in line ahead of you and enter it here."));

//Validation of numAhead
if(numAhead != ""){
    //Display the number of people in line
    console.log("There are " + numAhead + " people in line ahead of you.");
//Did not enter number of people in line
}else{
    //Remind user to enter the number of people in line
    alert("You must enter the number of people in line ahead of you.");
    //Ask user to enter the number of people in line ahead of you
    numAhead = Number(prompt("Please count the number of people in line ahead of you and enter it here."));
    //Display the number of people in line
    console.log("There are " + numAhead + " people in line ahead of you.");
}

//Get the amount of time spent in line
var timeInLine = Number(prompt("Please the number of minutes you have already spent in line."));

//Validation of numAhead
if(timeInLine != ""){
    //Display the number of people in line
    console.log("You have spent " + timeInLine + " minutes in line already.");
//Did not enter number of people in line
}else{
    //Remind user to enter the number of people in line
    alert("You must enter the amount of time spent in line.");
    //Ask user to enter the amount of time spent in line
    timeInLine = Number(prompt("Please the number of minutes you have already spent in line."));
    //Display the number of people in line
    console.log("You have spent " + timeInLine + " minutes in line already.");
}
//If it will take too long to checkout
if(numAhead >= 5 || timeInLine >= 10){
    //It is going to take to long
    console.log("It is going to take to long, just leave.");
//Line or wait time is not too long
}else{
    //It will not be too long
    console.log("It should not take to long, you can wait in line.");
}