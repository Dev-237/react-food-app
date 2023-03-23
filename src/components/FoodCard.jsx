import React from 'react'
import { Link } from "react-router-dom";




const FoodCard = ({item}) => {



  return (
    <Link to={"/food-category"} state={item.cat_name} key={item.id} >
      <div
        className=" border-2 flex items-center flex-col p-5 w-[160px] h-[140px] hover:shadow-xl hover:scale-110 mb-5 cursor-pointer rounded-xl"
      >
        <div className="w-16 h-16 ">
          <img src={item.cat_img} alt="" className="hover:scale-125" />
        </div>
        <p className="mt-4 font-bold"> {item.cat_name}</p>
      </div>
    </Link>
  );
}

export default FoodCard
