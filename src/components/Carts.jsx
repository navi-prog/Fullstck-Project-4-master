import React from 'react';
import {Sectiongrid} from './Layout';
import imgEmpty from '../img/empty.png'
import CartItem  from './CartItem';
import {changesNums} from '../utils/Helper';

const Cart = (props) => {
    const {datas} = props;
    // This part for to calculate the total price and totalItems
    const totalPrice = datas.reduce((a, c) => a + parseFloat(c.quin) * changesNums(c.price), 0)
    const totalItems = datas.reduce((a, c) => a + parseFloat(c.quin) ,0);
    // This is for the new Item in cart  
    const itemsnew = props.datas.map((item) => { 
        return (
        <CartItem  
        key={item.id} 
        item={item} 
        changeValue={props.changeValue} 
        datas={datas} 
        removeItem={props.removeItem}
        />
        )
        });
    return (
        <Sectiongrid>
            <h3 className='main__title'>Your Cart</h3>
            <ul className='cart__list'>
            {itemsnew}
            </ul>
            {datas.length === 0 && <div className='cart__empty'>Cart is Empty <img className='empty__icon' src={imgEmpty}  alt={'there is img'}/></div>}
            <div className='cart__allitems'>
            <div className='cart__detaills item__txt'>
            <h3 className='cart__titleitems'>All items</h3>
            </div>
            {totalItems < 10 ? <div className='cart__nums'>0{totalItems}</div> : <div className='cart__nums'>{totalItems}</div>}
            <span className='cart__price'>${totalPrice.toFixed(2)}</span>
            <button className='btn-padding btn__txt button button__small primary__btn'>
                Check out All
            </button>
            </div>
        </Sectiongrid>
    );
}

export default Cart;

