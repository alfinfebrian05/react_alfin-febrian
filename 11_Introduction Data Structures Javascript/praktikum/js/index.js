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
    }
  });

  if (isInputFilled) {
    const productJson = {
      productName: null,
      productCategory: null,
      productFreshness: null,
      productImage: null,
      productDescription: null,
      productPrice: `Rp + ${null}`,
    };

    const productNameValue = document.getElementById(
      "validationProductName"
    ).value;
    const productImageValue = document.getElementById("product-image");
    const productCategoryValue =
      document.getElementById("product-category").value;
    const radioInputs = document.querySelectorAll("input[type='radio']");
    const productDescriptionValue =
      document.getElementById("productDescription").value;
    const productPriceValue = document.getElementById(
      "validationProductPrice"
    ).value;

    productJson.productName = productNameValue;
    productJson.productCategory = productCategoryValue;
    productJson.productImage = productImageValue.value.split("\\").pop();
    radioInputs.forEach((radioInput) => {
      if (radioInput.checked) {
        productJson.productFreshness = radioInput.value;
      }
    });
    productJson.productDescription = productDescriptionValue;
    productJson.productPrice = "Rp" + productPriceValue;

    const items = JSON.parse(localStorage.getItem("productJSONData")) || [];
    items.push(productJson);
    localStorage.setItem("productJSONData", JSON.stringify(items));

    window.location.reload();
  }
};

function loadItems() {
  const items = JSON.parse(localStorage.getItem("productJSONData"));

  const table = document.getElementById("items");

  if (items.length < 1) {
    const row = table.insertRow();
    row.innerHTML =
      "<td colspan='8' class='text-center p-3 text-danger'>Belum ada produk di tambahkan</td>";
  } else {
    for (let i = 0; i < items.length; i++) {
      const row = table.insertRow();
      row.innerHTML = `
      <td>${i + 1}</td>
      <td>${items[i].productName}</td>
      <td>${items[i].productCategory}</td>
      <td>${items[i].productImage}</td>
      <td>${items[i].productFreshness}</td>
      <td>${items[i].productDescription}</td>
      <td>Rp ${items[i].productPrice}</td>
      <td>
          <button class="btn btn-danger" onclick="deleteProduct(${
            items.length - 1
          })">
              Delete Product
          </button>
      </td>
    `;
    }
  }
}

loadItems();

function deleteProduct(id) {
  const items = JSON.parse(localStorage.getItem("productJSONData")) || [];

  items.splice(id, 1);

  localStorage.setItem("productJSONData", JSON.stringify(items));

  const table = document.getElementById("items");
  table.deleteRow(id);

  alert("Produk berhasil dihapus");

  window.location.reload();
}
