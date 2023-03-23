import React from 'react'
import Banner from "./Banner";
import FoodCategory from "./FoodCategory";
import Services from "./Services";
import Footer from './Footer'

const Home = (props) => {
  
  return (
    <>
        <section className="p-4">
          <Banner />
        </section>
        <section className=" container mx-auto p-4">
          <FoodCategory />
        </section>
        <section className="container mx-auto p-4">
          <Services />
        </section>
        <section>
          <Footer />
        </section>
    </>
  );
}

export default Home
