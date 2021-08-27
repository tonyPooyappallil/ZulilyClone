const bdy = document.getElementById("bdy");
const sticky = document.getElementById("sticky-header");
//console.log(444);
bdy.onscroll = function () {
  //console.log(window.pageYOffset);
  if (window.pageYOffset >= 60) {
    //console.log("great than 500");

    sticky.classList.add("fixed");
  } else {
    //console.log("not great than 100");
    sticky.classList.remove("fixed");
  }
};

function showCart() {
  var cartArray = JSON.parse(localStorage.getItem("cart"));
  //   all items inside cart in the above array
  var cartdiv = document.getElementById("liveCart");
  cartdiv.innerHTML = "";
  // above div is where we have to append

  var itemsCount = cartArray.length;
  var totalPrice = 0;

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
    div2.append(pName);

    var pPrice = document.createElement("p");
    pPrice.innerHTML = "$" + element.price;
    totalPrice += Number(element.price);
    console.log(totalPrice);
    var btn = document.createElement("button");
    btn.innerHTML = "remove";
    btn.onclick = function () {
      console.log("clickedremove" + element.pId);
      removeFromCart(element.pId);
    };
    var div3 = document.createElement("div");
    div3.append(pPrice, btn);
    div.append(div1, div2, div3);

    cartdiv.append(div);
  });
  //console.log(itemsCount);
  if (itemsCount == 1) {
    document.getElementById("itemscountSpan").innerHTML = "1 item";
  } else {
    document.getElementById("itemscountSpan").innerHTML = `${itemsCount} items`;
  }
  totalPrice = totalPrice.toFixed(2);
  document.getElementById("totalPriceSpan").innerHTML = totalPrice;

  //   alert(itemsCount);
  //   alert(totalPrice);
}
showCart();

function removeFromCart(e) {
  var cartArray = JSON.parse(localStorage.getItem("cart"));
  var newCartArray = [];
  for (var i = 0; i < cartArray.length; i++) {
    if (cartArray[i].pId == e) {
      continue;
    }
    newCartArray.push(cartArray[i]);
  }

  localStorage.setItem("cart", JSON.stringify(newCartArray));
  showCart();
}
