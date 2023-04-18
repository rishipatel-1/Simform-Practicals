var loginForm = document.getElementById("login-form");
var registerForm = document.getElementById("register-form");
var loginToggle = document.querySelector(".form-toggle-login");
var registerToggle = document.querySelector(".form-toggle");
// Show register form
loginToggle.addEventListener("click", function (event) {
    event.preventDefault();
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
});
// Show login form
registerToggle.addEventListener("click", function (event) {
    event.preventDefault();
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
});
// Handle login form submit
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    var matchingUser = registeredUsers.find(function (user) { return user.email === email && user.password === password; });
    if (matchingUser) {
        localStorage.setItem('loggedInUser', matchingUser.name);
        var url = "./public/index.html";
        window.location.href = url;
    }
    else {
        alert("Invalid email or password");
    }
});
// Handle register form submit
registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("reg-name").value;
    var email = document.getElementById("reg-email").value;
    var password = document.getElementById("reg-password").value;
    var registeredUser = { name: name, email: email, password: password };
    var registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    registeredUsers.push(registeredUser);
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    alert("Registration successful");
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
});
var registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
if (registeredUsers.length > 0) {
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
}
