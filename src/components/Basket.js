import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BasketContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: "Proxima Nova", Arial, Helvetica, sans-serif;
`;

const BasketTitle = styled.h1`
  text-align: center;
  width: 100%;
  font-family: "Proxima Nova", Arial, Helvetica, sans-serif;
`;

const ProductBox = styled.div`
  width: 250px;
  border: 1px solid #003791;
  padding: 16px;
  margin: 10px;
  text-align: center;
`;

const ItemName = styled.h3`
  color: #333;
  margin-top: 0;
`;

const ItemQuantity = styled.p`
  color: #666;
  margin-bottom: 10px;
`;

const ItemPrice = styled.p`
  color: #666;
`;

const DeleteButton = styled.button`
  background-color: #b00e13;
  color: #fff;
  border: none;
  padding: 8px;
  font-family: "Proxima Nova", Arial, Helvetica, sans-serif;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;

const TotalContainer = styled.div`
  clear: both;
  text-align: center;
  font-family: "Proxima Nova", Arial, Helvetica, sans-serif;
`;

const Total = styled.h3`
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Cover = styled.img`
  height: 100px;
  align-items: end;
`;

const Button = styled(Link)`
  background-color: #003791;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-family: "Proxima Nova", Arial, Helvetica, sans-serif;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #024fcc;
  }
`;

const Basket = ({ basketItems, removeItem }) => {
  const total = basketItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  return (
    <div>
      <BasketTitle>Your Basket</BasketTitle>
      <BasketContainer>
        {basketItems.map((item) => (
          <ProductBox key={item.id}>
            <ItemName>
              <StyledLink to={`/games/${item.id}`}>{item.name}</StyledLink>
            </ItemName>
            <Cover src={item.image} alt="Game Cover" />
            <ItemQuantity>Quantity: {item.quantity}</ItemQuantity>
            <ItemPrice>Price: £{item.price}</ItemPrice>
            <DeleteButton onClick={() => handleRemoveItem(item.id)}>
              Delete
            </DeleteButton>
          </ProductBox>
        ))}
      </BasketContainer>
      <TotalContainer>
        <Total>Total: £{total.toFixed(2)}</Total>
        <Button to="/checkout">Checkout</Button>
      </TotalContainer>
    </div>
  );
};

export default Basket;
