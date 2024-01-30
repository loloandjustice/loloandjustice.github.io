document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with class "image1"
  var images = document.querySelectorAll(".image1");

  // Function to set random position for an element
  function setRandomPosition(element) {
    element.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
    element.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
  }

  // Set random position for each image
  images.forEach(function (image) {
    setRandomPosition(image);
  });
});

function angry() {
  // get all image with class image1 and change the src
  var images = document.querySelectorAll(".image1");
  var absImg = document.getElementById("absImg");
  var mainImg = document.getElementById("mainImg");
  mainImg.src = "./resources/sad1.gif";

  absImg.style.display = "flex";

  images.forEach(function (image) {
    image.src = "./resources/sad.gif";
  });
}
function happy() {
  // get all image with class image1 and change the src
  var images = document.querySelectorAll(".image1");
  var absImg = document.getElementById("absImg");
  absImg.style.display = "flex";
  var mainImg = document.getElementById("mainImg");
  mainImg.src = "./resources/happy3.gif";

  images.forEach(function (image) {
    image.src = "./resources/heart.gif";
  });
}

const sadCat = [
  "https://media.giphy.com/media/XKvNduSwo0nEXsjZAg/giphy.gif?cid=790b76111ibosfzlm428l6b0styogbexlsaeqps9pe53btsr&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMW1zYzB4emZyYnphMW5vcXNzb2dnZTBob2wyZ3IweGpwOG1tMHpqeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/HSvpy6Jk396SI/giphy.gif",
  "https://media.giphy.com/media/12G1D7rPEV5Cfu/giphy.gif?cid=ecf05e4789hbzyfukmwg0n4sl77ixcivxfik6ydlfxd6lhif&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/6lRhaQKmcwBos/giphy.gif?cid=ecf05e476tbixfn0oztudjhtckefpw8q3clesis35epel7fa&ep=v1_gifs_search&rid=giphy.gif&ct=g",
];

const blackmail = [
  "Please",
  "I'm begging you",
  "I'm crying",
  "I'm sad",
  "HUHUHUHU",
  "Please Say Yes",
  "I'm gonna cry",
];

function normal() {
  var absImg = document.getElementById("absImg");
  absImg.style.display = "none";
  var mainImg = document.getElementById("mainImg");
  mainImg.src = "./resources/happy1.gif";
}

let counter = 0;

function no() {
  counter++;
  let sadMusic = document.getElementById("sadMusic");
  let happyMusic = document.getElementById("happyMusic");
  happyMusic.pause();
  sadMusic.play();
  let model = document.getElementById("model");
  model.style.display = "none";
  setTimeout(() => {
    model.style.display = "flex";
    const modelImage = document.getElementById("modelImg");
    const modelText = document.getElementById("modelText");
    modelImage.src = sadCat[Math.floor(Math.random() * sadCat.length)];
    modelText.innerText =
      blackmail[Math.floor(Math.random() * blackmail.length)];
  }, 100);
}

function yes() {
  if (counter === 1 || counter === 0 || counter > 1) { // Change this line to check if it's the first try
    let model = document.getElementById("model2");
    let model2 = document.getElementById("model");
    let sadMusic = document.getElementById("sadMusic");
    sadMusic.pause();
    model2.style.display = "none";
    let happyMusic = document.getElementById("happyMusic");
    happyMusic.play();
    model.style.display = "none";
    setTimeout(() => {
      model.style.display = "flex";
    }, 100);
    const wedate = document.getElementById("wedate");
    const btns = document.getElementById("btns");
    btns.style.display = "none";
    wedate.innerText = "To JENNA: HAHA she's mine on feb 14th not yours! 😇";
    counter++; // Increment the counter after the first try
  } else {
    alert("Justice said yes!");
  }
}

function ly2() {
  let model = document.getElementById("model2");
  model.style.display = "none";
  let model2 = document.getElementById("model");
  model2.style.display = "none";
}
