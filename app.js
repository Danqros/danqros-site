function showPage(id) {
    document.querySelectorAll(".page").forEach(page => {
        page.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}

let products = JSON.parse(localStorage.getItem("products")) || [];

function saveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
}

function renderProducts() {
    const list = document.getElementById("productList");
    list.innerHTML = "";

    products.forEach((p, index) => {
        list.innerHTML += `
            <div class="card">
                <b>${p.name}</b><br>
                Alış: ${p.buy}<br>
                Satış: ${p.sell}<br><br>

                <button onclick="deleteProduct(${index})">
                    Sil
                </button>
            </div>
        `;
    });
}

function addProduct() {

    const name = document.getElementById("productName").value.trim();
    const buy = document.getElementById("buyPrice").value;
    const sell = document.getElementById("sellPrice").value;

    if(name==""){
        alert("Məhsul adı boş ola bilməz.");
        return;
    }

    products.push({
        name:name,
        buy:buy,
        sell:sell
    });

    saveProducts();
    renderProducts();

    document.getElementById("productName").value="";
    document.getElementById("buyPrice").value="";
    document.getElementById("sellPrice").value="";
}

function deleteProduct(index){

    if(confirm("Silinsin?")){

        products.splice(index,1);

        saveProducts();

        renderProducts();

    }

}

renderProducts();
