const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", checkLoginForm);

function checkLoginForm(evt) {
    evt.preventDefault();

    const inputEmail = loginForm.elements.email;
    const inputPassword = loginForm.elements.password;

    if (inputEmail.value === "" || inputPassword.value === "") {
        alert("Please fill in all fields of the form!");
    } else {
        const dataObject = {
            email: inputEmail.value,
            password: inputPassword.value,
        };
        console.log(dataObject);
        loginForm.reset(); 
    }


} 

