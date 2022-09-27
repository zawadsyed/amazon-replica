import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props);
    const { product, addToCart } = props;
    const { img, name, price, seller, ratings } = product;
    return (
        <div className='product-card'>
            <div className="product-img">
                <img src={img} alt={name} />
            </div>
            <div className="product-content">
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <h5>Manufacturer: {seller}</h5>
                <h5>Rating: {ratings}</h5>
            </div>
            <div className='card-btn'>
                <button style={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center' }} onClick={() => addToCart(product)}><p>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
            </div>
        </div>
    );
};

export default Product; <h1>Product</h1>