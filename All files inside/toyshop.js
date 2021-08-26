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

const buttonRight = document.getElementById("slideRight");
const buttonLeft = document.getElementById("slideLeft");

buttonRight.onclick = function () {
  document.getElementById("slideContainer").scrollLeft += 950;
  console.log(document.getElementById("slideContainer").scrollLeft);
  console.log(document.getElementById("slideContainer").length);
};
buttonLeft.onclick = function () {
  document.getElementById("slideContainer").scrollLeft -= 950;
};
