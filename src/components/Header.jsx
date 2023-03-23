import React from 'react'
import logo from '../assets/logo.png'
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {

  const itemQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="shadow-md w-full flex items-center p-3 justify-between sticky top-0 left-0 bg-white z-10">
      <div className="flex items-center">
        <img src={logo} alt="" className="w-10 cursor-pointer" />
        <p className="text-2xl ml-2 text-purple-400 font-bold cursor-pointer">
          Foodies.
        </p>
      </div>
      <div className="flex items-center">
        <li className="text-xl mr-3 p-2 cursor-pointer font-semibold">
          <NavLink
            to={"/"}
            style={({ isActive }) => ({
              color: isActive ? "red" : "",
            })}
          >
            Home
          </NavLink>
        </li>
        <li className="text-xl mr-3 p-2 cursor-pointer font-semibold">
          <NavLink
            to={"/all-foods"}
            style={({ isActive }) => ({ color: isActive ? "red" : "" })}
          >
            All foods
          </NavLink>
        </li>
        <li className="text-xl mr-3 p-2 cursor-pointer font-semibold">
          <NavLink
            to={"/orders"}
            style={({ isActive }) => ({ color: isActive ? "red" : "" })}
          >
            Orders
          </NavLink>
        </li>
      </div>
      <div className="flex items-center text-2xl mr-3 cursor-pointer relative">
        <NavLink to={"/orders"}>
          <ShoppingBasketIcon />
          <div className="absolute top-[-4px] right-[-5px] rounded-full bg-red-700 p-1 w-5 h-5"></div>
          <span className="absolute top-[-5px] right-[0px] text-sm text-white">
            {itemQuantity}
          </span>
        </NavLink>
      </div>
    </header>
  );
}

export default Header
