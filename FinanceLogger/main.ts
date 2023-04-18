const loginForm = document.getElementById("login-form") as HTMLFormElement;
const registerForm = document.getElementById("register-form") as HTMLFormElement;
const loginToggle = document.querySelector(".form-toggle-login") as HTMLAnchorElement;
const registerToggle = document.querySelector(".form-toggle") as HTMLAnchorElement;

interface RegisteredUser {
  name: string;
  email: string;
  password: string;
}


loginToggle.addEventListener("click", (event) => {
  event.preventDefault();
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
});

registerToggle.addEventListener("click", (event) => {
  event.preventDefault();
  loginForm.classList.remove("active");
  registerForm.classList.add("active");
});


loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const password = (document.getElementById("password") as HTMLInputElement).value;
  const registeredUsers: RegisteredUser[] = JSON.parse(localStorage.getItem('registeredUsers') || '[]')
   const matchingUser = registeredUsers.find(user => user.email === email && user.password === password);
  if (matchingUser) {
    localStorage.setItem('loggedInUser', matchingUser.name);
    const url = "./public/index.html";
    window.location.href = url;
  } else {
    alert("Invalid email or password");
  }
});


registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = (document.getElementById("reg-name") as HTMLInputElement).value;
  const email = (document.getElementById("reg-email") as HTMLInputElement).value;
  const password = (document.getElementById("reg-password") as HTMLInputElement).value;
  const registeredUser: RegisteredUser = { name, email, password };
  let registeredUsers: RegisteredUser[] = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
  registeredUsers.push(registeredUser);
  localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
  alert("Registration successful");
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
});


const registeredUsers: RegisteredUser[] = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
if (registeredUsers.length > 0) {
  loginForm.classList.remove("active");
  registerForm.classList.add("active");
}


