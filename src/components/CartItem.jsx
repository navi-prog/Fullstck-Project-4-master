import React from 'react';
import { getImg, changesNums } from '../utils/Helper';

const CartItem = (props) => {
    //  To calculate the numbers of items with it price
    const Itemsprices = (props.item.quin * changesNums(props.item.price)).toFixed(2);
    return (
        <li className='cart__item'>
            <div className='cart__content'>
            <div className='cart__detaills'>
            {getImg(props.item.image)}
            <div className='cart__title'>{props.item.name}</div>
            </div>
            <select
                className="cart__nums"
                defaultValue={props.item.quin}
                onChange={(value) =>  props.changeValue(props.item, value)} 
                >
                 {/* This is Loop for the numbers of the options in selection tage */}
                {(() => {
                    let numbers = [];
                    for(let i = 1; i < 20; i++){
                        if(i < 10){
                            numbers.push(<option key={`0${i}`} defaultValue={`0${i}`}>0{i}</option>)
                        }else{
                            numbers.push(<option key={i} defaultValue={i}>{i}</option>)
                        }
                    }
                    return numbers;
                })()}
            </select>
            <span className='cart__price'>${Itemsprices}</span>
            <button className='btn button button__small btn-padding secondary__btn' onClick={()=> props.removeItem(props.item)}>
                remove
            </button>
            </div>
        </li>
    );
}
export default CartItem ;

