import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../assets/css/App.css'
import Navbar from './Navbar'
import Banner from './Banner'
import Breadcrumbs from './Breadcrumbs'
import Filters from './Filters'
import Products from './Products'
import Cart from './Cart'
import bannerObj from '../constants/bannerObj'
import filterList from '../constants/filterList'
import productAPI from '../constants/productAPI'

const App = () => {
    
    const [ selectedFilter, setSelectedFilter ] = useState({ text: 'All Products', value: "All Products" })
    const [ cart, setCart ] = useState([])
    const [ ProductList, setProductList ] = useState([])

    useEffect(() => {
        getProducts();
    }, []) 

    const getProducts = async () => {
        const response = await axios.get(productAPI);
        setProductList(response.data.data)
    }
   
    return (
        <div>
            <Router>
                <Navbar cart={ cart }/>
                <Banner bannerObj={ bannerObj }/>
                <Switch>
                    <Route path="/" exact>
                        <Breadcrumbs />
                        <Filters 
                            filterList={ filterList } 
                            selectedFilter={ selectedFilter } 
                            setSelectedFilter={ setSelectedFilter }
                        />
                        <hr />
                        <Products 
                            ProductList={ ProductList } 
                            selectedFilter={ selectedFilter } 
                            setCart={ setCart }
                            cart={ cart }
                        />
                    </Route>
                    <Route path="/cart">
                        <Cart cart={cart} />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;