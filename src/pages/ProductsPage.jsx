import React from 'react'
import ProductsTable from '../components/ProductsTable'
import CartTable from '../components/CartTable'
import ProductCard from '../components/ProductCard'
import NavBar from '../components/navBar'
const ProductsPage = ({ products, cartPage, onIncrement, onToggle, onDecrement, totalCartCount, onDelete }) => {
    return (
        <div>
            <NavBar totalCount={totalCartCount} onToggle={onToggle} />
            <div className="container">
                {
                    cartPage ?
                        <CartTable products={products}
                            onDelete={onDelete}
                            onIncrement={onIncrement}
                            onDecrement={onDecrement} />
                        : <ProductCard products={products}
                            onIncrement={onIncrement}
                            onDecrement={onDecrement} />
                }
            </div>
        </div>
    )
}

export default ProductsPage