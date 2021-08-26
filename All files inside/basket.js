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
