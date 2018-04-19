import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom';
import { cartsRef } from './../firebase';

class MyAccountPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: []
    };
  }
  componentWillMount() {
    let { user } = this.props;
    if (user.isLogin) {
      cartsRef.child(user.info.uid).once('value').then(carts => {
        let data = [];
        carts.forEach(cart => {
          cart.val().forEach(item => {
            const { name, image, price, description } = item.product;
            const { quantity } = item;
            data.push({ name, image, price, description, quantity, key: cart.key });
          });
        })
        this.setState({ carts: data });
      })
    }
  }
  componentWillReceiveProps(nextProps) {
    let { user } = nextProps;
    if (user.isLogin) {
      cartsRef.child(user.info.uid).once('value').then(carts => {
        let data = [];
        carts.forEach(cart => {
          cart.val().forEach(item => {
            const { name, image, price, description } = item.product;
            const { quantity } = item;
            data.push({ name, image, price, description, quantity, key: cart.key });
          });
        })
        this.setState({ carts: data });
      })
    }
  }

  render() {
    let { carts } = this.state;
    let { user } = this.props;
    return (
      <section className="wishlist-page page fix">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="table-responsive">
                <table className="table wishlist-table">
                  <thead className="table-title">
                    <tr>
                      <th className="produ">PRODUCT</th>
                      <th className="namedes">PRODUCT NAME &amp; DESCRIPTION</th>
                      <th className="unit">UNIT PRICE</th>
                      <th className="quantity">QUANTITY</th>
                      <th className="unit">TotalSub</th>
                    </tr>
                  </thead>
                  {this.showElementItem(carts, user.isLogin)}
                </table>
              </div>
            </div>
          </div>
        </div>
      </section >
    );
  }

  showElementItem(items, isLogin) {
    let xhtml = null;
    if (items.length > 0 && isLogin) {
      xhtml = items.map((item, index) => {
        return (
          <tr key={index} className="table-info">
            <td className="produ">
              <a ><img alt="carts" src={item.image} /></a>
            </td>
            <td className="namedes">
              <h2><a>{item.name}</a></h2>
              <p>{item.description}</p>
            </td>
            <td className="unit">
              <h5>${item.price}</h5>
            </td>
            <td className="quantity">
              <div className="cart-plus-minus">
                <h5>{item.quantity}</h5>
              </div>
            </td>
            <td className="unit">
                <h5>${item.price * item.quantity}</h5>
            </td>
          </tr>
        );
      });
      return <tbody>{xhtml}</tbody>;
    } else {
      return null;
    }
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(MyAccountPage)

