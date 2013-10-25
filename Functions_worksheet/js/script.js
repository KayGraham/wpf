//Functions Worksheet

//Circumference

//Defining
var calcCir = function(p , d){
    //Run function
    var circumference = p * d;
    //Return function
    return circumference;
}

//Input values
var a = calcCir(3.14, prompt("Please enter the diameter of the circle."));

//Print out results
console.log("The circumference of the circle is " + a + ".");


//Stung!

//Defining
var numStings = function (weight, stings){
   //Run function
    var killAnimal = weight * stings;
    //Return function
    return killAnimal;
}

//Input values
var b = numStings(prompt("Please enter the weight of the animal in lbs."), 8.666666667);

//Print out results
console.log("It takes " + b + " bee stings to kill this animal.");