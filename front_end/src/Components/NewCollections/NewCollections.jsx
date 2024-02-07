import React from 'react';
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item';
import './NewCollections.css'
const NewCollections = () => {
    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="new-collections-item">
            {
              new_collections.map((item,index)=>{
                return <Item key={index} {...item}/>
              })
            }
          </div>
        </div>
    );
};

export default NewCollections;