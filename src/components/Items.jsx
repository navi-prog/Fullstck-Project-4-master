import React from 'react';
import {trimExtention, getImg, changesNums} from '../utils/Helper';

// This is For Take you to the Details Page to see all item information 
const Items = (props) => {
    return (
        <a href={`/details/${trimExtention(props.item.image)}`} className='item__card'>
            <div className='item__data'>
            {getImg(props.item.image, props.item.name)}
            <div className='item__context'>
                <h4 className='item__title'>{props.item.name}</h4>
                <span className='item__price'>${changesNums(props.item.price)}</span>
            </div>
            </div>
        </a>
    );
}

export default Items;