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