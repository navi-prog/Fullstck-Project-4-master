import React from 'react';
import Newsletter from '../components/Newsletter';
import Carts from '../components/Carts';

// This is Cart Page
class CartPage extends React.Component {
  render() {
    return (
      <>
        <Carts 
        datas={this.props.datas} 
        changeValue={this.props.changeValue} 
        onChangeValue={this.props.onChangeValue}
        itemsOld={this.props.itemsOld}
        removeItem={this.props.removeItem}
        />
        <Newsletter/>
      </>
    );
  }
}

export default CartPage;