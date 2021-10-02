import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    const { length } = cart;
    console.log(cart?.name)
    let totalQuantity = 0;
    let total = 0;
    let name= [];
    for (const item of cart) {
        if (!item.quantity) {
            item.quantity = 1;
        }
        total = total + item.price * item.quantity;
        totalQuantity = totalQuantity + item.quantity;
        name.push(item.name);
        name.push(',');
    }
    return (
        <div className="cart">
            <h3> Item Summary</h3>
            <div className="details">
            <p>Item odered:{length}</p>
            <h5>Item Name: {name}</h5>
                <h2>Total Price:$ {total.toFixed(2)}</h2>
                <button onClick={()=>alert('Thanks Your Ordered Confirm.')}>Buy Now</button>
            </div>
            
        </div>
    );
};

export default Cart;