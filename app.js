import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Yorğan 200x220", price: 24 },
    { id: 2, name: "Yastıq 50x70", price: 12 },
  ]);

  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const addProduct = () => {
    if (!newName || !newPrice) return;

    setProducts([
      ...products,
      {
        id: Date.now(),
        name: newName,
        price: Number(newPrice),
      },
    ]);

    setNewName("");
    setNewPrice("");
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="App">
      <h1>Danqroş</h1>

      <h2>Məhsullar</h2>

      <input
        type="text"
        placeholder="Məhsulun adı"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Qiymət"
        value={newPrice}
        onChange={(e) => setNewPrice(e.target.value)}
      />

      <button onClick={addProduct}>Əlavə et</button>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} — {product.price} ₼
            <button onClick={() => deleteProduct(product.id)}>
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
