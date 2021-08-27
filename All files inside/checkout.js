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
  alert("congratulations! Payment Successfull");
}
if (JSON.parse(localStorage.getItem("addressData")) == null) {
  localStorage.setItem("addressData", JSON.stringify([]));
}
function addressForm(e) {
  e.preventDefault();
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
  console.log(addressSet);
  document.getElementById("adressformform").reset();

  var addressArray = JSON.parse(localStorage.getItem("addressData"));
  addressArray.push(addressSet);
  localStorage.setItem("addressData", JSON.stringify(addressArray));
}
