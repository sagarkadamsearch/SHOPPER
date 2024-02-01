import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Shop from './Shop';
import ShopCategory from './ShopCategory';
import Product from './Product';
import Cart from './Cart';
import LoginSignup from './LoginSignup';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/mens' element={<ShopCategory   category="men"/>}/>
            <Route path='/womens' element={<ShopCategory category="women"/>}/>
            <Route path='/kids' element={<ShopCategory   category="kid"/>}/>
            <Route path='/product/:productId' element={<Product/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
    );
};

export default Router;