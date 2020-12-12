import React from 'react'
import '../assets/css/Cart.css'


const Cart = ({ cart }) => {

    const totalAmount = cart.reduce( (price, item) => price + Number(item.compare_at_price), 0 )
    const discountedAmount = cart.reduce( (price, item) => price + Number(item.price), 0 )

    const cartList = cart.map(item => {
        return (
            <div key={item.id} className="cart-item">
                <img src={ item.image_src } alt={item.name} />
                <div>
                    <h3>{ item.vendor }</h3>
                    <p>{ item.name }</p>
                    <h5>$ { item.price }</h5>
                </div>
            </div>
        )
    })

    return (    
        <div id="cart-page">
            <div>
                <h3>Cart ({cart.length} items)</h3>
                { cartList }
            </div>
            <div className="bill">
                <h3>Billing:</h3>
                <p>Total Amount : $ { totalAmount }</p>
                <p style={{ textDecoration: 'strike'}}>Discounted Amount : $ { discountedAmount }</p>
                <p>Shipping Charges : $25</p>
                <hr style={{ margin: '30px 0 15px 0'}}/>
                <p>Payable Amount : $ { discountedAmount + 25 }</p>
                <button>Checkout</button>
            </div>
        </div>
    )
}

export default Cart;