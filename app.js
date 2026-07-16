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
function sellProduct(product) {
  const sale = {
    id: Date.now(),
    name: product.name,
    price: product.price,
  };

  setSales([sale, ...sales]);
  setCash(cash + product.price);
}
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
   
      <hr />

      <h2>Satış et</h2>

      
      <h2>Satışlar</h2>
        {sales.length === 0 ? (
  <p>Hələ satış yoxdur.</p>
) : (
  sales.map((sale) => (
    <div
      key={sale.id}
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #ddd",
        padding: "8px 0",
      }}
    >
      <span>{sale.name}</span>
      <span>{sale.price} ₼</span>
    </div>
  ))
)}
      

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
