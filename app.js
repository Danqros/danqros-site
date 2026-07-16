document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { name: "Məhsul 1", price: 10 },
    { name: "Məhsul 2", price: 15 },
    { name: "Məhsul 3", price: 20 }
  ];

  const list = document.getElementById("product-list");

  if (list) {
    products.forEach(product => {
      const item = document.createElement("div");
      item.className = "product";
      item.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.price} ₼</p>
      `;
      list.appendChild(item);
    });
  }
});
