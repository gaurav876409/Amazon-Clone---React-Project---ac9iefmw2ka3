import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { GiHamburgerMenu } from "react-icons/gi";
// import { useLocation } from "react-router";

const Navbar = () => {
  const userName = localStorage.getItem('userName');
  // const locationDetails = useLocation();
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const { size } = useContext(CartContext);
  return (
    <div className='navbar_container'>
      <div className='navbar_component'>
        <Link to="/">
          <div className='navbar_logo'></div>
        </Link>
        <div className="navbar_locator">
          <div className="navbar_locatorImage"></div>
          <div className="navbar_location">India</div>
        </div>
        <div className="navbar_searchcomponent">
          <div className='select_all'>
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
            <input type="text" className="navbar_searchbox" placeholder='Search Amazon.in' />
          </div>
          <div className="navbar_seaarchboxdiv">
            <div className="navbar_searchicon" />
          </div>
        </div>
        <Link to="/login">
          <div className="navbar_text navbar_signin hide_for_desktop">
            <div style={{ fontSize: "14px" }}>{userName ? `Hello, ${userName}` : 'Hello, Sign In'}</div>
            <div style={{ fontWeight: "bold" }}>Account & List</div>
          </div>
        </Link>
        <Link to="/order">
          <div className="navbar_text navbar_returns hide_for_desktop">
            <div style={{ fontSize: "14px" }}>Returns</div>
            <div style={{ fontWeight: "bold" }}> & Order</div>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="navbar_text navbar_cart hide_for_desktop">
            <div className="cart_image" ></div>
            <div className="cart_item">{size}</div>
            <div className="navbar_text_cart">Cart</div>
          </div>
        </Link>
        {/* for mobile */}



        <div className="hamburger-menu">
          <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu style={{ color: "white" }} />
          </a>
        </div>

        {/* <div className='hamburger_menu_mobile hide_for_mobile'> */}
        <div className={
          showMediaIcons ? 'hamburger_menu_mobile' : 'hamburger_menu hide_for_mobile'
        }>
          <Link to="/login">
            <div className='mobile_signIn'>
              <div style={{ fontSize: "14px" }}>{userName ? `Hello, ${userName}` : 'Hello, Sign In'}</div>
              <div style={{ fontWeight: "bold" }}>Account & List</div>
            </div>
          </Link>
          <div className='mobile_order'>
            <div style={{ fontSize: "14px" }}>Returns</div>
            <div style={{ fontWeight: "bold" }}> & Order</div>
          </div>
          <Link to="/checkout">
            <div className='mobile_cart'>
              <div className="cart_image" ></div>
              <div className="cart_item">{size}</div>
              <div className="navbar_text_cart">Cart</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="navbar_footer">
        <div className="navbar_footer_text tooltips">Best Seller<span className='tooltipstext'>Not Available</span></div>
        <div className="navbar_footer_text tooltips">Mobile<span className='tooltipstext'>Not Available</span></div>
        <div className="navbar_footer_text tooltips">Amazon Pay<span className='tooltipstext'>Not Available</span></div>
        <div className="navbar_footer_text tooltips">Fashion<span className='tooltipstext'>Not Available</span></div>
        <div className="navbar_footer_text tooltips">Electronics<span className='tooltipstext'>Not Available</span></div>
        <div className="navbar_footer_text tooltips">Prime<span className='tooltipstext'>Not Available</span></div>
        <div className="navbar_footer_text tooltips">New Release<span className='tooltipstext'>Not Available</span></div>
        <div className="navbar_footer_text tooltips">Customer Service<span className='tooltipstext'>Not Available</span></div>
        <div className="navbar_footer_text tooltips">Home & Kitchen<span className='tooltipstext'>Not Available</span></div>
        <Link to='/display'>
        <div className='navbar_footer_image'><img src='https://m.media-amazon.com/images/G/31/Events/img23/Aug23ART/SWM_400x39_Shop_now._CB601306814_.jpg'/></div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;