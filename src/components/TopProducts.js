import React, { Component } from 'react';

import { productsRef } from './../firebase';

import ProductFea from './ProductFea';

class TopProducts extends Component {
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
    let {products} = this.state;
    return (
      <div className="featured-product section fix">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>Weekly Featured Products</h2>
              <div className="underline" />
            </div>
            <div className="col-sm-12">
              {/* Featured slider Area Start */}
              <div className="feature-pro-slider owl-carousel">
                {/* Single Product Start */}
                {this.showProduct(products)}
                {/* Single Product End */}
              </div>{/* Featured slider Area End */}
            </div>
          </div>
        </div>
      </div>
    );
  }
  showProduct(products) {
    let xhtml = null;
    if (products.length > 0) {
      xhtml = products.map((product, index) => {
        return (
          <ProductFea
            key={index}
            product={product}
            index={index}
          />
        );
      });
    }
    return xhtml;
  }
}

export default TopProducts;
