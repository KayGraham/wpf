//Kayla Robinson
//10-17-13
//Conditional_Industry

//Determines if a video will fit on the main page  or media page of the site, or not at all at the current size

//Get the width of the video
var videoWidth = Number(prompt("Enter the width of the video in pixels. \nExample 300 for a video with  width of 300px."));

//Validation of videoWidth
if(videoWidth != ""){
    //Display the video width
    console.log("The video width is " + videoWidth + "px.");
//Did not enter videoWidth
}else{
    //Remind user to enter the width of the video
    alert("You must enter the the width of the video.");
    //Ask user to enter the width of the video
    videoWidth = Number(prompt("Enter the width of the video."));
    //Display the video width
    console.log("The video width is " + videoWidth + "px.");
}

//Get the width of the main page
var mainPageWidth = Number(prompt("Enter the width of the space for the video on the main page."));

//Validation of mainPageWidth
if(mainPageWidth != ""){
    //Display the main page page space width
    console.log("The space on the main page has a width of " + mainPageWidth + "px.");
//Did not enter mainPageWidth
}else{
    //Remind user to enter the width of main page
    alert("You must enter the the width of the main page.");
    //Ask user to enter the width of main page
    mainPageWidth = Number(prompt("Enter the width of the space for the video on the main page."));
    //Display the main page space width
    console.log("The space on the main page has a width of " + mainPageWidth + "px.");
}

//Get the width of the media page
var mediaPageWidth = Number(prompt("Enter the width of the space for the video on the media page."));

//Validation of mainPageWidth
if(mediaPageWidth != ""){
    //Display the main page page space width
    console.log("The space on the media page has a width of " + mediaPageWidth + "px.");
//Did not enter mediaPageWidth
}else{
    //Remind user to enter the width of media page
    alert("You must enter the the width of the media page.");
    //Ask user to enter the width of media page
    mediaPageWidth = Number(prompt("Enter the width of the space for the video on the media page."));
    //Display the media page page space width
    console.log("The space on the media page has a width of " + mediaPageWidth + "px.");
}

//Calculates which page the video will fit on at it's current size
if (videoWidth < mainPageWidth){
    //The video fits on the main page
    console.log("The video will fit on the main page.");

}else if(videoWidth < mediaPageWidth){
    //The video fits on the media page
    console.log("The video will fit on media page.");

}else{
    //The video will not fit at this size
    console.log("The video will not fit on the site at it's current size on the main page or the media page.");

}