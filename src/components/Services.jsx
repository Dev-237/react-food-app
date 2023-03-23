import React from 'react'
import fastdelivery_img from "../assets/fastdelivery.png";
import healthyfood_img from "../assets/healthyfood.png";
import emoji_img from "../assets/emoji.png";

const Services = () => {
  return (
    <div>
      <div className="text-center mb-5 text-3xl font-serif">
        <p>
          What we <span className="text-rose-500">serve?</span>
        </p>
      </div>
      <div className="flex items-center m-4 justify-center">
        <div className="w-[250px] h-[200px] flex items-center flex-col m-3 p-3 border-2 hover:scale-105 rounded-3xl">
          <img src={fastdelivery_img} alt="" className="w-[150px]" />
          <p className="mt-2 font-bold">Quick Delivery</p>
          <p className="mt-2 text-sm text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
          </p>
        </div>
        <div className="w-[250px] h-[200px] flex items-center flex-col m-3 relative p-3 border-2 hover:scale-105 rounded-3xl">
          <img src={healthyfood_img} alt="" className="w-[150px]" />
          <img
            src={emoji_img}
            alt=""
            className="absolute w-14 animate-bounce right-0"
          />
          <p className="mt-2 font-bold">Healthy food</p>
          <p className="mt-2 text-sm text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services
