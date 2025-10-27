function openForm() {
        const form = document.getElementById("myForm");
        form.style.display = "block";
        form.style.animation = "fadeInUp 0.6s ease forwards";
      }

      function closeForm() {
        const form = document.getElementById("myForm");
        form.style.animation = "fadeOutDown 0.5s ease forwards";
        setTimeout(() => (form.style.display = "none"), 500);
      }

      /* ✅ Optional form validation */
      function validateForm() {
        const fname = document.getElementById("fname").value.trim();
        const lname = document.getElementById("lname").value.trim();
        if (fname === "" || lname === "") {
          alert("Please fill out both first and last names.");
          return false;
        }
        alert(`Hello ${fname} ${lname}!`);
        return true;
      }

$("#slideshow > div:gt(0)").hide();
setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);