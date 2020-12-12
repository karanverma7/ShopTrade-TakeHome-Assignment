import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../assets/css/App.css'
import Navbar from './Navbar'
import Banner from './Banner'
import Breadcrumbs from './Breadcrumbs'
import Filters from './Filters'
import Products from './Products'
import Cart from './Cart'
import ProductList from '../mock-data/APIdata'
import bannerObj from '../constants/bannerObj'
import filterList from '../constants/filterList'
//import axios from 'axios'


const App = () => {
    
    const [ selectedFilter, setSelectedFilter ] = useState({ text: 'All Products', value: "All Products" })
    const [ cart, setCart ] = useState([])

/* API Call to get Product list. 

    const [ ProductList, setProductList ] = useState([])

    useEffect(() => {
        getProducts();
    }, []) 

    const getProducts = async () => {
        const response = await axios.get('https://cdn.shopify.com/s/files/1/0455/2176/4502/files/products.json');
        setProductList(response.data)
    }
    console.log(ProductList) 
    
*/
   
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