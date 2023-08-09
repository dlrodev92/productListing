import React, { useState } from 'react';
import './App.css';
import ProductCard from '../src/components/ProductCard'
import FilterSearch from './components/FilterSearch';
import Modal from './components/Modal';


function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="absolute right-0 m-4 z-10 flex items-center">
        <button onClick={openModal} className="font-bold text-xl bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full">?</button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>

      <div className='flex flex-col gap-3 p-4'>
      <FilterSearch/>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
    
        </div>
      </div>
    </div>
    
  );
}

export default App;
