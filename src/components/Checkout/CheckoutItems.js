import React, {useState, useEffect} from 'react';
import "./CheckOut.css";
import { FaRupeeSign } from "react-icons/fa";

const CheckoutItems = (props) => {
    const [quantity, setQuantity] = useState(props.value.quantity);

    useEffect(() => {
        props.updateQuantity(props.index, quantity);
      }, [quantity]);

    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    const handleQuantityChange = (event) => {
        const value = parseInt(event.target.value);
        if (!isNaN(value) && value >= 0) {
            setQuantity(value);
        }
    };

    const handleBlur = () => {
        if (quantity < 1) {
            setQuantity(1);
        }
    };
    return (
        <div>
            <div className='checkoutItem_div'>
                <div style={{ margin: "25px", width: "350px" }}>
                    <img className='checkout_image' src={props.value.image} />
                </div>
                <div style={{ marginTop: "20px" }}>
                    <div style={{ fontSize: "20px" }} className="textgap">{props.value.title}</div>
                    <div style={{ fontWeight: "bold" }} className="textgap price">
                        <div className='react_icon'><FaRupeeSign /></div>
                        <div>{props.value.price}</div>
                    </div>
                    <div className="textgap">In Stock</div>
                    <div className="quantity-control">
                        <button onClick={handleDecrement} style={{border: "none", backgroundColor: "whitesmoke", marginBottom: "5px"}}>-</button>
                        <input
                            type="number"
                            value={quantity}
                            onChange={handleQuantityChange}
                            onBlur={handleBlur}
                            style={{width: "30px", border: "none"}}
                        />
                        <button onClick={handleIncrement} style={{border: "none", backgroundColor: "whitesmoke", marginBottom: "5px"}}>+</button>
                    </div>
                    <button onClick={() => props.removeFromCart(props.index)} className='check_item_delete'>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutItems;