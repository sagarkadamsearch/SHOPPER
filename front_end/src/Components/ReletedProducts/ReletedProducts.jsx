import React from 'react';
import './ReletedProducts.css';
import Item from '../Item/Item';

const ReletedProducts = (props) => {
    return (
        <div className='reletedproducts'>
            <h1>Releted Products</h1>
            <hr />
            <div className="reletedproducts-item">
              {props?.all_product.map((e,index)=>
               {
                if(e.category===props.category){
                return <Item {...e}/>
                }
               }
               )}
            </div>
        </div>
    );
};

export default ReletedProducts;