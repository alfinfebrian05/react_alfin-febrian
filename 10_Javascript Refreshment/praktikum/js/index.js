const productNameInput = document.getElementById("validationProductName");
const productPriceInput = document.getElementById("validationProductPrice");
const formProduct = document.getElementById("formProduct");

productNameInput.oninput = () => {
  var maxInputLength = 25;
  var count = 0;
  for (var i = 0; i < productNameInput.value.length; i++) {
    count += 1;
  }

  var validFeedback = document.querySelector(".valid-feedback");
  var invalidFeedback = document.querySelector(".invalid-feedback");

  if (count > maxInputLength) {
    validFeedback.style.display = "none";
    invalidFeedback.style.display = "block";
    invalidFeedback.innerHTML =
      "Nama Produk tidak boleh panjang lebih dari 25 karakter!";
  } else if (count < 1) {
    validFeedback.style.display = "none";
    invalidFeedback.style.display = "block";
    invalidFeedback.innerHTML = "Nama Produk harus diisi";
  } else {
    invalidFeedback.style.display = "none";
    validFeedback.style.display = "block";
    validFeedback.innerHTML = "Panjang karakter nama produk : " + count;
  }
};

formProduct.onsubmit = (e) => {
  e.preventDefault();
  //   alert("form disubmit");
  if (productNameInput.value == "" || productPriceInput.value == "") {
    // console.log(productNameInput.getAttribute("name"));
    alert(
      `${
        productNameInput.value
          ? "bagus anda telah mengisi kolom " +
            productNameInput.getAttribute("name")
          : "Please enter a valid " +
            productNameInput.getAttribute("name") +
            "!"
      } ${
        productPriceInput.value
          ? "bagus anda telah mengisi kolom " +
            productPriceInput.getAttribute("name")
          : "\nPlease enter a valid " +
            productPriceInput.getAttribute("name") +
            "!"
      }`
    );
  } else {
    alert("product submitted");
  }
};
