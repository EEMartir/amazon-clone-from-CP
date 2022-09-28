import React from 'react';
import './Home.css';
import Product from './Products/Product';

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/Other/BRND_MTH21_SADLPDesktop_1453x363_Final_nolocale_PVD7436_Canada.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses "
            price={19.95}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={5}
          />

          <Product
            id="55451365"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-Beater, Dough Hook, and Whisk, 5 Litre Glass Bowl"
            price={239.84}
            image="https://m.media-amazon.com/images/I/61etD4-IrPL._AC_SX679_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="545878"
            title="Samsung LC4RG90DSW541 49' Curved LED Gaming Monitor"
            price={199.99}
            image="https://m.media-amazon.com/images/I/91-hWcNu2yL._AC_SL1500_.jpg"
            rating={3}
          />
          <Product
            id="4745489"
            title="Echo Dot(3ra Gen) Parlante inteligente con Alexa Carbón"
            price={98.99}
            image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_SL1000_.jpg"
            rating={4}
          />
          <Product
            id="5644668"
            title="iPad Pro Wi-Fi de 12.9 pulgadas (32.77 cm)"
            price={999.99}
            image="https://m.media-amazon.com/images/I/81+N4PFF7jS._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="564413"
            title="SAMSUNG Galaxy Watch 4 1.58 pulgadas (40 mm) Smartwatch con monitor 
                ECG para salud acondicionamiento físico correr ciclos de sueño GPS detección de caídas bluetooth versión EE.UU., negro"
            price={199.99}
            image="https://m.media-amazon.com/images/I/61aCopNtt7L._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
