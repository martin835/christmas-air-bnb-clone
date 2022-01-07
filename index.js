/* document.addEventListener('scroll', function(e) {
    document.querySelector('.search-wrapper').style.backgroundColor = "white";
}) */

   // EXERCISE 1
    // Take the value from the city input field and display it in an H1 on the center of the Hero content, on top of the image.
    // The letter should appear one by one while the user types them in the input.

let loc = document.getElementById("location-input");
let locOutput = document.getElementById("location-output");

const showCity = function() {
    locOutput.innerText = loc.value;    
}

loc.addEventListener("keyup", showCity);

// EXERCISE 2
    // Create an array of objects for each city you can think of. Each one should look like the following:
    //      {
    //         city: "Barcellona",
    //         img: "https://itk.ppke.hu/get/images/2078419/spanyolorsz%C3%A1g.jpg"
    //      }