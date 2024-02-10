import React from 'react';
import Hero from '../Components/Hero/Hero';
import Collections from '../Components/Collections/Collections';
import Offers from '../Components/Offers/Offers';
import data_product from "../Components/Assets/data";
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';

const Shop = () => {
    return (
        <div>
          <Hero/>
          <Collections products={data_product} text="POPULAR IN WOMEN"/>
          <Offers/>
          <NewCollections/>
          <NewsLetter/>
        </div>
    );
};

export default Shop;