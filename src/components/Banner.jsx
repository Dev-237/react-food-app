import React from 'react'
import delivery from "../assets/delivery.png";
import { Button } from "@mui/material";
import delivery_img from '../assets/delivery1.png'
import { Link } from 'react-router-dom';


const Banner = () => {
  return (
    <div className="grid lg:grid-cols-2">
      <div>
        <div className="flex rounded-lg bg-slate-100 w-40 p-1">
          <h3 className="font-bold text-red-600">Fast Delivery</h3>
          <img src={delivery} alt="" className="w-8 ml-2" />
        </div>
        <div className="p-5 flex flex-col items-center">
          <p className="text-4xl font-serif font-black mb-3">
            The fastest <span className="text-red-600">Delivery</span>
          </p>
          <p className="text-4xl font-black font-serif mb-3">
            at your
            <span className="text-red-600"> Home</span>
          </p>
          <p className="font-normal mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            perspiciatis quisquam ut, voluptatem harum vero fuga temporibus
            alias, excepturi eum sit minima dolore.
          </p>
          <Link to={'/all-foods'} >
            <Button variant="outlined" color="error">
              order now
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src={delivery_img}
          alt=""
          className="w-[400px]"
        />
      </div>
    </div>
  );
}

export default Banner
