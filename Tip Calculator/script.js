// Not recommended selection of elements I have just used for small project
const [
  amount,
  discount,
  tip,
  customers,
  generateBillBtn,
  totalTip,
  totalAmount,
  eachCustomerPay,
] = document.querySelectorAll(
  "#amount, #discount, #tip, #customers, .generate-bill,.total-tip, .total-amount, .each-customer-pay"
);

const [customerCount, tipValue, discountValue] = document.querySelectorAll(
  ".customers-count, .tip-value,.discount-value"
);

const inputRanges = [discount, tip, customers];

amount.addEventListener("input", (e) => {
  amount.value = e.target.value;
});

generateBillBtn.addEventListener("click", generateBill);

inputRanges.forEach((element) => {
  element.addEventListener("input", showValue);
});

function showValue(e) {
  e.target.previousElementSibling.children[0].innerText = e.target.value;
}

function generateBill() {
  if (customers.value > 0 && amount.value > 0) {
    let payAmountAfterDiscount =
      amount.value - (amount.value * discount.value) / 100;

    totalTip.value = (payAmountAfterDiscount * tip.value) / 100;

    totalAmount.innerHTML = payAmountAfterDiscount + totalTip.value;

    totalTip.innerHTML = totalTip.value;

    eachCustomerPay.innerHTML = Math.floor(
      totalAmount.innerHTML / customers.value
    );
  }
}
