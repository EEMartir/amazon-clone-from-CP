import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/dex/2019/1DC/DEX_2019_1DC_launch_0401_DealsPage_Desktop_1500x120_2.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/*Basket item */}
          {/*Basket item */}
          {/*Basket item */}
          {/*Basket item */}
          {/*Basket item */}
          {/*Basket item */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
