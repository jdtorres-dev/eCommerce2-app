import logo from './logo.svg';
import './App.css';
import { PRODUCTS_DATA } from './data/products' 
import { useState } from 'react';
import ProductCard from './components/ProductCard';
import NavBar from './components/navBar';
import CartTable from './components/CartTable';

function App() {
  const [products, setProducts] = useState(PRODUCTS_DATA)
  const [cartpage, setCartPage] = useState(false)

  const handleCartpage = () => {
    setCartPage(prevState => !prevState)
  }

  const handleIncrement = (id) => {
    setProducts((prevState) =>
      prevState.map((product) => {
        if (product.id === id) {
          return { ...product, value: product.value + 1 };
        }
        return product;
      })
    );
  };

  const handleDecrement = (id) => {
    setProducts((prevState) =>
      prevState.map((product) => {
        if (product.id === id) {
          return { ...product, value: product.value - 1 };
        }
        return product;
      })
    );
  };

  const getProductsWithValueLength = () => {
    return products.filter((product) => product.value > 0).length;
  };

  const handleDelete = (id) => {
    setProducts((prevState) =>
      prevState.map((product) => {
        if (product.id === id) {
          return { ...product, value: product.value = 0 };
        }
        return product;
      })
    );
  };

  return (
   
  <div>
    <NavBar totalCount={getProductsWithValueLength()} onToggle={handleCartpage}/>
      <div className="container">
    { 
      cartpage ? 
      <CartTable products={products} 
        onDelete={handleDelete} 
        onIncrement={handleIncrement} 
        onDecrement={handleDecrement}/>  
      : <ProductCard products={products} 
        onIncrement={handleIncrement} 
        onDecrement={handleDecrement}/>
    }
      </div>
  </div>

  );
}

export default App;
