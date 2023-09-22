import React, { useContext } from 'react'
import { CartContext } from '../CartContext';
import './Datadisplay.css';
import { Link } from 'react-router-dom';

const Jewelery = () => {
    const { apiData } = useContext(CartContext);
    const jeweleryData = apiData.filter(item => item.category === "jewelery")
    return (
        <div className="electronics-container">
            {jeweleryData.map((item) => (
                <Link to={`/order/` + item.id} key={item.id}>
                    <div key={item.id} className="electronics-card">
                        <img src={item.image} alt={item.title} className="electronics-image" />
                        <div className="electronics-details">
                            <h2 className="electronics-title">{item.title}</h2>
                            <div className="electronics-rating">Rating: {item.rating.rate}</div>
                            <div className="electronics-price">Price: ${item.price}</div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Jewelery;