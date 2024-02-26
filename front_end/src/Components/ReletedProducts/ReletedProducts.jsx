import React from 'react';
import './ReletedProducts.css';
import Item from '../Item/Item';
import data_product from '../Assets/data';

const ReletedProducts = (props) => {
    return (
        <div className='reletedproducts'>
            <h1>Releted Products</h1>
            <hr />
            <div className="reletedproducts-item">
              {data_product.map((e,index)=> <Item key={index} {...e}/>)}
            </div>
        </div>
    );
};

export default ReletedProducts;