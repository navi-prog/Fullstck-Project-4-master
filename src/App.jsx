import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import CartPage from './pages/CartPage';
import DataJeson from './data/store-items.json';
import {trimExtention} from './utils/Helper';

const App = () => {
  // The Datas Old or Orginal = Items and New = OrderItems
  const items = DataJeson;
  const [orderItems, setCart] = useState([]);
  // The Value in Details Pages
  const [defaultValue, setValue] = useState(1);
  // to Change the Default Value in Details Pages
  const onChangeValue = (e) =>{
    setValue(e);
  }
  // Add a New Item From Details Page in Cart Page
  const addItem = (arr, id, value) => {
    // The new datas of item 
    let newShapObj = {...arr, id, value};
    // Search cart ite to find the product with the product in the parameter of on add
    // check if we have this pruduct aready in th cart items or not
    const exist = orderItems.find((item) => trimExtention(item.image) === newShapObj.id);
    if(exist){
      // if we have the this item in the cart we will change the quantity of this product of the item
      const newCartItems = orderItems.map((item) => trimExtention(item.image)  === newShapObj.id 
      ? {...exist, quin: (parseInt(exist.quin) + parseInt(value)) < 10 ? `0${parseInt(exist.quin) + parseInt(value)}` : parseInt(exist.quin) + parseInt(value)} :item)
      // Update the new Items by new value
      setCart(newCartItems);
      // To Save Datas in Cart Page by LocalStorage
      localStorage.setItem('orderItems',JSON.stringify(newCartItems))
    }else{
       // Add the product with the quantity of it of the item
      const newCartItems = [...orderItems,{...newShapObj, quin: value < 10 ? `0${+value}` : value}]
      setCart(newCartItems)
      localStorage.setItem('orderItems',JSON.stringify(newCartItems))
    }
  }
  // Remove the Item from Cart Pages by LocalStorage
  const removeItem = (item) => {
  const itemId = item.id;
   // check if we have this pruduct aready in th cart items or not
  const exist = orderItems.find((item) => itemId === item.id);
  const dataDave = JSON.parse(localStorage.getItem('orderItems'));
  if(exist){
    const newData = dataDave.filter((item) => itemId !== item.id);
    setCart(newData);
    localStorage.removeItem(newData)
    localStorage.setItem('orderItems',JSON.stringify(newData))
  }
}
// Change Numbers of Items  
  const changeValue = (arr, value) => {
    const exist = orderItems.find((item) => item.id === arr.id);
    if (exist) {
      const newCartItem = orderItems.map((item) =>  item.id === arr.id ? 
      {...exist, quin: value.target.value}: item)
      setCart(newCartItem)
      localStorage.setItem('orderItems',JSON.stringify(newCartItem))
    }
  }
  // When Save Items in Local Storage we need a way to load them from Local Storage too
  // To do that we will use the useEffect
  useEffect(() => {
    setCart(localStorage.getItem('orderItems')? JSON.parse(localStorage.getItem('orderItems')):[])
  },[]);
    return (
      <Router>
        <Header/>
        <Routes>
          <Route 
          exact='true' 
          path='/' 
          element={<Home 
          data={items}
          />}
          />
          <Route 
          exact='true' 
          path='/details/:id' 
          element={<DetailsPage 
          data={items} 
          onChangeValue={onChangeValue} 
          addItem ={addItem} 
          defaultValue={defaultValue}
          />}
          />
          <Route 
          exact='true' path='/cart' 
          element={<CartPage 
          datas={orderItems}     
          changeValue={changeValue}
          itemsOld={items}
          removeItem={removeItem}
          />}
          />
        </Routes>
        <Footer/>
      </Router>
    );
}
export default App;
