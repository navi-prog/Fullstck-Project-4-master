import React, { useState } from 'react';
import {Logo} from './Logo';
import {NavBars} from './NavBars';

// The Header
const Header = () =>{
    // For scroll header change background color from transparent to colorful 
    const [headerColor, setHeaderColor] = useState(false);
    const changeHeader = () => {
        if(window.scrollY >= 80){
            setHeaderColor(true)
        }else{
            setHeaderColor(false)
        }
    }
    window.addEventListener('scroll', changeHeader)
    return (
        <>
        <header className={headerColor ? 'header active': 'header'}>
            <nav className='nav container'>
                <Logo/>
                <NavBars/>
            </nav>
        </header>
        </>
    );
}

export default Header;
