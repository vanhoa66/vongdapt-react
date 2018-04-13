import React, { Component } from 'react';

import Product from './Product';

class ProductsList extends Component {

  render() {
    let { products } = this.props;
    return (
      <div className="tab-product-area section fix">{/*Start Product Area*/}
        <div className="container">
          <div className="row">
            {/* Nav tabs */}
            <ul className="tabs-list" role="tablist">
              <li className="active"><a href="#new" data-toggle="tab">NEW ARRIVALS</a></li>
              <li><a href="#feature" data-toggle="tab">FEATURED</a></li>
              <li><a href="#b-sales" data-toggle="tab">BEST SELLERS</a></li>
              <li><a href="#trending" data-toggle="tab">TRENDING</a></li>
            </ul>
            {/* Tab panes */}
            <div className="tab-content">
              <div className="tab-pane fade in active" id="new">
                <div className="tab-pro-slider new-product owl-carousel">
                  <div className="single-product-item fix">
                    {/* Single Product Start */}
                    {this.showProduct(products)}
                    {/* Single Product End */}
                  </div>
                </div>
              </div>
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
