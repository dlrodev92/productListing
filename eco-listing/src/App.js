import './App.css';
import ProductCard from '../src/components/ProductCard'
import FilterSearch from './components/FilterSearch';


function App() {
  return (
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
  );
}

export default App;
