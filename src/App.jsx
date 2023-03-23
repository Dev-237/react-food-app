import React from 'react'
import Header from './components/Header'
import '../src/App.css'
import { Route, Routes } from "react-router-dom"
import Home from './components/Home'
import ProductList from './components/ProductList'
import AllProducts from './components/AllProducts'
import FoodDetail from './components/FoodDetail'
import Orderscart from './components/OrdersCart'
import { Toaster } from 'react-hot-toast'


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />}  />
        <Route
          path={"/food-category"}
          element={<ProductList />}
        />
        <Route path={"/all-foods"} element={<AllProducts />}  />
        <Route
          path={"/food-detail/:id"}
          element={<FoodDetail />}
        />
        <Route path={"/orders"} element={<Orderscart />}  />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App

