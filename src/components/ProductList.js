import React from "react";
import styled from "styled-components";
import games from "../data/games";
import { Link } from "react-router-dom";



const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: "Proxima Nova", Arial, Helvetica, sans-serif;
`;

const ProductBox = styled.div`
  width: 250px;
  border: 1px solid #ccc;
  padding: 16px;
  margin: 10px;
`;

const ProductName = styled.h3`
  color: #333;
  margin-top: 0;
`;

const ProductPrice = styled.p`
  color: #666;
  margin-bottom: 10px;
`;

const AddToBasketButton = styled.button`
  background-color: #003791;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-family: "Proxima Nova", Arial, Helvetica, sans-serif;
  cursor: pointer;

  &:hover {
    background-color: #024fcc;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-family: "Proxima Nova", Arial, Helvetica, sans-serif;
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
`

const ProductList = ({ addToBasket }) => {
  const handleAddToBasket = (product) => {
    addToBasket({ ...product, quantity: 1 });
  };

  return (
    <div>
      <Title>Games</Title>
      <ProductsContainer>
        {games.map((product) => (
          <ProductBox key={product.id}>
            <ProductName>
              <StyledLink to={`/games/${product.id}`}>
                {product.name}
              </StyledLink>
            </ProductName>
            <Cover src={product.image} alt="Game Cover" />
            <ProductPrice>£{product.price}</ProductPrice>
            <AddToBasketButton onClick={() => handleAddToBasket(product)}>
              Add to Basket
            </AddToBasketButton>
          </ProductBox>
        ))}
      </ProductsContainer>
    </div>
  );
};

export default ProductList;
