let products = [];

function addProduct() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;

  if (name === "" || price === "") {
    alert("Bütün xanaları doldurun.");
    return;
  }

  products.push({
    name: name,
    price: price
  });

  document.getElementById("name").value = "";
  document.getElementById("price").value = "";

  renderProducts();
}

function renderProducts() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  products.forEach((p, index) => {
    list.innerHTML += `
      <li>
        ${p.name} - ${p.price} ₼
        <button onclick="deleteProduct(${index})">Sil</button>
      </li>
    `;
  });
}

function deleteProduct(index) {
  products.splice(index, 1);
  renderProducts();
}
