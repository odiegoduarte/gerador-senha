document.getElementById("btn1").onclick = function () {
  getPassword();
};
document.getElementById("btn2").onclick = function () {
  copyPassword();
};

function getPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwtzABCDEFGHIJKLMNOPQURSTVWXYZ!@#$%^&*()<>{}[]:;/?|";
  let passwordLength = 15;
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randInt = Math.floor(Math.random() * chars.length);
    password += chars.substring(randInt, randInt + 1);
  }
  document.getElementById("Password").value = password;
}

function copyPassword() {
  let copiedPass = document.getElementById("Password");

  copiedPass.select();

  document.execCommand("copy");

  alert(" Sua senha foi copiada " + copiedPass.value);
}