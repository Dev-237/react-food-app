import React from 'react'
import CartItem from './CartItem';
import { useSelector } from "react-redux";
import cart_img from '../assets/cart.png'
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";



const Orderscart = () => {

  const { cartItems,totalQuantity } = useSelector(
    (state) => state.cart
  );
  const { totalPrice, deliveryCharges, totalAmount } = useSelector(
    (state) => state.cart
  ); 

  return (
    <section className="max-w-[1200px] mx-auto p-6">
      {totalQuantity > 0 ? (
        <div>
          {cartItems.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
          <div className="bg-red-200 w-60 p-4 rounded mb-10">
            <p className="text-xl">
              Total Price : <span className="text-sm">${totalPrice}</span>
            </p>
            <p className="text-xl">
              Delivery Charges : 
              <span className="text-sm">${deliveryCharges}</span>
            </p>
            <p className="text-xl">
              Total Amount : <span className="text-sm">${totalAmount}</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[90vh]">
          <img src={cart_img} alt="" className="w-[700px] h[700px]" />
          <p className="text-4xl font-bold py-7">Your Cart Is Empty</p>
          <NavLink to={'/'} >
            <Button variant="contained" color="info">
              Order now
            </Button>
          </NavLink>
        </div>
      )}
    </section>
  );
}

export default Orderscart
