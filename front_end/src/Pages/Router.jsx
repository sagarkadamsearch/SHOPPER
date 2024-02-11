import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Shop from './Shop';
import ShopCategory from './ShopCategory';
import Product from './Product';
import Cart from './Cart';
import LoginSignup from './LoginSignup';
import men_banner from '../Components/Assets/banner_mens.png';
import women_banner from '../Components/Assets/banner_women.png';
import kid_banner from '../Components/Assets/banner_kids.png';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/mens' element={<ShopCategory banner={men_banner}  category="men"/>}/>
            <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
            <Route path='/kids' element={<ShopCategory   banner={kid_banner} category="kid"/>}/>
            <Route path='/product/:productId' element={<Product/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
    );
};

export default Router;