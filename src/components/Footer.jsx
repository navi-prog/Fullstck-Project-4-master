import React from 'react';

// The Footer
const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container container'>
                <ul className='footer__links'>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link active-link">About</a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link active-link">Customer Care</a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link active-link">Instagram</a>
                    </li>
                </ul>
                <div className='copyright'>© Pretend Store</div>
            </div>
        </footer>
    );
}

export default Footer;