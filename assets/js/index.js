//Formulario de contacto

$(document).ready(function () {
    $("#contact-form").on("submit", function (e) {
        e.preventDefault();
        // CAPTCHA que no logre hacer
        // let response = grecaptcha.getResponse();
        // if(response.length == 0) {
        //    alert("Please verify captcha");
        //    return;
        //  }

        let name = $("#name").val();
        let email = $("#email").val();
        let message = $("#message").val();

        //Validación

        if (name == "" || email == "" || message == "") {
            alert("Debe llenar todos los espacios");
            return;
        }

        alert("Formulario enviado");
        document.getElementById("contactForm").reset();
    });
});

// Popover de Cards

$(function () {
    $('[data-bs-toggle="popover"]').popover()
  })
