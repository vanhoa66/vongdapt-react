import React, { Component } from 'react';

import ProductDetail from '../components/ProductDetail';
// import Slider from '../components/Slider';

class ProductPage extends Component {

  render() {
    return (
      <div>
        {/* <Slider /> */}
        <ProductDetail match={this.props.match} />
      </div>
    );
  }
}

export default ProductPage;
