import React, { useContext } from 'react'
import "./checkOut.css";
import Grid from '@mui/material/Grid';
import { CartContext } from '../CartContext';
import CheckoutItems from './CheckoutItems';

const CheckOut = () => {
    const { item, size, increment, removeFromCart } = useContext(CartContext);

    const cartValue = function () {
        let price = 0;
        for (let i = 0; i < item.length; i++) {
            price += parseInt(item[i].price);
        }
        return price;
    }
    return (
        <div className="checkout_body">
            <Grid container >
                <Grid item={10}>
                    <div className="checkout_container">
                        <div style={{ fontSize: "30px", fontWeight: "500", padding: "20px 0px 0px 20px" }}>Shopping Cart</div>
                        <div>
                            {
                                item.length > 0 ?
                                    item.map((value, index) => (
                                        <CheckoutItems value={value} index={index} removeFromCart={removeFromCart} />
                                    ))
                                    : <div style={{ height: "100vh", margin: "30px" }}> Please buy something</div>
                            }
                        </div>
                    </div>
                </Grid>
                <Grid item={2}>
                    <div style={{ width: "300px", height: "200px", padding: "20px", marginTop: "25px", backgroundColor: "white" }}>
                        <div style={{ fontSize: "26px" }}>Subtotal ( {size} items): <strong>{cartValue()}</strong></div>
                        <div style={{ paddingTop: "25px " }}>
                            <button className="placeorder_button" >Proceed to Buy</button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default CheckOut;