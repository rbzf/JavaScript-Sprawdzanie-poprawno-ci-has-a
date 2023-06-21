
    function validatePassword() {
            let first_input = document.getElementById("first_password").value;
            let message = document.getElementById("error_message_validate");
            message.innerHTML="";

                if (first_input.length < 8) {
                    message.innerHTML +=" Za krótkie hasło. Minimum 8 znaków.<br>";
                    }
                if (!/[A-Z]/.test(first_input)) {
                    message.innerHTML += " Minimum jedna duża litera.<br>";
                    }
                if (!/[a-z]/.test(first_input)) {
                    message.innerHTML += " Minimum jedna mała litera.<br>";
                    }
                if (!/[#, &, @, %, !]/.test(first_input)) {
                    message.innerHTML += " Minimum jeden znak specjalny.";
                    }
            }


    function matchPassword() {
        let first_input = document.getElementById("first_password").value;
        let second_input = document.getElementById("second_password").value;
        let message = document.getElementById("error_message_match");
        message.innerHTML="";
        if (first_input != second_input) {
            message.innerHTML = "Hasła różnią się od siebie!";
        }
    }