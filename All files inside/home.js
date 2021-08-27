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
  //console.log(document.getElementById("slideContainer").scrollLeft);
  // console.log(document.getElementById("slideContainer").length);
};
buttonLeft.onclick = function () {
  document.getElementById("slideContainer").scrollLeft -= 900;
};

const bdy = document.getElementById("bdy");
const sticky = document.getElementById("sticky-header");
//console.log(444);
bdy.onscroll = function () {
  //console.log(window.pageYOffset);
  if (window.pageYOffset >= 60) {
    // console.log("great than 500");

    sticky.classList.add("fixed");
  } else {
    // console.log("not great than 100");
    sticky.classList.remove("fixed");
  }
};

function goToToyShop() {
  window.location.href = "toyshop.html";
}

var products = [
  {
    pId: 00,
    name: "LEGO® Creator Expert 10283 NASA Space Shuttle Discovery",
    price: 199.95,
    image:
      "https://cfcdn.zulily.com/images/cache/product/318x1000/480923/zu96340084_main_tm1626796516.jpg",
  },
  {
    pId: 1,
    name: "Black & Lime Oversize Shield Sunglasses",
    price: 19.99,
    image:
      "https://cfcdn.zulily.com/images/cache/product/290x348/453783/zu95115688_main_tm1618863014.jpg",
  },
  {
    pId: 2,
    name: "Black Fade Butterfly Oversized Sunglasses",
    price: 16.99,
    image:
      "https://cfcdn.zulily.com/images/cache/product/290x348/478918/zu94165752_main_tm1615592441.jpg",
  },
  {
    pId: 3,
    name: "Black Cat Eye Sunglasses",
    price: 21.95,
    image:
      "https://cfcdn.zulily.com/images/cache/product/290x348/453783/zu94173394_main_tm1616789722.jpg",
  },
  {
    pId: 4,
    name: "Brown Retro Glam Oval Oversize Sunglasses",
    price: 15.95,
    image:
      "https://cfcdn.zulily.com/images/cache/product/290x348/453783/zu95107768_main_tm1618863014.jpg",
  },
  {
    pId: 5,
    name: "Black Tokyo Tortoiseshell Glam Square Sunglasses",
    price: 18.95,
    image:
      "https://cfcdn.zulily.com/images/cache/product/290x348/453783/zu95107763_main_tm1618863014.jpg",
  },
  {
    pId: 6,
    name: "Black Fade Retro Glam Oval Oversize Sunglasses",
    price: 17.15,
    image:
      "https://cfcdn.zulily.com/images/cache/product/290x348/453783/zu95107764_main_tm1618863014.jpg",
  },
  {
    pId: 7,
    name: "Blue & Tortoise Cat Eye Sunglasses",
    price: 23.95,
    image:
      "https://cfcdn.zulily.com/images/cache/product/290x348/478918/zu94173393_main_tm1615592441.jpg",
  },
  {
    pId: 8,
    name: "Gold & Brown Tortoiseshell-Accent Aviator Sunglasses",
    price: 25.45,
    image:
      "https://cfcdn.zulily.com/images/cache/product/290x348/453783/zu95107766_main_tm1618863014.jpg",
  },
  {
    pId: 9,
    name: "Gray & Purple Oval Oversized Sunglasses",
    price: 20.15,
    image:
      "https://cfcdn.zulily.com/images/cache/product/290x348/478918/zu94173403_main_tm1615592441.jpg",
  },
];

if (JSON.parse(localStorage.getItem("allProducts")) == null) {
  localStorage.setItem("allProducts", JSON.stringify(products));
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function sunClicked() {
  // alert("clicked");
  var toHide = document.getElementsByClassName("hideForCat");
  var i;
  //console.log(toHide);
  for (i = 0; i < toHide.length; i++) {
    // console.log(toHide[i].id);
    toHide[i].style.display = "none";
  }

  showCategory();
}
function showCategory() {
  var cartArray = JSON.parse(localStorage.getItem("allProducts"));
  cartArray.shift();
  //   all items inside cart in the above array
  var cartdiv = document.getElementById("toShowCategory");
  cartdiv.innerHTML = "";
  // above div is where we have to append

  // var itemsCount = cartArray.length;
  // var totalPrice = 0;

  cartArray.forEach((element) => {
    var div = document.createElement("div");

    var img = document.createElement("img");
    img.src = element.image;
    var div1 = document.createElement("div");
    div1.append(img);

    var pName = document.createElement("p");
    pName.innerHTML = element.name;

    // var pQty = document.createElement("p");
    // pQty.innerHTML = "QTY: 1";

    var div2 = document.createElement("div");

    var div_2 = document.createElement("div");
    div_2.append(pName);

    var pPrice = document.createElement("p");
    pPrice.innerHTML = "$" + element.price;
    // totalPrice += Number(element.price);
    // console.log(totalPrice);
    var btn = document.createElement("button");
    btn.innerHTML = "add to basket";
    btn.onclick = function () {
      console.log("clickedremove" + element.pId);
      addToCart(element.pId);
    };
    var div_3 = document.createElement("div");
    div_3.append(pPrice, btn);
    div2.append(div_2, div_3);
    div.append(div1, div2);

    cartdiv.append(div);
  });
  // console.log(itemsCount);
  // if (itemsCount == 1) {
  //   document.getElementById("itemscountSpan").innerHTML = "1 item";
  // } else {
  //   document.getElementById("itemscountSpan").innerHTML = `${itemsCount} items`;
  // }
  // document.getElementById("totalPriceSpan").innerHTML = totalPrice;

  //
}
if (JSON.parse(localStorage.getItem("cart")) == null) {
  localStorage.setItem("cart", JSON.stringify([]));
}
function addToCart(e) {
  var cartArray = JSON.parse(localStorage.getItem("cart"));
  var allProductsArray = JSON.parse(localStorage.getItem("allProducts"));
  for (var i = 0; i < allProductsArray.length; i++) {
    if (allProductsArray[i].pId == e) {
      cartArray.push(allProductsArray[i]);
      break;
    }
  }

  localStorage.setItem("cart", JSON.stringify(cartArray));
}
