import React from 'react';
import Items from './Items';
import {Sectiongrid} from './Layout';

// This is Section of Items 
const ItemsSection = (props) =>{
  const listData = props.data.slice(0, props.limit)
   // This is for the Item 
  const itemsNew = listData.map((item) => { 
    return (
      <Items key={item.price} item={item}/>
    )
    });
    return (
      <Sectiongrid nameSection='items' nameContainer=''>
      {props.title === '' ? '': <h3 className='item__subtitle'>{props.title}</h3>}
        <div className='items__cards grid'>
          {itemsNew}
        </div>
        <button className='section__btn button__large secondary__btn button'>More products</button>
      </Sectiongrid>
  );
}

export default ItemsSection;