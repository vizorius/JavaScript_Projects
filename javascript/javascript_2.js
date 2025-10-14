document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    function validateEmail(emailValue) {
        // Simple email regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    }

    form.addEventListener("submit", function (e) {
        let valid = true;
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        successMessage.textContent = "";

        if (name.value.trim() === "") {
            nameError.textContent = "Name is required.";
            valid = false;
        }

        if (email.value.trim() === "") {
            emailError.textContent = "Email is required.";
            valid = false;
        } else if (!validateEmail(email.value.trim())) {
            emailError.textContent = "Please enter a valid email.";
            valid = false;
        }

        if (message.value.trim() === "") {
            messageError.textContent = "Message is required.";
            valid = false;
        }

        if (!valid) {
            e.preventDefault();
        } else {
            e.preventDefault();
            successMessage.textContent = "Thank you for contacting us!";
            form.reset();
        }
    });
});