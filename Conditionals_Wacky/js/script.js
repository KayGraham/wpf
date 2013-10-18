//Kayla Robinson
//10-17-13
//Conditional_Wacky

//Display total travel time in hours or minutes for a flight with one layover

//Get length of time (hours) on first plane
var firstPlaneHours = Number(prompt("Please enter the number of hours of the first plane ride."));

//Validation of firstPlaneHours
if(firstPlaneHours != ""){
    //Display first plane ride time
    console.log("The first plane ride will be " + firstPlaneHours + " hour(s) long.");
//Did not enter firstPlaneHours
}else{
    //Remind user to enter firstPlaneHours
    alert("You must enter the number of hours of the first plan ride.");
    //Ask user to enter firstPlaneHours
    firstPlaneHours = Number(prompt("Please enter the number of hours of the first plane ride."));
    //Display first plane hours
    console.log("The first plane ride will be " + firstPlaneHours + " hour(s) long.");
}

//Get length of time (hours) of layover
var layoverHours = Number(prompt("Please enter the number of hours of the layover."));

//Validation of layoverHours
if(layoverHours != ""){
    //Display layover time
    console.log("The layover will be " + layoverHours + " hour(s) long.");
//Did not enter layoverHours
}else{
    //Remind user to enter layoverHours
    alert("You must enter the number of hours of the layover.");
    //Ask user to enter layoverHours
    layoverHours = Number(prompt("Please enter the number of hours of the layover."));
    //Display layover hours
    console.log("The layover will be " + layoverHours + " hour(s) long.");
}

//Get length of time (hours) on second plane
var secondPlaneHours = Number(prompt("Please enter the number of hours of the second plane ride."));

//Validation of secondPlaneHours
if(secondPlaneHours != ""){
    //Display second plane ride time
    console.log("The second plane ride will be " + secondPlaneHours + " hour(s) long.");
//Did not enter secondPlaneHours
}else{
    //Remind user to enter secondPlaneHours
    alert("You must enter the number of hours of the second plane ride.");
    //Ask user to enter secondPlaneHours
    secondPlaneHours = Number(prompt("Please enter the number of hours of the second plane ride."));
    //Display second plane hours
    console.log("The second plane ride will be " + secondPlaneHours + " hour(s) long.");
}

//Number of mins in an hour
var minsInHour = 60;

//Total time spent traveling
var travelTime;

//Time calculate in Hours or minutes
var hoursOrMins = prompt("Would you like to get your total travel time in hours or minutes? \nEnter H for hours or M for minutes.");

//Validation of hoursOrMins
if(hoursOrMins != ""){
    //Calculate total travel time
    travelTime = (hoursOrMins === "H") ? (firstPlaneHours + layoverHours + secondPlaneHours + " hours.") : (firstPlaneHours + layoverHours + secondPlaneHours) * minsInHour + " minutes.";
    //Display total travel time
    console.log("Your trip will take a total of " + travelTime);
//Did not enter hoursOrMins
}else{
    //Remind user to enter hoursOfMins
    alert("You must enter H or M to calculate your total travel time.");
    //Ask user to enter hoursOfMins
    hoursOrMins = prompt("Would you like to get your total travel time in hours or minutes? \nEnter H for hours or M for minutes.");
    //Calculate total travel time
    travelTime = (hoursOrMins === "H") ? (firstPlaneHours + layoverHours + secondPlaneHours + " hours.") : (firstPlaneHours + layoverHours + secondPlaneHours) * minsInHour + " minutes.";
    //Display total travel time
    console.log("Your trip will take a total of " + travelTime);
}



