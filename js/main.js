//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



//fetch photos

const getData = async () => {
  await fetch('https://jsonplaceholder.typicode.com/photos?_delay=5000')
    .then((response) => {
      return response.json();
    })
    .then((photos) => {
      console.log(photos);

      const spinner = document.getElementById("spin");
      //spinner.className = "d-none"

      for (let i = 0; i < 12; i++) {

        const cardCont = document.createElement("div");
        document.getElementById("juegos-container").appendChild(cardCont);

        const cardBody= document.createElement("div");
        cardBody.className = "card-body";
        cardCont.appendChild(cardBody);

        const pics = document.createElement("img");
        pics.src = photos[i].thumbnailUrl;
        pics.className = "card-img-top";
        cardBody.appendChild(pics);

        const title = document.createElement("h6");
        title.innerText = photos[i].title;
        title.className = "card-title";
        cardBody.appendChild(title);
      }
    });
};

getData();