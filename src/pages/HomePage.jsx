import React from 'react';
import Hero from '../components/Hero';
import ItemsSection from '../components/ItemsSection';
import Newsletter from '../components/Newsletter';

// This is Home Page
class Home extends React.Component {
  render() {
    return (
      <>
        <Hero/>
        <ItemsSection 
        data={this.props.data} 
        title=''/>
        <Newsletter/>
      </>
    );
  }
}

export default Home;
