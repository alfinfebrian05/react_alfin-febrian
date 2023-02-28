const formContactMe = document.getElementById("contact-me");

formContactMe.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("nama").value;
  var phoneNumber = document.getElementById("noHp").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const ideaDescription = document.getElementById("ideaDescription").value;

  phoneNumber = phoneNumber.replace(/\D/g, "");

  if (phoneNumber.charAt(0) === "0") {
    phoneNumber = "62" + phoneNumber.substring(1);
  }

  var myPhoneNumber = "6285701660873";
  var whatsappUrl =
    "https://wa.me/" +
    myPhoneNumber +
    "?text=" +
    encodeURIComponent(
      "Hai Alfin👋" +
        "Saya ingin menyampaikan ide Saya kepada anda. Berikut adalah data saya : \n\n" +
        "Nama : " +
        name +
        "\nNomor Handphone : " +
        phoneNumber +
        "\nEmail : " +
        email +
        "\nSubject : " +
        subject +
        "\nDeskripsi Ide : " +
        ideaDescription
    );

  alert(
    `Nama anda : ${name} \nNomor Handphone : ${phoneNumber} \nEmail Anda : ${email} \nSubject : ${subject} \nIde Anda : ${ideaDescription} \nApakah data yang anda isikan benar? Pastikan agar dapat dihubungi kembali oleh Saya segera `
  );

  window.open(whatsappUrl);
});
