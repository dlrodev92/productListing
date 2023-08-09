import React, { useState } from 'react';
import './App.css';
import ProductCard from '../src/components/ProductCard'
import FilterSearch from './components/FilterSearch';
import products from './assets/productarray';
import Modal from './components/Modal';



/*PLAN 

1. Import all products from productarray.js
2. Map through all products and display them in the product cart
3. Create a filter function that filters through the products and displays the filtered products
  
}

*/

function App() {

  const [filter, setFilter] = useState("")
  // const [sustainableProducts, setSustainableProducts] = useState(false)
  // const [localProducts, setLocalProducts] = useState(false)
  // const [seasonalProducts, setSeasonalProducts] = useState(false)

  const handleFilter = (value)=>{
    setFilter(value)
  }
  
  const productsFiltered = products.filter((product)=>{
      if(product.sustainable = true){
        return product
      }
  });

  const getProduct = products.map((product) => { 
  let labelColor
   if (product.eco_friendly_green_point <= 3) {
    labelColor = "redL"
   } else if (product.eco_friendly_green_point <= 7) {
    labelColor="yellowL"
   } else {
    labelColor="greenL"
    }
  if (filter === "sustainable" && product.sustainable === true) {
    return <ProductCard 
    color={labelColor}
    ecoNumber={product.eco_friendly_green_point} 
    price={product.price}
    productName={product.name}
    image={product.url} 
    name={product.name} 
    key={product.id}
    />
  }
  if (filter === "local" && product.local === true) {
    return <ProductCard 
    color={labelColor}
    ecoNumber={product.eco_friendly_green_point} 
    price={product.price}
    productName={product.name}
    image={product.url}
    name={product.name}   
    key={product.id}
    />
  }
  if (filter === "seasonal" && product.seasonal === true) {
    return <ProductCard 
    color={labelColor}
    ecoNumber={product.eco_friendly_green_point} 
    price={product.price}
    productName={product.name}
    image={product.url}
    name={product.name}   
    key={product.id}
    />
  }
  if (filter === "all") {
    return <ProductCard 
    color={labelColor}
    ecoNumber={product.eco_friendly_green_point} 
    price={product.price}
    productName={product.name}
    image={product.url}
    name={product.name}   
    key={product.id}
    />
  }
  });

  return (
    <div className='flex flex-col gap-3 p-4'>
    <FilterSearch handleFilter={handleFilter}/>
  
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {getProduct}
    </div>


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
          {getProduct}
    
        </div>
      </div>

    </div>
    
  );
}

export default App;
