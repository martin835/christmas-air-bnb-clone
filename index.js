/* document.addEventListener('scroll', function(e) {
    document.querySelector('.search-wrapper').style.backgroundColor = "white";
}) */

   // EXERCISE 1
    // Take the value from the city input field and display it in an H1 on the center of the Hero content, on top of the image.
    // The letter should appear one by one while the user types them in the input.

let locInput = document.getElementById("location-input");
let locOutput = document.getElementById("location-output");

const showCity = function() {
    locOutput.innerText = locInput.value;    
}

locInput.addEventListener("keyup", showCity);

// EXERCISE 2
    // Create an array of objects for each city you can think of. Each one should look like the following:
    //      {
    //         city: "Barcellona",
    //         img: "https://itk.ppke.hu/get/images/2078419/spanyolorsz%C3%A1g.jpg"
    //      }

const cities = [
  {
    city: "Bratislava",
    img: "https://cdn-bnmpo.nitrocdn.com/SIcCiTopOjdJxTVWyYmXLjKkYLggcfbi/assets/static/optimized/rev-9ba36c3/wp-content/uploads/2020/01/Bratislava-Cityscape-image-of-Bratislava-capital-city-of-Slovakia-during-sunset..jpg",
  },

  {
    city: "Paris",
    img: "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900",
  },

  {
    city: "Seoul",
    img: "https://www.gsma.com/newsroom/wp-content/uploads//Korean-Mobile-IoT.jpg",
  },

  {
    city: "Tokio",
    img: "https://d39-a.sdn.cz/d_39/c_img_QJ_R/1ZPCr.jpeg?fl=cro,0,284,3680,2070%7Cres,1200,,1%7Cwebp,75",
  },

  {
    city: "Berlin",
    img: "https://img.static-af.com/images/meta/IDname/CITY-BER-1?aspect_ratio=12:5&max_width=1920",
  },

  {
    city: "New York",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2b/NYC_Downtown_Manhattan_Skyline_seen_from_Paulus_Hook_2019-12-20_IMG_7347_FRD_%28cropped%29.jpg",
  },

  {
    city: "London",
    img: "https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz",
  },

  {
    city: "Madrid",
    img: "https://img.static-af.com/images/meta/IDname/CITY-MAD-1?aspect_ratio=2:1&max_width=1920",
  },

  {
    city: "Moscow",
    img: "https://www.planete-energies.com/sites/default/files/styles/media_full_width_940px/public/thumbnails/image/moscow.jpg?itok=J_vRU4rA",
  },

  {
    city: "Rio de Janeiro",
    img: "https://www.avianca.com/content/dam/avianca_new/destinos/semana/gig/1-porque-visitarla/destino-rio-de-janeiro-brazil-para-conocer-el-cerro-del-corcovado.jpg",
  },

  {
    city: "Johannesburg",
    img: "https://www.andbeyond.com/wp-content/uploads/sites/5/Johannesburg-Skyline.jpg",
  },

  {
    city: "Dubai",
    img: "http://cdn.cnn.com/cnnnext/dam/assets/200924183413-dubai-9-1.jpg",
  },

  {
    city: "Sydney",
    img: "https://www.australieinfo.cz/upload/Sydney_pristav.jpg",
  },

  {
    city: "Rome",
    img: "https://www.thediaryofanomad.com/wp-content/w3-webp/uploads/2020/11/rome-for-3-days-in-rome-itinerary-vatican-dome-view.jpgw3.webp",
  },

  {
    city: "New Delhi",
    img: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1800&h=900&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F07%2F30%2Fnew-delhi-india-NEWDELHITG0721.jpg",
  },
];


// EXERCISE 3
    // We want to display the picture of the corresponding searched city as the new background of the hero section.
    
    // In the same place you took the input value, use -at the same time- a for loop to perform a check
    // on the previously created array of city+img #### BEWARE: (no advanced methods allowed: only for loops and if statements).
    
    // Check if the searched city is found in any object in the array.
    // If it's found, use the img property as the new source for the background image of the hero section.
    
    // What you should see in the end is: the image of the city as background and the name of the city as the H1 title on top of it.

locInput.addEventListener("change", function(e) {
    const value = e.target.value;
    console.log(value.toLowerCase());
    const heroImgLandscape = document.getElementById("hero-landscape-lg-pic");
    console.log(heroImgLandscape);

    for (let i = 0; i < cities.length; i++) {
        if (value.toLowerCase() === cities[i].city.toLowerCase()) {
          heroImgLandscape.srcset = cities[i].img;
        }
    }


    let today = new Date();
    let timeStamp =
      today.getDate() +
      "/" +
      today.getMonth() +
      1 +
      "/" +
      today.getFullYear() +
      " — " +
      today.getHours() +
      ":" +
      today.getMinutes() +
      ":" +
      today.getSeconds();
    let timeStampContainer = document.getElementsByClassName("wrapper-01");
    let timeStampSpan = document.createElement("span");
    timeStampSpan.innerText = timeStamp;
    timeStampContainer[0].prepend(timeStampSpan);
});

  // EXERCISE 4
    // create new arrays with similar structure [{img: "http://...", text: "lorem ipsum"}, {...}, {...}]
    // for every section in the homepage that has text+image and make it so
    // that every section which contains img+text gets generated in a randomized order on every page refresh.


const exploreNearbyOffers = [
  {
    city: "Milan",
    text: "1-hour drive",
    img: "airbnb/assets/imgs/homepage/milan.jpg",
  },
  {
    city: "Turin",
    text: "2.5-hour drive",
    img: "airbnb/assets/imgs/homepage/turin.png",
  },
  {
    city: "Venice",
    text: "4.5-hour drive",
    img: "airbnb/assets/imgs/homepage/venice.jpg",
  },
  {
    city: "Verona",
    text: "2.5-hour drive",
    img: "airbnb/assets/imgs/homepage/verona.png",
  },
  {
    city: "Florence",
    text: "4-hour drive",
    img: "airbnb/assets/imgs/homepage/florence.png",
  },
  {
    city: "Genoa",
    text: "3-hour drive",
    img: "airbnb/assets/imgs/homepage/genoa.png",
  },
  {
    city: "Bologna",
    text: "3-hour drive",
    img: "airbnb/assets/imgs/homepage/bologna.png",
  },
  {
    city: "La Spezia",
    text: "3.5-hour drive",
    img: "airbnb/assets/imgs/homepage/La-Spezia.jpg",
  },
];

let exploreNearbyContainer = document.getElementById("explore-nearby");

let randomUniqueNumbersArray = [];


do {
  let randomNumber = Math.floor(Math.random() * (exploreNearbyOffers.length));
  if (!randomUniqueNumbersArray.includes(randomNumber)) {
    randomUniqueNumbersArray.push(randomNumber);
  }
} while (randomUniqueNumbersArray.length < 8);



/* console.log(randomUniqueNumbersArray);
console.log("Lenght is: " + randomUniqueNumbersArray.length); */

for (i = 0; i < 4; i++) {
    let randomItem = randomUniqueNumbersArray[i];
    let randomItem2 = randomUniqueNumbersArray[randomUniqueNumbersArray.length - (i+1)];
    /* console.log("Random item 1: " + randomItem + typeof(randomItem));
    console.log("Random item 2: " + randomItem2); */
    exploreNearbyContainer.innerHTML += `<div class="col pr-5">
                    <div class="card-small d-flex">
                        <img src=${exploreNearbyOffers[randomItem].img} alt="">
                        <div class="align-self-end pl-3">
                            <h5>${exploreNearbyOffers[randomItem].city}</h5>
                            <p>${exploreNearbyOffers[randomItem].text}</p>
                        </div>
                    </div>
                    <div class="card-small d-flex">
                        <img src=${exploreNearbyOffers[randomItem2].img} alt="">
                        <div class="align-self-end pl-3">
                            <h5>${exploreNearbyOffers[randomItem2].city}</h5>
                            <p>${exploreNearbyOffers[randomItem2].text}</p>
                        </div>
                    </div>
                </div>`;
}

// EXERCISE 5
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
    //
    // Create a Date object via JavaScript and format it to have a date looking like this: "09/07/2021, 12:51:15"
    // Apply it in a <span> above the <h1> to show to the user the date and time of the search, but instead of the comma, separate the two with an em dash: — like so: "09/07/2021 — 12:51:15"
    // (you can create the em dash with a combination on the numpad that is: ALT + 0151)
    
  /*   let today = new Date();

    console.log(today);
    console.log(today.getDate());
    console.log(today.getMonth()+1);
    console.log(today.getFullYear());
    console.log(today.getHours());
    console.log(today.getMinutes());
    console.log(today.getSeconds());

    console.log(
      today.getDate() +
        "/" +
        today.getMonth() +
        1 +
        "/" +
        today.getFullYear() +
        " — " +
        today.getHours() +
        ":" +
        today.getMinutes() +
        ":" +
        today.getSeconds()
    );

    let timeStamp =  today.getDate() +
        "/" +
        today.getMonth() +
        1 +
        "/" +
        today.getFullYear() +
        " — " +
        today.getHours() +
        ":" +
        today.getMinutes() +
        ":" +
        today.getSeconds()

    console.log(timeStamp);

    let timeStampContainer = document.getElementsByClassName("wrapper-01");
    let timeStampSpan = document.createElement("span");
    timeStampSpan.innerText = timeStamp;
    timeStampContainer[0].prepend(timeStampSpan); */

      // EXERCISE 6
    // The search fields include: Location, Check-in date, Check-out date, Number of guests. You've displayed the first one in the H1 field on EX 1 already.
    // Let's use the rest of the data in this way; when the user clicks the search button:
    // - Create a list below the H1.
    // - get the values from the date inputs and format them to display list items with the check-in & check-out dates as:
    //      Check in: 25/07/2021
    //      Check out: 30/07/2021
    // - and the number of guests the user have selected in another list item.
    //      Guests: 2

    let checkIn = document.getElementById("date-input-1");
    let checkOut = document.getElementById("date-input-1");
    let guests = document.getElementById("input-guests");
    let searchButton = document.getElementById("search-button");
    console.log(checkIn);
    console.log(checkOut);
    console.log(guests);
    console.log(searchButton);
    console.log(locInput);
    
    searchButton.addEventListener('click', function () {
        let searchRecap = document.getElementById("filters");
        let newDivCity = document.createElement("div");
        let newDivCheckIn = document.createElement("div");
        let newDivCheckOut = document.createElement("div");
        let newDivGuests = document.createElement("div");

        newDivCity.innerText = "Destination: " + locInput.value;
        newDivCheckIn.innerText = "Check-in date: " + checkIn.value;
        newDivCheckOut.innerText = "Check-out date: " + checkOut.value;
        newDivGuests.innerText = "Guests: " + guests.value;
        
        searchRecap.appendChild(newDivCity);
        searchRecap.appendChild(newDivCheckIn);
        searchRecap.appendChild(newDivCheckOut);
        searchRecap.appendChild(newDivGuests);

    });    