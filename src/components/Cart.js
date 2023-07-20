import React from "react";

const CartView = ({ shoes }) => {
  return (
    <div>
      <h2>Cart</h2>
      {shoes.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {shoes.map((shoe, index) => (
            <li key={index}>
              <p>Shoes Name: {shoe.shoesname}</p>
              <p>Description: {shoe.description}</p>
              <p>Price: {shoe.price}</p>
              <p>Quantity Available:</p>
              <p>Large: {shoe.large}</p>
              <p>Medium: {shoe.medium}</p>
              <p>Small: {shoe.small}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartView;
