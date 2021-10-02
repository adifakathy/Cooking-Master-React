import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Item.css';
import Rating from 'react-rating';

const Item = (props) => {
    const { img, name, by, price, time, produce, star} = props.item;
    return (
        <div className='item'>
            <img src={img} alt="" />
            <div>
                <h3>{name}</h3>
                <p>By: {by}</p>
                <p>Price: ${price}</p>
                <p>Yeild: {produce}</p>
                <p><small>Time: {time}</small></p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                ></Rating>
                <br />
                <button
                    onClick={()=> props.handleAddToCart(props.item)}
                    className="btn-regular"><FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
            </div>
            
        </div>
    );
};

export default Item;