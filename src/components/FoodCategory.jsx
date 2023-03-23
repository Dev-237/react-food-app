import React from 'react'
import categories from '../data/category.js';
import FoodCard from './FoodCard.jsx';


const FoodCategory = () => {
  return (
    <>
      <div className="text-center mb-5 text-3xl font-serif">
        <p>
          What's in your <span className="text-rose-500">mood?</span>
        </p>
      </div>

      <div className="grid lg:grid-cols-6 max-w-[1200px] mx-auto items-center gap-3 md:grid-cols-4 grid-cols-3">
        {categories.map((item) => (
          <FoodCard item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default FoodCategory

    


