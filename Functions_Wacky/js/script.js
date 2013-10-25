//Kayla Robinson
//10-24-13
//Functions_Wacky

//Calculate chances of winning in a drawing

//Get totalNumEntries, numEntered and numOfPrizes
var total = calcWin(Number(prompt("Please enter the total number of entries in the drawing.")), Number(prompt("Please enter the number of entries you have in the drawing.")), Number(prompt("Please enter the total number of prizes.")));

//Calculate odds
function calcWin(totalNumEntries, numEntered, numOfPrizes){
    //define odds
    var odds = totalNumEntries / numEntered / numOfPrizes;
    //Pass odds
    return odds;
}
//Print out odds
console.log("You have a 1 in " + total + " chance of winning a prize.");

//Message for good or bad odds
var message;
//Set min for low chances of winning
var lowChance = 1/100;

//Determines if odds are good or bad
message = (1 / total > lowChance ) ? "You have a pretty good chance of winning a prize!" : "The odds are not in your favor.";
//Print out message
console.log(message);