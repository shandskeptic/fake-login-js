let loginForm = document.getElementById("loginForm");
let registerForm = document.getElementById("registerForm");
let username = document.getElementById("username");
let password = document.getElementById("password");
let usernameReg = document.getElementById("usernameReg");
let passwordReg = document.getElementById("passwordReg");
let adminLogin = document.getElementById("adminLogin");
let userLogin = document.getElementById("userLogin");
let newUser = document.getElementById("newUser");
let logout = document.getElementById("logout");

function onLogin() {
	if (username.value == "" && password.value == "") {
		alert("Tidak bisa login");
		loginForm.style.display = "block";
	} else if (username.value == "root" && password.value == "root") {
		alert("Login sebagai Admin");
		localStorage.setItem("role", "admin");
		localStorage.setItem("username", username.value);
		localStorage.setItem("password", password.value);
		loginForm.style.display = "none";
		logout.style.display = "block";
		adminLogin.style.display = "block";
		userLogin.style.display = "none";
	} else if (username.value == usernameReg.value && password.value == passwordReg.value) {
		alert("Login sebagai User baru");
		localStorage.setItem("role", "user baru");
		localStorage.setItem("username", username.value);
		localStorage.setItem("password", password.value);
		loginForm.style.display = "none";
		logout.style.display = "block";
		newUser.style.display = "block";
	} else {
		alert("Tidak bisa login");
		loginForm.style.display = "block";
	}
}

function onRegister() {
	loginForm.style.display = "none";
	registerForm.style.display = "block";
}

function Register() {
	if (usernameReg.value == "" && passwordReg.value == "") {
		alert("Tidak bisa Register");
		loginForm.style.display = "none";
		localStorage.clear();
	} else if (usernameReg.value == usernameReg.value || passwordReg.value == passwordReg.value) {
		localStorage.setItem("role", "user baru");
		localStorage.setItem("usernameReg", usernameReg.value);
		localStorage.setItem("passwordReg", passwordReg.value);
		alert("Register berhasil");
		loginForm.style.display = "block";
		registerForm.style.display = "none";
	} else {
		alert("Tidak bisa Register");
		loginForm.style.display = "none";
		localStorage.clear();
	}
}

function Back() {
	loginForm.style.display = "block";
	registerForm.style.display = "none";
}

if (localStorage.getItem("username", "password")) {
	loginForm.style.display = "none";
	if (localStorage.getItem("role") == "admin") {
		logout.style.display = "block";
		adminLogin.style.display = "block";
		userLogin.style.display = "none";
	} else if (localStorage.getItem("role") == "user baru") {
		logout.style.display = "block";
		adminLogin.style.display = "none";
		newUser.style.display = "block";
	} else {
		logout.style.display = "block";
		adminLogin.style.display = "none";
		userLogin.style.display = "block";
	}
}

function onLogout() {
	localStorage.clear();
	location.reload();
}
