const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("Charged page");

  // Get the modal
  const modal = $.querySelector("#myModal");

  // Get the button that opens the modal
  const btn = $.querySelector("#myBtn");

  // Get the <span> element that closes the modal
  const span = $.querySelector(".close");

  // When the user clicks the button, open the modal
  btn.addEventListener("click", (e) => {
    modal.classList.remove("hidden");
  });

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", (e) => {
    modal.classList.add("hidden");
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", (e) => {
    if (event.target == modal) {
      modal.classList.add("hidden");
    }
  });

  // ----------------------------------------

  // Send form's data
  $.querySelector("#contactForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // stop reloading page
    const data = {
      firstname: $.querySelector("#firstname").value,
      lastname: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      subject: $.querySelector("#subject").value,
      message: $.querySelector("#message").value,
    };
    console.log(data);

    const regEmail = /^[a-z0-9\.-]+@[a-z0-9-]+\.[a-z]{2,8}(\.[a-z]{2,8})?$/;

    if (regEmail.test(email.value)) {
      // Request to server
      if (firstname && lastname && email && subject && message) {
        const response = await axios.post("http://localhost:3000/form", data);
        console.log(response);
        alert("Thank you for your message ✈️");
      }
    }
  });
});
