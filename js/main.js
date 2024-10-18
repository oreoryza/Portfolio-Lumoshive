// HAMBURGER
const hamburger = document.querySelector(".more-button");
hamburger.onclick = function () {
  const linkBar = document.querySelector(".slider");
  const linkMobile = document.getElementById("link-mobile");

  linkBar.classList.toggle("active");
  linkMobile.classList.toggle("active");
};

// SEND FORM API
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      to: "moryzasativa@gmail.com",
      name: document.querySelector('input[name="yourName"]').value,
      subject: document.querySelector('input[name="subject"]').value,
      text: document.querySelector('textarea[name="message"]').value,
    };

    fetch("https://lumoshive-academy-email-api.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "x-api-key": "RJS1-202414",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        Swal.fire({
          icon: "success",
          text: "Thank you for your message!",
        });
        console.log("Success:", data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  });
