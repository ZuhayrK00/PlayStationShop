import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "../components/ProductList";
import Basket from "../components/Basket";
import Navbar from "../components/Navbar";
import GameDetails from "../components/GameDetails";
import Checkout from "../components/Checkout";

const ProductContainer = () => {
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const totalPrice = basket.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setTotal(totalPrice);
    };
    calculateTotal();
  }, [basket]);

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
        <Route
          path="/checkout"
          element={<Checkout total={total} basketItems={basket} />}
        />
      </Routes>
    </Router>
  );
};

export default ProductContainer;
