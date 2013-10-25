//Kayla Robinson
//10-24-13
//Functions_Personal

//Determine which insurance plan would be cheapest

//Calculate the total amount spent for 12 months of paying a premium and the deductible

var calcTotal = function(months, premium, deductible){ //defining the number of months, premium and deductible
    //code the function runs
    var results = months * premium + deductible;
    //passes results
    return results;
}

//Calculate total of Plan 1
var a = calcTotal(Number(prompt("We are calculating the total cost and comparing three(3) different insurance plans. \nPlease enter the number of months you would like to calculate the cost of insurance coverage for Plan # 1.")), Number(prompt("Please enter the premium for Plan #1.")), Number(prompt("Please enter the deductible for Plan #1."))); //invoking

//Prints out total of Plan 1
console.log("Plan #1 will cost a total of $" + a + ".");

//Calculate total of Plan 2
var b = calcTotal(Number(prompt("Please enter the number of months you would like to calculate the cost of insurance coverage for Plan #2.")), Number(prompt("Please enter the premium for Plan #2.")), Number(prompt("Please enter the deductible for Plan #2."))); //invoking

//Prints out total of Plan 2
console.log("Plan #2 will cost a total of $" + b + ".");

//Calculate total of Plan 3
var c = calcTotal(Number(prompt("Please enter the number of months you would like to calculate the cost of insurance coverage for Plan #3.")), Number(prompt("Please enter the premium for Plan #3.")), Number(prompt("Please enter the deductible for Plan #3."))); //invoking

//Prints out total of Plan 3
console.log("Plan #3 will cost a total of $" + c + ".");

//Calculates which plan is cheaper
//Plan 1 is cheaper
if (a < b && a < c){
    //Prints out Plan 1 is cheaper
    console.log("Plan #1 would be the cheapest option.");
//Plan 2 is cheaper
}else if(b < a && b < c){
    //Prints out Plan 2 is cheaper
    console.log("Plan #2 would be the cheapest option.");

//Plan 3 is cheaper
}else if(c < a && c < b){
    //Prints out Plan 3 is cheaper
    console.log("Plan #3 would be the cheapest option.");

//Plan 3 is cheaper
}else{
    //Prints out Plan 3 is cheaper
    console.log("Two or more of these plans will cost the same amount, either will be great.");
}