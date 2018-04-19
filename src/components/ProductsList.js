import React, { Component } from 'react';

// import { productsRef } from './../firebase';
// import { Link } from 'react-router-dom';
import Product from './Product';

class ProductsList extends Component {


  render() {
    let { products } = this.props;
    return (
      <div className="tab-product-area section fix">{/*Start Product Area*/}
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>Ring Products</h2>
              <div className="underline"></div>
            </div>
            <div className="row">
              {this.showProduct(products)}
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
          <Product
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

export default ProductsList;
