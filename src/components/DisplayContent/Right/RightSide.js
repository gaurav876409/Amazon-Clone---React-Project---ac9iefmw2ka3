import React, { useState, useEffect } from 'react';
import './RightSide.css';
import Product from './Product';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RightSide = (props) => {
  const [listOfProduct, setListOfProducts] = useState([]);

  useEffect(() => {
    axios.get("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products")
      .then((response) => {
        console.log(response.data[1].price)
        setListOfProducts(response.data);
      })
      .catch((error) => {
        console.log("showing error", error)
      })
  }, []);
  return (
    <div className="RightSide_main">
      {
        listOfProduct.map((item) => (
          <Link to={`/order/` + item.id} key={item.id}>
            <Product definition={item} />
          </Link>
        ))
      }
    </div>
  )
}

export default RightSide;