//Kayla Robinson
//10-10-13
//Expressions - Industry

//This will calculate the number of hours worked on a video for a client and the total amount the client owes.

//Variable for the name of the project
var projectName = prompt("We are calculating the total amount to charge a client for a video. \nPlease enter the name of the project:");

//Variable for the number of hours spent during the initial meeting with the client.
var initialMeetingHours = prompt("Please enter the number of hours the initial meeting with the client lasted: \n(Example 1)");

//Variable for the number of hours spent on research and gathering files for the project.
var researchHours = prompt("Please enter the number of hours spent on research and gathering files for the " + projectName + " project:");

//Variable for the number of hours spent creating the project.
var creationHours = prompt("Please enter the number of hours spent creating the " + projectName + " project:");

//Variable for the cost of one hour of work.
var costPerHour = prompt("Please enter the hourly rate for the " + projectName + " project: \n(Example 30.00)");

//Print out the number of hours spent during the initial meeting with the client.
console.log("You spent a total of " + initialMeetingHours + " hour(s) meeting with the client for the " + projectName + " project.");

//Print out the number of hours spent researching for the video.
console.log("You spent a total of " + researchHours + " hour(s) researching for the " + projectName + " project.");

//Print out the number of hours spent creating the video.
console.log("You spent a total of " + creationHours + " hour(s) creating the " + projectName + " project.");

//Calculating the total number of hours worked.
var totalHours = Number(initialMeetingHours) + Number(researchHours) + Number(creationHours);

//Print out the total number of hours spent on project.
console.log("You spent a total of " + totalHours + " hours on the " + projectName + " project.");

//Calculating the difference of one free hour for meeting.
totalHours -- ;

//Print out the number of hours spent during the initial meeting with the client.
console.log("You are charging the client $" + costPerHour + " per hour of work on the " + projectName + " project.");

//Calculate the total cost of the project.
var result = totalHours * costPerHour;

//Print out the total number of hours spent on project after one free hour.
console.log("After the first free hour you spent a total of " + totalHours + " hours on the " + projectName + " project.");

//Print out the total cost of the project.
console.log("The total cost will be $" + result + " for this project.");


