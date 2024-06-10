import React from 'react';
import ItemsSection from '../components/ItemsSection';
import Newsletter from '../components/Newsletter';
import Details from '../components/Details'
import {withRouter} from '../components/withParams';

// This is Details Page
class DetailsPage extends React.Component {
  render() {
    // This for ID to Add in The Datas
    const dataId = this.props.router.params.id;
    const dataItem = this.props.data.find(item => item.image.includes(dataId))
    return (
      <>
        <Details 
        dataItem={dataItem}
        heanelCick={this.heanelCick}
        onChangeValue={this.props.onChangeValue}
        addItem ={this.props.addItem}
        dataId={dataId}
        defaultValue={this.props.defaultValue}
        />
        <ItemsSection  
        data={this.props.data} 
        limit={3} 
        title='Might also like'

        />
        <Newsletter/>
      </>
    );
  }
}

export default withRouter(DetailsPage);

