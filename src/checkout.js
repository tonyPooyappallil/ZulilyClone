var flag = true;
function promo() {
  if (flag) {
    var code = "masai30";
    console.log(totalPrice);
    if (document.getElementById("promoCode").value == code) {
      totalPrice = 0.7 * totalPrice;
      totalPrice = totalPrice.toFixed(2);
      console.log(totalPrice);
      var newPrice = document.createElement("h1");
      newPrice.innerHTML = `Discounted price- $${totalPrice}`;

      document.getElementById("couponDiv").append(newPrice);
      flag = false;
    }
  }
}
var totalPrice = 0;
function orderSummary() {
  var cartArray = JSON.parse(localStorage.getItem("cart"));

  var itemsCount = cartArray.length;

  cartArray.forEach((element) => {
    totalPrice += Number(element.price);
    console.log(totalPrice);
  });
  console.log(itemsCount);
  if (itemsCount == 1) {
    document.getElementById("itemscountSpan").innerHTML = "1 item";
  } else {
    document.getElementById("itemscountSpan").innerHTML = `${itemsCount} items`;
  }
  totalPrice = totalPrice.toFixed(2);
  document.getElementById("totalPriceSpan").innerHTML = totalPrice;
}
orderSummary();

function pay() {
  if (JSON.parse(localStorage.getItem("addressData")).length == 0) {
    alert("Please provide Shipping address");
    return;
  }
  setTimeout(function () {
    alert("congratulations! Payment Successfull");
  }, 3000);
}
if (JSON.parse(localStorage.getItem("addressData")) == null) {
  localStorage.setItem("addressData", JSON.stringify([]));
}
function addressForm(e) {
  e.preventDefault();
  //   alert(4444444444);
  var values = document.getElementsByClassName("address");

  var addressSet = {
    name: values[0].value,
    addressLine1: values[1].value,
    addressLine2: values[2].value,
    city: values[3].value,
    state: values[4].value,
    postalCode: values[5].value,
    country: values[6].value,
  };
  //console.log(addressSet);
  document.getElementById("adressformform").reset();

  var addressArray = JSON.parse(localStorage.getItem("addressData"));
  addressArray.push(addressSet);
  localStorage.setItem("addressData", JSON.stringify(addressArray));
}

function showAddress() {
  setTimeout(function () {
    var showAddressDiv = document.getElementById("showAddress");
    var addressArray = JSON.parse(localStorage.getItem("addressData"));
    console.log(addressArray[0].name);
    var div = document.createElement("div");
    var p1 = document.createElement("p");
    p1.innerHTML = addressArray[0].name;
    var p2 = document.createElement("p");
    p2.innerHTML = addressArray[0].addressLine1;
    var p3 = document.createElement("p");
    p3.innerHTML = addressArray[0].addressLine2;
    var p4 = document.createElement("p");
    p4.innerHTML = addressArray[0].city;

    var p5 = document.createElement("p");
    p5.innerHTML = addressArray[0].state;
    var p6 = document.createElement("p");
    p6.innerHTML = addressArray[0].postalCode;
    var p7 = document.createElement("p");
    p7.innerHTML = addressArray[0].country;
    var p8 = document.createElement("h1");
    p8.innerHTML = "Shipping To";
    showAddressDiv.innerHTML = "";
    showAddressDiv.append(p8, p1, p2, p3, p4, p5, p6, p7);
  }, 200);
}
