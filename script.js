document.addEventListener("DOMContentLoaded", function () {

  const qtyInput = document.getElementById("qty");
  const priceText = document.getElementById("price");
  const totalText = document.getElementById("total");
  const discountText = document.getElementById("discount");

  const price = parseInt(priceText.dataset.price) || 0;

  function updateTotal() {
    const qty = parseInt(qtyInput.value) || 1;

    let discountPercent = 0;

    if (qty >= 8) {
      discountPercent = 20;
    } else if (qty >= 3) {
      discountPercent = 10;
    }

    const subtotal = price * qty;
    const discountAmount = subtotal * (discountPercent / 100);
    const total = subtotal - discountAmount;

    discountText.innerText = discountPercent + "%";
    totalText.innerText = "IDR " + total.toLocaleString("id-ID");
  }

  qtyInput.addEventListener("input", updateTotal);

  updateTotal();
});