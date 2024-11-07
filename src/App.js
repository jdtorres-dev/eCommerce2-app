import logo from './logo.svg';
import './App.css';
import { PRODUCTS_DATA } from './data/products'
import { useState } from 'react';
import ProductCard from './components/ProductCard';
import NavBar from './components/navBar';
import CartTable from './components/CartTable';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductTablePage from './pages/ProductTablePage';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
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

  const handleSubmit = (product) => {
    const isConfirmed = window.confirm("Are you sure you want to add this product?")
    if (isConfirmed) {
      setProducts((prevState) => [
        ...prevState,
        { ...product, id: prevState.length * 999 + 1 },
    ]);
    }
  };

  const handleDeleteProduct = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this product?");
    if (isConfirmed) {
      setProducts((prevState) =>
        prevState.filter((product) => product.id !== id)
      );
    }
  };

  const handleEditProduct = (id, product) => {
    console.log("id", id);
    console.log("product", product);
    setProducts((prevState) =>
      prevState.map((oldProduct) => {
        if (oldProduct.id == id) {
          return {
            ...product,
          };
        }
        return oldProduct;
      })
    );
  };

  return (

    <Routes>
      <Route path="/" element={<Navigate to="/products" />}></Route>
      <Route path="/products" element={
        <ProductsPage products={products} 
          cartPage={cartpage} 
          onToggle={handleCartpage}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          totalCartCount={getProductsWithValueLength()}
          onDelete={handleDelete} />
      }></Route>

      <Route path='/productsTable' element={<ProductTablePage products={products} onDelete={handleDeleteProduct}/>}/>

      <Route path="/products/new" element={<AddProduct onSubmit={handleSubmit}/>} />

      <Route path='/products/:id/edit' element={<EditProduct products={products} onEdit={handleEditProduct}/>}/>
      
      <Route path="/not-found" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>

  );
}

export default App;
