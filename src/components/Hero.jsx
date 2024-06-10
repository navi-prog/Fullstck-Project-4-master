import React from 'react';
import HeroImg from '../img/hero.png';

const Hero = () => {
    return (
        <section className='hero'>
        <div className='hero__container'>
            <div className="hero__img">
                <img src={HeroImg} alt="There is the img"/>
            </div>
            <div className='hero__data'>
                <div className='hero__content'>
                    <h1 className="hero__title">Lorem ipsum <br /> dolor sit amet</h1>
                    <p className="hero__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ullamcorper ultrices magna mauris pellentesque dignissim 
                        ante varius diam elit.
                    </p>
                    <button className={`btn button button__large primary__btn button--gray button--small`}>
                        our products
                    </button>
                </div>   
            </div>             
        </div>
        </section>
    );
}

export default Hero;
