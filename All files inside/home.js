setTimeout(function () {
  var videoDiv = document.getElementById("background-videoDIv");
  var img = document.createElement("img");
  img.src =
    "https://cfcdn-skin.zulily.com/media/catalog/treatments/1629231714602/1170x2000/0d382232-f400-4fd5-8dcc-7a7517cfcb09.png";
  videoDiv.innerHTML = "";
  videoDiv.append(img);
}, 3500);

const buttonRight = document.getElementById("slideRight");
const buttonLeft = document.getElementById("slideLeft");

buttonRight.onclick = function () {
  document.getElementById("slideContainer").scrollLeft += 900;
  console.log(document.getElementById("slideContainer").scrollLeft);
  console.log(document.getElementById("slideContainer").length);
};
buttonLeft.onclick = function () {
  document.getElementById("slideContainer").scrollLeft -= 900;
};

const bdy = document.getElementById("bdy");
const sticky = document.getElementById("sticky-header");
console.log(444);
bdy.onscroll = function () {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 60) {
    console.log("great than 500");

    sticky.classList.add("fixed");
  } else {
    console.log("not great than 100");
    sticky.classList.remove("fixed");
  }
};

function goToToyShop() {
  window.location.href = "toyshop.html";
}
