import React, { useEffect, useState } from "react";
import products from "../data/productdata";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItems } from "../redux/foodCart/cartSlice";
import toast from "react-hot-toast";

const AllProducts = () => {


  const[allProducts, setAllProducts] = useState([])

  const dispatch = useDispatch()


  useEffect(() => {
    setAllProducts(products)
  },[])


  const addToCart = (product) => {
    dispatch(
      addItems(product)
    );
    toast.success("Added to cart")
  }


  return (
    <div className="max-w-[1200px] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 md:mx-auto  mt-10 cursor-pointer">
      {
        allProducts.map((item) => (
          <div
            className="p-3 m-5 md:w-[300px] sm:mx-auto  shadow-xl rounded-xl mb-8"
            key={item.id}
          >
            <Link to={`/food-detail/${item.id}`} key={item.id}>
              <div className="flex justify-center w-[300px] h-[200px] hover:scale-105">
                <img src={item.product_img} alt="" className="w-[200px]" />
              </div>
              <div className="py-3 h-18">
                <p className="text-2xl text-center font-bold">
                  {item.product_name}
                </p>
              </div>
            </Link>
            <div className="flex justify-between m-3">
              <span className="text-xl font-bold text-purple-900">
                ${Math.floor(item.product_price)}
              </span>
              <Button
                variant="outlined"
                color="info"
                onClick={() => addToCart(item)}
              >
                Add
              </Button>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default AllProducts;
