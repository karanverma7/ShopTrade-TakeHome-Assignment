import React, {useState} from 'react'
import '../assets/css/Product.css'


const Product = ({ item, cart, setCart }) => {

    const discount = Math.round(( 1 - item.price/item.compare_at_price ) * 100);
    const [ selectedSize, setSelectedSize ] = useState()
    const [ quantity, setQuantity ] = useState(0)

    const options = item.options.map( size => {
        return (
            <div 
                key={size.id} 
                className="option-style"
                onClick={ () => setSelectedSize(size.value) }
            >
                {size.value}
            </div>
        )
    })

    const onCartClick = () => {
        setCart([...cart, item])
        setQuantity(quantity+1)
    }

    return (
        <div className="item">
            <img src={item.image_src} alt={item.name} />
            <div 
                className="addCart" 
                style={{ display:`${selectedSize != null ? 'block' : 'none' }` }} 
                onClick={ onCartClick }
            >
                {`ADD TO CART ${ quantity ? `[${quantity}]` : ''}`}
            </div>
            <div className="select-size">
                <div className="sizes" style={{ display:`${selectedSize != null ? 'none' : 'block' }` }}>
                    <h5>Select Size</h5>
                    <div id="options">{options}</div>
                </div>
                <p>Sizes: XS,  S, M, L, XL, XXL</p>
            </div>
            <div className="head">{item.vendor}</div>
            <div className="details">{item.name}</div>
            <div className="price">
                ${item.price} 
                <span className="max-price">{item.compare_at_price}</span>
                <span className="discount">({ discount }% OFF)</span>
            </div>
        </div>
    )
}

export default Product;