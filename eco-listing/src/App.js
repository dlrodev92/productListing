import React, { useState } from 'react';
import './App.css';
import ProductCard from '../src/components/ProductCard';
import FilterSearch from './components/FilterSearch';
import products from './assets/productarray';
import Modal from './components/Modal';

function App() {
  const [filter, setFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFilter = (value) => {
    setFilter(value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getProduct = products.map((product) => {
    let labelColor = "";
    if (
      (filter === "sustainable" && product.sustainable) ||
      (filter === "local" && product.local) ||
      (filter === "seasonal" && product.seasonal) ||
      filter === "all"
    ) 
   
    if (product.eco_friendly_green_point <= 3) {
      labelColor = "bg-redL";
    } else if (product.eco_friendly_green_point <= 7) {
      labelColor = "bg-yellowL";
    } else {
      labelColor = "bg-greenL";
    }
    
    {
      return (
        <ProductCard
          colorL={labelColor}
          ecoNumber={product.eco_friendly_green_point}
          price={product.price}
          productName={product.name}
          image={product.url}
          name={product.name}
          key={product.id}
        />
      );
    }
  });

  return (
    <div>
      <div className="absolute right-0 m-4 z-10 flex items-center">
        <button onClick={openModal} className="font-bold text-xl bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full">?</button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
      <div className='flex flex-col gap-3 p-4'>
        <FilterSearch handleFilter={handleFilter} />
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {getProduct}
        </div>
      </div>
    </div>
  );
}

export default App;