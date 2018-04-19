import React, { Component } from 'react';
import { connect } from 'react-redux'

import Validate from './../libs/Validate';
import { actUpdateProduct, actRemoveProduct } from './../actions/index';

class CartItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  handleChange = (event) => {
    const target = event.target;    // input selectbox
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    if (Validate.checkQuantity(+value)) {
      this.setState({
        [name]: value
      });
    }

  }

  handleUpdate = (product, quantity) => {
    if (Validate.checkQuantity(+quantity)) {
      this.props.updateProduct(product, +quantity)
    }
  }
  handleDelete = (product) => {
    this.props.removeProduct(product);
  }
  render() {
    let { cartItem } = this.props;
    let { product } = cartItem;
    let quantity = (this.state.value !== 0) ? this.state.value : cartItem.quantity;
    return (
      <li>
        <div className="image"><a href=" "><img alt="cart item" src={product.image} /></a></div>
        <div className="content fix"><a href=" ">{product.name}</a>
          <span className="price">Price: ${product.price}</span>
          <span className="quantity">Quantity: {cartItem.quantity}</span>
          <span >
            <input style={{ width:"30%" }} name="value" type="number" value={quantity} onChange={this.handleChange} min={1} />
            <i  style={{ marginLeft:"10%", fontSize: 15 }} onClick={() => this.handleUpdate(product, quantity)} className="fa fa-edit edit" />
          </span>
          <span >Totalsub: {product.price * cartItem.quantity}</span>
        </div>
        <i onClick={() => this.handleDelete(product)} className="fa fa-trash delete" />
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateProduct: (product, quantity) => {
      dispatch(actUpdateProduct(product, quantity));
    },
    removeProduct: (product) => {
      dispatch(actRemoveProduct(product));
    }
  }
}


export default connect(null, mapDispatchToProps)(CartItem);