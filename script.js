let first_input = document.getElementById("first_password");
let second_input = document.getElementById("second_password");


    function validatePassword() {
        let message = document.getElementById("error_message_validate");
        message.innerHTML="";
            if (first_input.value.length < 8) {
               message.innerHTML +=" Za krótkie hasło. Minimum 8 znaków.<br>";
               }
            if (!/[A-Z]/.test(first_input.value)) {
               message.innerHTML += " Minimum jedna duża litera.<br>";
               }
            if (!/[a-z]/.test(first_input.value)) {
               message.innerHTML += " Minimum jedna mała litera.<br>";
               }
            if (!/[#, &, @, %, !, $, *, ^]/.test(first_input.value)) {
               message.innerHTML += " Minimum jeden znak specjalny (#, &, @, %, !, $, *, ^).";
               }
            if (second_input.value != "") {
               matchPassword();
               }
            }


    function matchPassword() {
        let message = document.getElementById("error_message_match");
        message.innerHTML="";
        if (first_input.value != second_input.value) {
            message.innerHTML = "Hasła różnią się od siebie!";
        }
    }