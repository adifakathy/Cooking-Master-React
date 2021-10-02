import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Item from '../Item/Item';
import './Food.css';

const Food = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./items.JSON')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    const handleAddToCart = (item) => {
        const newCart = [...cart, item];
        setCart(newCart);
        
    }
    
    return (
        <div className="food-container">
            <div className="item-container">
                {
                    items.map(item => <Item
                        key={item.key}
                        item={item}
                        handleAddToCart={handleAddToCart}
                    ></Item>
                        )
                }
            </div>

            <div className="cart-container">
             <Cart cart={cart}></Cart>

            </div>
            
        </div>
    );
};

export default Food;