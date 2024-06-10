import React from 'react';
import imgLogo from '../img/logo.svg';

// This for Logo of Page
export const Logo = () => {
    return (
        <a href={'/'} className="nav__logo">
        <img src={imgLogo} alt='The img of the logo'/>
        </a>
    );
}


