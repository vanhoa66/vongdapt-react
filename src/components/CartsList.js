import React, { Component } from 'react';
import { connect } from 'react-redux'
import { sumBy } from 'lodash';

import { cartsRef } from './../firebase';
import CartItem from './CartItem';
import { actCheckoutProduct } from '../actions';

class CartsList extends Component {

  handleCheckOut = () => {
    let { carts, user } = this.props;
    if (user.isLogin && carts.length > 0) {
      cartsRef.child(user.info.uid).push(carts).then(() => this.props.checkout());
    }
  }

  render() {

    let { carts } = this.props;
    let totalQuantity = sumBy(carts, 'quantity');
    let totalPrice = sumBy(carts, (item) => {
      return item.product.price * item.quantity;
    });
    return (
      <div className="col-sm-4 col-lg-3">
        <div className="cart-info float-right">
          <a href=" ">
            <h5>My cart <span>{totalQuantity}</span> items - <span>${totalPrice}</span></h5>
            <i className="fa fa-shopping-cart" />
          </a>
          <div className="cart-hover">
            {this.showCartItem(carts)}
            <div className="header-button-price">
              <a onClick={this.handleCheckOut}><i className="fa fa-sign-out"></i><span>Check Out</span></a>
              {/* <button onClick={this.handleCheckOut}>Check Out</button> */}
              <div className="total-price"><h3>Total Price : <span>${totalPrice}</span></h3></div>
            </div>
          </div>
        </div>
        <div className="search float-right">
          <input type="text" placeholder="Search Here...." />
          <button className="submit"><i className="fa fa-search" /></button>
        </div>
      </div>
    );
  }
  showCartItem(carts) {

    let xhtml = null;

    if (carts.length > 0) {
      xhtml = carts.map((cartItem, index) => {
        return (
          <CartItem key={index + "" + cartItem.quantity} cartItem={cartItem} index={index} />
        );
      });
    }

    return <ul className="header-cart-pro">{xhtml}</ul>;
  }

}

const mapStateToProps = state => {
  return {
    user: state.user,
    carts: state.carts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkout: () => {
      dispatch(actCheckoutProduct())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartsList)
