"use strict";

var forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");
pwShowHide.forEach(function (eyeIcon) {
  eyeIcon.addEventListener("click", function () {
    var pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
    pwFields.forEach(function (password) {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }

      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });
  });
});
links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    forms.classList.toggle("show-signup");
  });
});
//# sourceMappingURL=script.dev.js.map
