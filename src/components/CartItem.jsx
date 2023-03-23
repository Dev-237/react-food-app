import React from 'react'
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ButtonGroup from "@mui/material/ButtonGroup";
import {
  addItems,
  decrementQuantity,
  removeItems,
} from "../redux/foodCart/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";




const CartItem = ({item}) => {

  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(addItems(product));
  };

  const decreaseQuantity = (product) => {
    dispatch(decrementQuantity(product));
  };

  const removeFromcart = (product) => {
    dispatch(removeItems(product));
    toast.error("Deleted from cart")
  };


  return (
    <>
      <div className="flex p-3 bg-neutral-300 m-3 rounded-lg">
        <div className="w-[200px] flex  justify-center h-[80px] bg-white rounded-xl p-2">
          <img src={item.product_img} alt="" className="w-13" />
        </div>
        <div className="flex flex-col justify-between w-[600px] items-center">
          <p className="mb-5 capitalize font-semibold text-emerald-900 text-2xl">
            {item.product_name}
          </p>
          <div className="flex justify-center">
            <span className="text-xl">Quantity : </span>
            <span className="cursor-pointer justify-center ml-2">
              <ButtonGroup variant="outlined">
                <Button className="w-2 h-8" onClick={() => decreaseQuantity(item)}>
                  <RemoveIcon />
                </Button>
                <Button className="w-2 h-8">{item.product_quantity}</Button>
                <Button className="w-2 h-8" onClick={() => addToCart(item)}>
                  <AddIcon />
                </Button>
              </ButtonGroup>
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between w-[400px] items-end">
          <span>${parseInt(item.product_price) * item.product_quantity}</span>
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={() => removeFromcart(item)}
          >
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};

export default CartItem
