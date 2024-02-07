import React from 'react';
import './Collections.css'
import Item from '../Item/Item';

const Collections = ({products,text}) => {
    return (
        <div className='collections'>
          <h1>{text}</h1>
          <hr />
          <div className="collections-item">
            {
             products && products.map((item,index)=>{
                return <Item key={index} {...item}/>
              })
            }
          </div>
        </div>
    );
};

export default Collections;