function checkForm(form) {
    if (form.username.value == "") {
        alert("Error: Username cannot be blank!");
        form.username.focus();
        return false;
    }
    if (form.password.value != "" && form.password.value == form.password1.value) {
        if (form.password.value.length < 6) {
            alert("Error: Password must contain at least six characters!");
            form.pwd1.focus();
            return false;
        }

        if (form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
            if (form.pwd1.value.length < 6) {
                alert("Error: Password must contain at least six characters!");
                form.pwd1.focus();
                return false;
            }
            if (form.pwd1.value == form.username.value) {
                alert("Error: Password must be different from Username!");
                form.pwd1.focus();
                return false;
            }
            re = /[0-9]/;
            if (!re.test(form.pwd1.value)) {
                alert("Error: password must contain at least one number (0-9)!");
                form.pwd1.focus();
                return false;
            }
            re = /[a-z]/;
            if (!re.test(form.pwd1.value)) {
                alert("Error: password must contain at least one lowercase letter (a-z)!");
                form.pwd1.focus();
                return false;
            }
            re = /[A-Z]/;
            if (!re.test(form.pwd1.value)) {
                alert("Error: password must contain at least one uppercase letter (A-Z)!");
                form.pwd1.focus();
                return false;
            }
        } else {
            alert("Error: Please check that you've entered and confirmed your password!");
            form.pwd1.focus();
            return false;
        }

        alert("You entered a valid password: ");
        return true;
    }

}
window.addEventListener("load", function () {
    console.log("outtest... or something")
    const form = document.getElementById("form1");
    form.addEventListener("submit", function () {
        console.log("innertest or something")
        checkForm(form);

    });
    
});
