alert("app.js yükləndi");
let currentUser = null;

const users = {
  Nurtay: "0202",
  Togrul: "0202"
};

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (users[username] === password) {
    currentUser = username;
    document.getElementById("login").style.display = "none";
    document.getElementById("panel").style.display = "block";
    document.getElementById("welcome").innerText =
      "Xoş gəldiniz, " + username;
  } else {
    alert("İstifadəçi adı və ya şifrə yanlışdır.");
  }
}

let products = [];

function addProduct() {
  const name = document.getElementById("productName").value;
  const price = Number(document.getElementById("productPrice").value);

  if (name === "" || price <= 0) {
    alert("Məlumatları düzgün daxil edin.");
    return;
  }

  products.push({
    name,
    price
  });

  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";

  showProducts();
}

function showProducts() {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  products.forEach((p) => {
    list.innerHTML += `<li>${p.name} - ${p.price} ₼</li>`;
  });
}
