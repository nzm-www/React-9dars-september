import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Header from "./Header";

function Home() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://auth-rg69.onrender.com/api/products/private/all", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  return (
    <div>
      <Header />
      <div className="main-content">
        <div className="sidebar">
          <h2>Navigation</h2>
          <ul className="navull">
            <li className="navul">
              <Link to="/home">Home</Link>
            </li>
            <li className="navul">Products</li>
            <li className="navul">
              <Link to="/about">About</Link>
            </li>
            <li className="navul">Contact</li>
          </ul>
        </div>
        <div className="all">
          {products.map((product) => (
            <div key={product.id} className="card">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
