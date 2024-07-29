console.log("This is my index js file");

// Initialize the news api parameters
let apiKey = "99a75cd5cc6c90e13af94e1042482598";

// Grabbing the buttons by their unique IDs
let world = document.getElementById("world");
let india = document.getElementById("india");
let usa = document.getElementById("usa");
// let korea = document.getElementById("sKorea");
// let ukraine = document.getElementById("ukraine");
// let newZealand = document.getElementById("newZealand");
let australia = document.getElementById("australia");
let ipl = document.getElementById("ipl");

// Populating the webpage for the first time with World News as default
let https = `https://gnews.io/api/v4/search?q=example&token=${apiKey}`;
ajaxRequest(https);

// Getting news for World
world.addEventListener("click", () => {
  let https = `https://gnews.io/api/v4/search?q=example&token=${apiKey}`;
  ajaxRequest(https);
});

// Getting news for India
india.addEventListener("click", () => {
  let country = "in";
  let https = `https://gnews.io/api/v4/top-headlines?q="India"&token=${apiKey}&country=${country}&lang=en`;
  ajaxRequest(https);
});

// Getting news for USA
usa.addEventListener("click", () => {
  let country = "us";
  let https = `https://gnews.io/api/v4/top-headlines?q=example&token=${apiKey}&country=${country}&lang=en`;
  ajaxRequest(https);
});

// Getting news for IPL
ipl.addEventListener("click", () => {
  let country = "in";
  let https = `https://gnews.io/api/v4/top-headlines?q="IPL"&token=${apiKey}&country=${country}&lang=en&topic=sports`;
  ajaxRequest(https);
});

// Getting news for Australia
australia.addEventListener("click", () => {
  let country = "au";
  let https = `https://gnews.io/api/v4/top-headlines?q=example&token=${apiKey}&country=${country}&lang=en`;
  ajaxRequest(https);
});

// // Getting news for New Zealand
// newZealand.addEventListener("click", () => {
//   let country = "nz";
//   let https = `https://gnews.io/api/v4/top-headlines?q=example&token=${apiKey}&country=${country}&lang=en`;
//   ajaxRequest(https);
// });

// // Getting news for South Korea
// korea.addEventListener("click", () => {
//   let country = "ru";
//   let https = `https://gnews.io/api/v4/top-headlines?q=example&token=${apiKey}&country=${country}`;
//   ajaxRequest(https);
// });

// // Getting news for Ukraine
// ukraine.addEventListener("click", () => {
//   let country = "ua";
//   let https = `https://gnews.io/api/v4/search?q=example&token=${apiKey}&country=${country}`;
//   ajaxRequest(https);
// });

// Grab the news container
let newsAccordion = document.getElementById("newsAccordion");

// Trial URL for getting different news
// *************************GNewsAPI News Source*******************************************
// https://gnews.io/api/v4/top-headlines?q=example&token=${apiKey}&country=${country}&lang=en


// *************************NewsAPI News Source****************************************
// https://newsapi.org/v2/top-headlines/sources?apiKey=API_KEY
// https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY

// Create a function to get an ajax get request
function ajaxRequest(https) {
  xhr = new XMLHttpRequest();
  xhr.open("GET", https, true);

  // What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      let articles = json.articles;
      console.log(articles);
      let newsHtml = "";
      articles.forEach(function (element, index) {
        // console.log(element, index)
        let news = `<div class="card">
        <div class="card-header" id="heading${index}">
        <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
        aria-expanded="false" aria-controls="collapse${index}">
        <b>News ${index + 1}:</b> ${element["title"]}
        </button>
        </h2>
        </div>
        
        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
        <div class="card-body"> ${element["content"]}. <a href="${
          element["url"]
        }" target="_blank" >Read more here</a>  </div>
    </div>
                        </div>`;
        newsHtml += news;
      });
      newsAccordion.innerHTML = newsHtml;
    } else {
      console.log("Some error occured");
    }
  };

  xhr.send();
}
