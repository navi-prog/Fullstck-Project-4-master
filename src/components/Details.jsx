import React, {useState} from 'react';
import {Sectiongrid} from './Layout';
import {getImg, changesNums} from '../utils/Helper';

// The Section of Details 
const Details = (props) =>  {
    // For change the Color 
    const [toggleColor, setToggleColor] = useState(1);
    // For toggle the color by class name = 'active color'
    const changeColor = (index) => {
        setToggleColor(index)
    }
    return (
    <Sectiongrid nameSection='details' nameContainer='details__container'>
        <div className='details__imgs'>
            <ul className='details__imglist'>
                <li className='details__item'>{getImg(props.dataItem.image)}</li>
                <li className='details__item'>{getImg(props.dataItem.image)}</li>
                <li className='details__item'>{getImg(props.dataItem.image)}</li>
            </ul>
            <div className="details__img">
            {getImg(props.dataItem.image)}
            </div>
        </div>
        <div className='details__data'>
            <div className='details__content'>
                <span className='details__price'>${changesNums(props.dataItem.price)}</span>
                <h2 className="details__title">{props.dataItem.name}</h2>
                <p className="description details__description">
                    {props.dataItem.description}
                </p>
                <div className='details__colors'>
                <div className='details__color'>Color: <span className='color__type'>Pink</span></div>
                <ul className='details__colorlist'>
                    <li className={toggleColor === 1 ? 'color__item active__color' : 'color__item'}  onClick={() => changeColor(1)} >
                        <span className='circle__active'></span>
                    </li>
                    <li className={toggleColor === 2 ? 'color__item active__color' : 'color__item'}  onClick={() => changeColor(2)} >
                        <span className='circle__active'></span>
                    </li>
                    <li className={toggleColor === 3 ? 'color__item active__color' : 'color__item'}  onClick={() => changeColor(3)} >
                    <span className='circle__active'></span>
                    </li>
                </ul>
                </div>
                <div className='details__btn'>
                <select
                    className="details__nums"
                    defaultValue={ props.defaultValue}
                    onChange={(e) => props.onChangeValue(e.target.value)}>
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
                <button className='btn button button__small primary__btn'
                    onClick={() => props.addItem(props.dataItem, props.dataId, props.defaultValue)}>
                    Add Cart
                </button>
                </div>
            </div>   
        </div>             
    </Sectiongrid>
    );
}
export default Details;
