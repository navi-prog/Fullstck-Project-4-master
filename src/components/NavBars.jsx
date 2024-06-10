import React from 'react';
import { NavLink } from 'react-router-dom';
import iconCart from '../img/cart.svg';

// The NavBars 
export const NavBars = (props) => {
    return (
        <>
        <ul className="nav__list nav__bars">
            <li className="nav__item">
                <NavLink  className="nav__link active-link" exact='true' to='/'>
                Home
                </NavLink>
            </li>
            <li className="nav__item">
                <a href='#e' className="nav__link active-link" >
                Collection
                </a>
            </li>
            <li className="nav__item">
                <a  href='#e' className="nav__link active-link" >
                Contact
                </a>
            </li>
        </ul>
        <NavLink exact='true' to='/cart' className="nav__btns">
            <div  className="nav__icon">
                <img src={iconCart} alt="The icon cart"/>
            </div>
            <h4 className="nav__cart">Cart</h4>
        </NavLink>
        </>
    );
}

