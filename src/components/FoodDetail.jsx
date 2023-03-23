import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import products from "../data/productdata";
import veg_pizza_img from "../assets/veg_pizza2.png"; 
import { Button } from "@mui/material";
import { addItems } from "../redux/foodCart/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";



const FoodDetail = () => {

  const {id} = useParams()
  const product = products.find((item) => item.id == id);

  const[click, setClick] = useState("desc")

  const dispatch = useDispatch();

  
  const addToCart = (product) => {
    dispatch(addItems(product));
    toast.success("Added to cart");
  };


  return (
    <section className="w-full p-5 ">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "100px 1fr 1fr",
          gap: "10px",
        }}
      >
        <div className="flex flex-col">
          <img
            src={veg_pizza_img}
            alt=""
            className="w-20 h-20 cursor-pointer mb-3"
          />
          <img
            src={veg_pizza_img}
            alt=""
            className="w-20 h-20 cursor-pointer mb-3"
          />
          <img
            src={veg_pizza_img}
            alt=""
            className="w-20 h-20 cursor-pointer mb-3"
          />
        </div>
        <div className="flex justify-center">
          <img
            src={product.product_img}
            alt=""
            className="w-[500px] h-[300px] cursor-pointer"
          />
        </div>
        <div className="ml-3">
          <p className="text-4xl font-bold text-pink-600  capitalize my-2">
            {product.product_name}
          </p>
          <p className="my-2 text-xl">
            Quantity: <span>1</span>
          </p>
          <p className="text-xl my-2 font-semibold text-purple-900">
            Price: <span>${product.product_price}</span>
          </p>
          <p className="my-2 ">
            Desc:
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              beatae dolorem, dolore molestias minus officia ut tempore saepe
              corrupti laborum hic autem quae iusto quas nulla! Sapiente, eius!
              Vitae, vero.
            </span>
          </p>
          <div className="text-center my-3">
            <Button
              variant="contained"
              color="error"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
      <div>
        <span
          className={`mr-3 text-sm font-semibold cursor-pointer ${
            click === "desc" ? "text-rose-800 border-b-2 border-rose-500" : ""
          }`}
          onClick={() => setClick("desc")}
        >
          Description
        </span>
        <span
          className={`mr-3 text-sm font-semibold cursor-pointer ${
            click === "review" ? "text-rose-800 border-b-2 border-rose-500" : ""
          }`}
          onClick={() => setClick("review")}
        >
          Review
        </span>
        {click === "desc" ? (
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            aspernatur quam veritatis earum excepturi reprehenderit unde maxime
            fugit eaque iste recusandae perspiciatis nihil, incidunt doloremque
            quos similique laudantium nesciunt. Amet!
          </div>
        ) : (
          <div>review</div>
        )}
      </div>
    </section>
  );
}

export default FoodDetail
