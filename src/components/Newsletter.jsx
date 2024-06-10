import React, {useState} from 'react';
import {Sectiongrid} from './Layout';
import newsletterImg from '../img/mailing-list-img.png';
import arrowIcon from '../img/arrow.svg';

//  The Newsletter Section 
const Newsletter = () => {
    // The regex is used for valid email
    const regex = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');
    // For Check The Email if is a valid email or not
    const checkEmail = (e) => {
        setEmail(e.target.value);
        if (regex.test(email) === false) {
            setError('Please enter a valid email address')
        } else {
            setError('');
            return true;
        }
    }
     // For submit the Email after check it is a valid or not
    const submit = (e) => {
        if (email !== '') {
            setMsg(`Thank you for ${email}`)
            setTimeout(() => {
                window.location.reload();
            }, 2000)
        }else{
            setError('Email address must be provided')
        }
    }
    return (
        <Sectiongrid nameSection='newsletter' nameContainer='newsletter__container'>
        <div className='newsletter__img'>
            <img src={newsletterImg} alt='Img of Newsletter'/>
        </div>
        <div className='newsletter__content'>
            <div className='newsletter__data'>
                <p className='newsletter__description'>
                    Sign up for our newsletter and get <br/> 10% off your next order.
                </p>
                <div className='newsletter__input-box'>
                <input className='newsletter__input' onChange={checkEmail}/>
                    <button type='submit' className='newsletter__btn' onClick={submit}>
                        <img src={arrowIcon} alt="Arrow of img"/>
                    </button>
                </div>
                <p className='msg__error'>{error}</p>
                <p className='msg__sucsseful'>{msg}</p>
            </div>
        </div>
        </Sectiongrid>
    );
}

export default Newsletter;