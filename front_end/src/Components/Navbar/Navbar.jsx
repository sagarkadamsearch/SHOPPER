import React, { useContext, useRef, useState } from 'react';
import './Navbar.css'
import logo from "../Assets/logo.png"
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/dropdown_icon.png';

const Navbar = () => {

    const [menu,setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="website-logo" />
                <p>SimplyShop</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
             <li onClick={()=>setMenu('shop')} > <Link to='/'       className='link'>Shop </Link> {menu=='shop'?<hr/>:""}  </li>
             <li onClick={()=>setMenu('men')}  > <Link to='/mens'   className='link'>Men  </Link> {menu=='men'?<hr/>:""}   </li>
             <li onClick={()=>setMenu('women')}> <Link to='/womens' className='link'>Women</Link> {menu=='women'?<hr/>:""} </li>
             <li onClick={()=>setMenu('kids')} > <Link to='/kids'   className='link'>Kids </Link> {menu=='kids'?<hr/>:""}  </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart' ><img src={cart_icon} alt="cart-icon" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

export default Navbar;