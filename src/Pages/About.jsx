import React, { useState, useEffect } from "react";
import "./About.css";
import Header from "./Header";
function About() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/register";
    } else {
      const savedCards = JSON.parse(localStorage.getItem("cards")) || [];
      setCards(savedCards);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://auth-rg69.onrender.com/api/products/private",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(formData),
        }
      );
      const newCard = await response.json();
      const updatedCards = [...cards, newCard];
      setCards(updatedCards);
      localStorage.setItem("cards", JSON.stringify(updatedCards));
      setFormData({ name: "", description: "", price: "" });
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="App">
        <form onSubmit={handleSubmit} className="aboutfor">
          <h2>Product Form</h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Product Name"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Product Description"
            required
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Product Price"
            required
          />
          <button type="submit">Submit</button>
        </form>
        <div className="cards">
          {cards.map((card, index) => (
            <div key={index} className="formcard">
              <h3>{card.name}</h3>
              <p>{card.description}</p>
              <p>Price: ${card.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
