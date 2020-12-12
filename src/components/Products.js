import React from 'react'
import '../assets/css/Products.css'
import Product from './Product'

const Products = ({ ProductList, selectedFilter, cart, setCart }) => {

    const newList = ProductList && ProductList.map( item => {

        if(selectedFilter.value === 'All Products'){
            return (
                <Product key={item.id} item={item} setCart={ setCart } cart={ cart } />
            )
        }
        else if(selectedFilter.value === item.tag){
            return (
                <Product key={item.id} item={item} setCart={ setCart } cart= { cart }/>
            )
        }
        return null;
    })

    return (
        <div id="product-list">
            {newList}
        </div>
    )
}

export default Products;