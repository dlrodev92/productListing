import './App.css';
import ProductCard from '../src/components/ProductCard'
import FilterSearch from './components/FilterSearch';
import products from './assets/productarray';
import { useState } from 'react';


/*PLAN 

1. Import all products from productarray.js
2. Map through all products and display them in the product cart
3. Create a filter function that filters through the products and displays the filtered products
  
}

*/

function App() {

  const [labelColor, setLabelColor ] = useState("");



  const getProduct = products.map((product) => { 
    
    // if (product.eco_friendly_green_point < 3) {
    //   setLabelColor("redL")
    // } else if (product.eco_friendly_green_point < 7) {
    //   setLabelColor("yellowL")
    // } else {
    //   setLabelColor("greenL")
    // }

    return <ProductCard 
    color={"GreenL"}
    ecoNumber={product.eco_friendly_green_point} 
    price={product.price}
    productName={product.name}
    image={product.url}  
    key={product.id}

    />

  });

  return (
    <div className='flex flex-col gap-3 p-4'>
    <FilterSearch/>
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {getProduct}
    
  
    </div>
    </div>
  );
}

export default App;
