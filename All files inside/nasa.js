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

function basket() {
  addToCart(0);

  window.location.href = "basket.html";
}

function addToCart(n) {
  if (JSON.parse(localStorage.getItem("cart")) == null) {
    localStorage.setItem("cart", JSON.stringify([]));
  }

  var allProductsArray = JSON.parse(localStorage.getItem("allProducts"));
  console.log(allProductsArray);
  var cartArray = JSON.parse(localStorage.getItem("cart"));
  cartArray.push(allProductsArray[n]);
  localStorage.setItem("cart", JSON.stringify(cartArray));
}
