import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const estimatedTax = (totalAmount * 0.1).toFixed(2); // Assuming 10% tax rate
  const shippingFee = totalAmount > 500 ? 0 : 20; // Free shipping for orders above $500
  const finalTotal = (
    parseFloat(totalAmount) +
    parseFloat(estimatedTax) +
    shippingFee
  ).toFixed(2);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart-items">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="order-summary-item">
              <span>Subtotal</span>
              <span>${totalAmount}</span>
            </div>
            <div className="order-summary-item">
              <span>Estimated Tax</span>
              <span>${estimatedTax}</span>
            </div>
            <div className="order-summary-item">
              <span>Shipping</span>
              <span>${shippingFee === 0 ? "Free" : `$${shippingFee}`}</span>
            </div>
            <hr />
            <div className="order-summary-item total">
              <span>Total</span>
              <span>${finalTotal}</span>
            </div>
          </div>

          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button onClick={() => navigate("/checkout")}>
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <h1>Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
