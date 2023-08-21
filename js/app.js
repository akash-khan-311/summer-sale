function getElementValueById(elementId) {
  const elementField = document.getElementById(elementId);
  const elementValueString = elementField.innerText;
  const elementValue = parseFloat(elementValueString);
  return elementValue;
}

function getElementValueById(elementId) {
  const elementField = document.getElementById(elementId);
  const elementValueString = elementField.innerText;
  const elementValue = parseFloat(elementValueString);
  return elementValue;
}
function setElementValue(elementId, value) {
  const elementField = document.getElementById(elementId);
  elementField.innerText = value;
}

let totalPriceSum = 0;

function cardEventHandler(data) {
  // Get the make purchase btn
  const makePruchaseBtn = document.getElementById("make-purchase-btn");
  // Get the apply cupon button
  const applyCuponBtn = document.getElementById("apply-cupon-btn");
  // Get The Product Name
  const productName = data.children[1].children[1].innerText;
  // Get The product Price
  const productPriceString = data.children[1].children[2].children[0].innerText;
  const productPrice = parseFloat(productPriceString);
  totalPriceSum = totalPriceSum + productPrice;
  // Validate the total price and Type

  if (totalPriceSum > 0 || totalPriceSum > 200) {
    makePruchaseBtn.removeAttribute("disabled");
  }
  if (totalPriceSum > 200) {
    applyCuponBtn.removeAttribute("disabled");
  }

  // Set All Product Price to The Total Price
  setElementValue("total-price", totalPriceSum.toFixed(2));
  // Get the total price element

  // Set the Product Name in the list
  const listParent = document.getElementById("parent-list");
  const li = document.createElement("li");
  li.innerText = productName;
  listParent.appendChild(li);
  setElementValue("grand-total", totalPriceSum.toFixed(2));
}
// Set Evenet Listener to The Apply Cupon Button

document
  .getElementById("apply-cupon-btn")
  .addEventListener("click", function () {
    const cuponCodeField = document.getElementById("cupon-code");
    const cuponCodeValue = cuponCodeField.value;
    console.log(cuponCodeValue);
    if (cuponCodeValue !== "SELL200") {
      alert("invalid cupon code");
      cuponCodeField.value = "";
      return;
    }

    const totalPrice = getElementValueById("total-price");

    discountPrice = (totalPrice * 20) / 100;
    setElementValue("discount", discountPrice);
    const grandTotal = (totalPrice - discountPrice).toFixed(2);
    setElementValue("grand-total", grandTotal);
  });

