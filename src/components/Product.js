import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { productsRef, productsDeletedRef } from './../firebase';
import { openForm, productSelected } from './../actions'

class Product extends Component {

  handleEdit = (product) => {
    this.props.editProduct(product);
    this.props.openForm();
  }

  handleDelete = (product) => {
    productsRef.child(product.key).remove();
    // Add productsDeletedRef
    productsDeletedRef.push(product);
  }
  render() {
    let product = {
      key: '',
      name: '',
      image: '',
      price: 0,
    };
    let { user } = this.props;
    let elmEdit = null;
    if (user.isLogin && user.info.isAdmin) {
      elmEdit = (<div className="pro-name">
        <button onClick={() => this.handleEdit(product)} type="button" className="btn btn-info">Edit</button>
        <button onClick={() => this.handleDelete(product)} type="button" className="btn btn-info">Delete</button>
      </div>)
    }
    product = (this.props.product !== undefined) ? this.props.product : product;
    return (
      <div className="product-item fix">
        <div className="product-img-hover">
          {/* Product image */}
          <Link to={`product/${product.key}`} className="pro-image fix"><img src={product.image} alt="product" /></Link>
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
            <a href="product-details.html">{product.name}</a>
          </div>
          {elmEdit}
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
            <p><span className="old">$165</span><span className="new">{product.price}</span></p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openForm: () => {
      dispatch(openForm())
    },
    editProduct: (product) => {
      dispatch((productSelected(product)));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)

