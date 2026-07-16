let products = JSON.parse(localStorage.getItem("products")) || [];

function saveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
}

function renderProducts() {
    const tbody = document.getElementById("product-list");
    tbody.innerHTML = "";

    products.forEach((p, index) => {
        tbody.innerHTML += `
        <tr>
            <td>${p.name}</td>
            <td>${p.buy}</td>
            <td>${p.sell}</td>
            <td><button onclick="deleteProduct(${index})">Sil</button></td>
        </tr>`;
    });
}

function addProduct() {
    const name = document.getElementById("name").value.trim();
    const buy = document.getElementById("buy").value;
    const sell = document.getElementById("sell").value;

    if (!name || !buy || !sell) {
        alert("Bütün xanaları doldurun.");
        return;
    }

    products.push({
        name,
        buy,
        sell
    });

    saveProducts();
    renderProducts();

    document.getElementById("name").value = "";
    document.getElementById("buy").value = "";
    document.getElementById("sell").value = "";
}

function deleteProduct(index) {
    products.splice(index, 1);
    saveProducts();
    renderProducts();
}

renderProducts();
