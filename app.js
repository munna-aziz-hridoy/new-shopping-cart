const phoneIncreaseBtn = document.getElementById("phone-plus");
const phoneDecreaseBtn = document.getElementById("phone-minus");
const caseIncreaseBtn = document.getElementById("case-plus");
const caseDecreaseBtn = document.getElementById("case-minus");

const PHONE_PRICE = 1289;
const CASE_PRICE = 59;

function calculateProduct(product, price, isIncrease) {
  const inputField = document.getElementById(product + "-input-quantity");
  const priceField = document.getElementById(product + "-price");

  let count = parseInt(inputField.value);
  if (isIncrease) {
    count += 1;
  } else {
    if (count == 0) {
      return;
    } else {
      count -= 1;
    }
  }
  inputField.value = count;

  let totalPrice = count * price;
  priceField.innerText = totalPrice;

  calculateTotalPrice();
}

function calculateTotalPrice() {
  const subTotalField = document.getElementById("sub-total");
  const taxField = document.getElementById("tax");
  const totalField = document.getElementById("grand-total");

  let phoneTotalPriceText = document.getElementById("phone-price");
  let caseTotalPriceText = document.getElementById("case-price");

  let phoneTotalPrice = parseFloat(phoneTotalPriceText.innerText);
  let caseTotalPrice = parseFloat(caseTotalPriceText.innerText);

  let subTotal = phoneTotalPrice + caseTotalPrice;
  subTotalField.innerText = subTotal;

  let tax = subTotal / 7;
  taxField.innerText = tax.toFixed(2);

  let total = subTotal + tax;
  totalField.innerText = total.toFixed(2);
}

phoneIncreaseBtn.addEventListener("click", function () {
  calculateProduct("phone", PHONE_PRICE, true);
});

phoneDecreaseBtn.addEventListener("click", function () {
  calculateProduct("phone", PHONE_PRICE, false);
});

caseIncreaseBtn.addEventListener("click", function () {
  calculateProduct("case", CASE_PRICE, true);
});

caseDecreaseBtn.addEventListener("click", function () {
  calculateProduct("case", CASE_PRICE, false);
});
