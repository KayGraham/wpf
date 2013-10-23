//Functions

//function outptMsg(){
    //console.log("Hello World");
//}

//var width = 5;

//function calcArea(){
   // var width = 20;
   // var height = 30;
   // var area = width * height;
   // console.log(area);
//}

//calcArea();

//Arguments and Parameters

var total = calcArea(30, 20);

function calcArea(w, h){
    var area = w * h;
    return area; //function is spitting the info out
}

console.log(total);

function dogYears(age){ //parameters
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old.");
}

var age1 = 4;
dogYears(age1);//arguments
dogYears(5);


//Anonymous Functions

var calcArea = function(width, height){ //defining
    //code the function runs
    var area = width * height;
    return area;
}

var a = calcArea(20, 30); //invoking

console.log(a);