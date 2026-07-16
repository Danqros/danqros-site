import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Yorğan 200x220", price: 24 },
    { id: 2, name: "Yastıq 50x70", price: 12 },
  ]);

  const [selected, setSelected] = useState(1);
  const [sales, setSales] = useState([]);
  const [cash, setCash] = useState(0);

  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const sell = () => {
    const product = products.find((p) => p.id === Number(selected));
    if (!product) return;

    setSales([...sales, product]);
    setCash(cash + product.price);
  };

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

  return (
    <div className="container">
      <h1>Danqroş Satış Sistemi</h1>

      <h2>Məhsullar</h2>
    {products.map((product) => (
  <div
    key={product.id}
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      border: "1px solid #ddd",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "8px",
    }}
  >
    <div>
      <b>{product.name}</b>
      <br />
      {product.price} ₼
    </div>

    <button onClick={() => sellProduct(product)}>
      Sat
    </button>
  </div>
))}
    <ul>
  {products.map((product) => (
    <li key={product.id}>
      {product.name} — {product.price} ₼
    </li>
  ))}
</ul>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} — {p.price} ₼
          </li>
        ))}
      </ul>

      <hr />

      <h2>Satış et</h2>

      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {products.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>

      <button onClick={sell}>Sat</button>

      <h2>Satışlar</h2>
      <ul>
        {sales.map((s, i) => (
          <li key={i}>
            {s.name} — {s.price} ₼
          </li>
        ))}
      </ul>

      <h2>Kassa: {cash} ₼</h2>

      <input
        placeholder="Məhsul adı"
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
    </div>
  );
}
