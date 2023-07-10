import React, { useState } from "react";
import styled from "styled-components";

const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Proxima Nova", Arial, Helvetica, sans-serif;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    border-left: 3px solid #003791;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-right: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  margin-left: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  margin-left: 10px;
  font-family: "Proxima Nova", Arial, Helvetica, sans-serif;
`;

const Select = styled.select`
  margin-bottom: 10px;
  padding: 5px;
  margin-left: 10px;
  font-family: "Proxima Nova", Arial, Helvetica, sans-serif;
`;

const Button = styled.button`
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

const GameListContainer = styled.div`
  width: 50%;
  margin-left: 20px;
  text-align: center;
`;

const GameList = styled.ul`
  list-style: none;
  padding: 0;
`;

const GameItem = styled.li`
  margin-bottom: 10px;
  margin-bottom: 20px;
`;

const GameName = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const GamePrice = styled.span`
  color: #666;
`;

const Total = styled.p`
  margin-top: 30px;
`;

const CheckoutTitle = styled.h1`
  text-align: center;
  width: 100%;
  font-family: "Proxima Nova", Arial, Helvetica, sans-serif;
`;

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const PopupContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
`;

const PopupMessage = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
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

const Checkout = ({ total, basketItems }) => {
  const [showPopup, setShowPopup] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    window.location.reload(); 
  };

  return (
    <div>
      <CheckoutTitle>Checkout</CheckoutTitle>

      <CheckoutContainer>
        <Form onSubmit={handleSubmit}>
          <Label>
            First Name:
            <Input type="text" />
          </Label>
          <br />

          <Label>
            Last Name:
            <Input type="text" />
          </Label>
          <br />

          <Label>
            Email:
            <Input type="email" />
          </Label>
          <br />

          <Label>
            Payment Method:
            <Select>
              <option value="">Select a payment method</option>
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bankTransfer">Bank Transfer</option>
            </Select>
          </Label>
          <br />

          <Button type="submit">Place Order</Button>
        </Form>

        <GameListContainer>
          <GameList>
            {basketItems.map((item) => (
              <GameItem key={item.id}>
                <GameName>{item.name}</GameName>
                <GamePrice>- £{item.price}</GamePrice>
              </GameItem>
            ))}
          </GameList>

          <Total>
            <b>Total: £{total}</b>
          </Total>
        </GameListContainer>
      </CheckoutContainer>

      {showPopup && (
        <Popup>
          <PopupContent>
            <PopupMessage>Thank you for your purchase!</PopupMessage>
            <CloseButton onClick={handleClosePopup}>Close</CloseButton>
          </PopupContent>
        </Popup>
      )}
    </div>
  );
};

export default Checkout;
