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

      <div
        style={{
          background: "#fff",
          padding: 20,
          borderRadius: 12,
          marginBottom: 20,
        }}
      >
        <input
          placeholder="Məhsul adı"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 10,
          }}
        />

        <input
          placeholder="Qiymət"
          type="number"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 10,
          }}
        />

        <button
          onClick={addProduct}
          style={{
            width: "100%",
            padding: 12,
            background: "green",
            color: "#fff",
            border: "none",
            borderRadius: 8,
          }}
        >
          Məhsul əlavə et
        </button>
      </div>

      {products.map((p) => (
        <div
          key={p.id}
          style={{
            background: "#fff",
            padding: 20,
            borderRadius: 12,
            marginBottom: 15,
          }}
        >
          <h2>{p.name}</h2>

          <h3 style={{ color: "green" }}>{p.price} ₼</h3>

          <button
            onClick={() => deleteProduct(p.id)}
            style={{
              background: "red",
              color: "#fff",
              border: "none",
              padding: 10,
              borderRadius: 8,
            }}
          >
            Sil
          </button>
        </div>
      ))}
    </div>
  );
}
