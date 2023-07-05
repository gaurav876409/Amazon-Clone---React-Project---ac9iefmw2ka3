import React from 'react';
import "./CheckOut.css";

const CheckoutItems = (props) => {
  return (
    <div>
            <div style={{ border: "1px solid #E7E7E7", width: "95%", display:"flex", height: "250px", margin: "25px"}}>
                <div style={{margin: "25px"}}>
                    <img height="200px" src={props.value.image} />
                </div>
                <div style={{ marginTop: "20px"}}>
                    <div style={{fontSize: "20px"}} className="textgap">{props.value.title}</div>
                    <div style={{ fontWeight: "bold"}} className="textgap">{props.value.price}</div>
                    <div className="textgap">In Stock</div>
                    <button onClick={() => props.removeFromCart(props.index)}>Delete</button>
                </div>
            </div>
        </div>
  )
}

export default CheckoutItems;