import React, { Component } from 'react';

class ProductFea extends Component {
  render() {
    return (
      <div className="product-item fix">
        <div className="product-img-hover">
          {/* Product image */}
          <a href="product-details.html" className="pro-image fix"><img src="img/featured/1.jpg" alt="featured" /></a>
          {/* Product action Btn */}
          <div className="product-action-btn">
            <a className="quick-view" href=" "><i className="fa fa-search" /></a>
            <a className="favorite" href=" "><i className="fa fa-heart-o" /></a>
            <a className="add-cart" href=" "><i className="fa fa-shopping-cart" /></a>
          </div>
        </div>
        <div className="pro-name-price-ratting">
          {/* Product Name */}
          <div className="pro-name">
            <a href="product-details.html">Product Name Demo</a>
          </div>
          {/* Product Ratting */}
          <div className="pro-ratting">
            <i className="on fa fa-star" />
            <i className="on fa fa-star" />
            <i className="on fa fa-star" />
            <i className="on fa fa-star" />
            <i className="on fa fa-star-half-o" />
          </div>
          {/* Product Price */}
          <div className="pro-price fix">
            <p><span className="old">$165</span><span className="new">$150</span></p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductFea;
