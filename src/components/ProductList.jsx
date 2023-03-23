import React from "react";
import products from "../data/productdata";
import { Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItems } from "../redux/foodCart/cartSlice";
import toast from "react-hot-toast";



const ProductList = () => {

  const location = useLocation();
  const category = location.state;

  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(addItems(product));
    toast.success("Added to cart");
  };


  return (
    <div className="grid lg:grid-cols-3 max-w-[1200px] mx-auto md:grid-cols-2 md:mx-auto sm:grid-cols-1 mt-10">
      {products
        .filter((item) => {
          if (item.product_cat === category) return item;
          return "";
        })
        .map((item) => (
          <div
            className="p-3 m-5 md:w-[300px] sm:w-full  shadow-xl rounded-xl  mb-8"
            key={item.id}
          >
            <Link to={`/food-detail/${item.id}`} key={item.id}>
              <div className=" flex justify-center w-[300px] h-[200px] hover:scale-105">
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
                Add to cart
              </Button>
            </div>
          </div>
        ))}
    </div>
  );
};


export default ProductList;







//   return (
//     <div className="grid lg:grid-cols-3 max-w-[1200px] mx-auto md:grid-cols-2 md:mx-auto sm:grid-cols-1 mt-10">
//       {products
//         .filter((item) => {
//           if (item.product_cat === category) return item;
//           return "";
//         })
//         .map((item) => (
//           <div
//             className="p-3 m-5 md:w-[300px] sm:w-full  shadow-xl rounded-xl relative mb-8"
//             key={item.id}
//           >
//             <div className=" flex justify-center w-[300px] h-[200px] hover:scale-105">
//               <img src={item.product_img} alt="" className="w-[200px]" />
//             </div>
//             <div className="py-3 h-18">
//               <p className="text-2xl text-center font-bold">
//                 {item.product_name}
//               </p>
//               <span>
//                 <FavoriteIcon className="absolute top-[200px] right-[20px] cursor-pointer text-gray-400" />
//               </span>
//             </div>
//             <div className="flex justify-between m-3">
//               <span className="text-xl font-bold text-purple-900">
//                 {item.product_price}
//               </span>
//               <Button variant="outlined" color="info">
//                 Add to cart
//               </Button>
//             </div>
//           </div>
//         ))}
//     </div>