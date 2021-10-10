import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    // console.log(props);

    /*     const totalReducer = (previous, product) => previous + product.price;
        const total = cart.reduce(totalReducer, 0); */

    let totalQuantity = 0;

    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }


    const shiping = total > 0 ? 15 : 0;
    const tax = (total + shiping) * 0.10;
    const grandTotal = total + shiping + tax;

    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Orderd: {totalQuantity}</h5>
            <p>Total: {total.toFixed(2)}</p>
            <p>Shiping: {shiping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>GrandTotal: {grandTotal.toFixed(2)}</p>
            {props.children}
        </div>
    );
};

export default Cart;