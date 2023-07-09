import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "../components/ProductList";
import Basket from "../components/Basket";
import Navbar from "../components/Navbar";
import GameDetails from "../components/GameDetails";

const ProductContainer = () => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    const existingItem = basket.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedBasket = basket.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setBasket(updatedBasket);
    } else {
      setBasket([...basket, { ...product, quantity: 1 }]);
    }
  };

  const removeItem = (itemId) => {
    const updatedBasket = basket.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setBasket(updatedBasket.filter((item) => item.quantity > 0));
  };

  return (
    <Router>
      <Navbar basketItems={basket} />
      <Routes>
        <Route path="/" element={<ProductList addToBasket={addToBasket} />} />
        <Route
          path="/basket"
          element={<Basket basketItems={basket} removeItem={removeItem} />}
        />
        <Route path="/games/:id" element={<GameDetails />} />
      </Routes>
    </Router>
  );
};

export default ProductContainer;
