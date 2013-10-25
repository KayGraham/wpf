//Kayla Robinson
//10-24-13
//Functions_Industry

//Calculate if there are an even  number columns on 960 grid padding outside and between columns

//Get outside padding, in-between padding and number of columns
var total = calcColumns(Number(prompt("This will check to see if your layout will have columns with widths that are even numbers. \nPlease enter the total number of pixels for the total padding on the outside of the columns.")), Number(prompt("Please enter the number of pixels for the padding between each column.")), Number(prompt("Please enter the number of columns you would like to have in this layout.")));

//Calculate columns width
function calcColumns(outsidePadding, betweenPadding, numColumns){
    //Prints out padding outside columns
    console.log("Otter padding: " + outsidePadding + "px");
    //Prints out padding between columns
    console.log("Padding between columns: " +betweenPadding+ "px");
    //Prints out the number of columns
    console.log("Number of columns: " + numColumns);
    //get width of each column
    var width = (960 - outsidePadding - (betweenPadding * (numColumns - 1))) / numColumns;
    //Pass width
    return width;
}

//Check to see it columns will be even

//If it is even
if(total % 2 == 0){
    //Prints out columns will have widths that are even numbers
    console.log("These measurements will give you a layout with even column widths.");
//If not even
}else{
    //Prints out columns will not have widths that are even numbers
    console.log("These measurements will not give you a layout with even column widths.");
}