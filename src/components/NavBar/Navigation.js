import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  const { size } = useContext(CartContext);
  return (
    <div>
      <div className='navbar_component sticky-navbar'>
        <Link to="/">
        <div className='navbar_logo'></div>
        </Link>
        <div className="navbar_locator">
          <div className="navbar_locatorImage"></div>
          <div className="navbar_location">Jaipur</div>
        </div>
        <div className="navbar_searchcomponent">
          <div>
            <select className="nav_dropdown">
              <option value="All">All</option>
              <option value="Alexa">Alexa</option>
              <option value="Books">Books</option>
              <option value="Baby">Baby</option>
              <option value="Beauty">Beauty</option>
              <option value="Clothes">Clothes</option>
            </select>
          </div>
          <div>
            <input type="text" className="navbar_searchbox" />
          </div>
          <div className="navbar_seaarchboxdiv">
            <div className="navbar_searchicon" />
          </div>
        </div>
        <Link to="/login">
        <div className="navbar_text navbar_signin">
          <div style={{ fontSize: "14px" }}>Hello, Sign In</div>
          <div style={{ fontWeight: "bold" }}>Account & List</div>
        </div>
        </Link>
        <div className="navbar_text navbar_returns">
          <div style={{ fontSize: "14px" }}>Returns</div>
          <div style={{ fontWeight: "bold" }}> & Order</div>
        </div>
        <Link to="/checkout">
        <div className="navbar_text navbar_cart">
          <div className="cart_image" ></div>
          <div className="cart_item">{size}</div>
          <div className="navbar_text_cart">Cart</div>
        </div>
        </Link>
      </div>
      <div className="navbar_footer">
        <div className="navbar_footer_text">Best Seller</div>
        <div className="navbar_footer_text">Mobile</div>
        <div className="navbar_footer_text">Amazon Pay</div>
        <div className="navbar_footer_text">Fashion</div>
        <div className="navbar_footer_text">Electronics</div>
        <div className="navbar_footer_text">Prime</div>
        <div className="navbar_footer_text">New Release</div>
        <div className="navbar_footer_text">Customer Service</div>
        <div className="navbar_footer_text">Computers</div>
        <div className="navbar_footer_text">Home & Kitchen</div>
      </div>
    </div>
  )
}

export default Navbar;