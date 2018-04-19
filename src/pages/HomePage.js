import React, { Component } from 'react';

import { productsRef } from './../firebase';

import ProductsList from '../components/ProductsList';
// import Slider from '../components/Slider';
import FormProduct from '../components/FormProduct';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentWillMount() {
    productsRef.on('value', products => {
      let data = [];
      products.forEach(product => {
        const { name, image, price, description } = product.val();
        data.push({ name, image, price, description, key: product.key });
      })
      this.setState({ products: data });
    })
  }

  render() {
    return (
      <div>
        {/* <FormCategory /> */}
        {/* <Slider /> */}
        {/* <TopProducts /> */}
        <FormProduct />
        {/* <ProductsList /> */}
        <ProductsList products={this.state.products} />
        {/* <Blog /> */}
      </div>
    );
  }
}

export default HomePage;
