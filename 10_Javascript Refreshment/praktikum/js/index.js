const productNameInput = document.getElementById("validationProductName");
const productPriceInput = document.getElementById("validationProductPrice");
const formProduct = document.getElementById("formProduct");
const validFeedback = document.querySelector(".valid-feedback");
const invalidFeedback = document.querySelector(".invalid-feedback");

productNameInput.oninput = () => {
  var maxInputLength = 25;
  var count = 0;
  let string = productNameInput.value;
  let regex = "@/#{}";
  for (var i = 0; i < productNameInput.value.length; i++) {
    count += 1;
  }

  if (count > maxInputLength) {
    validFeedback.style.display = "none";
    invalidFeedback.style.display = "block";
    invalidFeedback.innerHTML =
      "Nama Produk tidak boleh panjang lebih dari 25 karakter!";
  } else if (count < 1) {
    validFeedback.style.display = "none";
    invalidFeedback.style.display = "block";
    invalidFeedback.innerHTML = "Nama Produk harus diisi";
  } else if (string.indexOf(regex)) {
    validFeedback.style.display = "none";
    invalidFeedback.style.display = "block";
    invalidFeedback.innerHTML = "Product name must not contain symbols";
  } else {
    invalidFeedback.style.display = "none";
    validFeedback.style.display = "block";
    validFeedback.innerHTML = "Panjang karakter nama produk : " + count;
  }
};

formProduct.onsubmit = (event) => {
  event.preventDefault();
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

  const formInputs = document.querySelectorAll("input");
  const formSelect = document.querySelectorAll("select");

  let isInputFilled = true;

  const alertDisplay = (message, type) => {
    var alertPlaceHolder = document.querySelector(".alert-placeholder");
    var innerAlertWrapper = document.createElement("div");
    innerAlertWrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");
    alertPlaceHolder.append(innerAlertWrapper);
  };

  formInputs.forEach((input) => {
    if (input.type === "radio") {
      const radioInputs = document.getElementsByName(input.name);
      if (
        !radioInputs[0].checked &&
        !radioInputs[1].checked &&
        !radioInputs[2].checked
      ) {
        isInputFilled = false;
        alertDisplay(`Please fill option for ${input.name} `, "danger");
      }
    } else if (!input.value.trim()) {
      isInputFilled = false;
      alertDisplay(`Please fill in the ${input.name} field`, "danger");
    }
  });

  formSelect.forEach((select) => {
    if (!select.value.trim()) {
      isInputFilled = false;
      alertDisplay(`Please fill in the ${select.name} field`, "danger");
      // alert(`Please fill in the ${input.name} field`);
    }
  });

  if (isInputFilled) {
    formProduct.submit();
  }
};
