import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <div className="info">
                  <div className="phn-num float-left">
                    <i className="fa fa-phone float-left" />
                    <p>(000)  123  288  456 </p>
                  </div>
                  <div className="mail-id float-left">
                    <i className="fa fa-envelope-o float-left" />
                    <p><a href=" ">info@olongker.com</a></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="socials text-center">
                  <a href=" "><i className="fa fa-facebook" /></a>
                  <a href=" "><i className="fa fa-twitter" /></a>
                  <a href=" "><i className="fa fa-linkedin" /></a>
                  <a href=" "><i className="fa fa-google-plus" /></a>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div id="top-menu" className="float-right">
                  <ul>
                    <li><a href=" ">My Account</a></li>
                    <li><a href=" ">$USD <i className="fa fa-angle-down" /></a>
                      <ul>
                        <li><a href=" ">Pound</a></li>
                        <li><a href=" ">BDT</a></li>
                      </ul>
                    </li>
                    <li><a href=" ">English(UK) <i className="fa fa-angle-down" /></a>
                      <ul>
                        <li><a href=" ">English(USA)</a></li>
                        <li><a href=" ">Bangla</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-area">{/*Start Header Area*/}
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-lg-3">
                <div className="log-link">
                  <p>Well come visitor you can</p>
                  <h5><Link to="login">Login</Link> or <Link to="login">Create an account</Link></h5>
                </div>
              </div>
              <div className="col-sm-4 col-lg-6">
                <div className="logo text-center">
                  <Link to="/">
                    <img src="img/header/logo.png" alt="header" />
                    <h4>online jewelry store</h4>
                  </Link>
                </div>
              </div>
              <div className="col-sm-4 col-lg-3">
                <div className="cart-info float-right">
                  <a href="cart.html">
                    <h5>My cart <span>2</span> items - <span>$390</span></h5>
                    <i className="fa fa-shopping-cart" />
                  </a>
                  <div className="cart-hover">
                    <ul className="header-cart-pro">
                      <li>
                        <div className="image"><a href=" "><img alt="cart item" src="img/cart-1.jpg" /></a></div>
                        <div className="content fix"><a href=" ">Product Name</a><span className="price">Price: $130</span><span className="quantity">Quantity: 1</span></div>
                        <i className="fa fa-trash delete" />
                      </li>
                      <li>
                        <div className="image"><a href=" "><img alt="cart item" src="img/cart-2.jpg" /></a></div>
                        <div className="content fix"><a href=" ">Product Name</a><span className="price">Price: $130</span><span className="quantity">Quantity: 2</span></div>
                        <i className="fa fa-trash delete" />
                      </li>
                    </ul>
                    <div className="header-button-price">
                      <a href="checkout.html"><i className="fa fa-sign-out" /><span>Check Out</span></a>
                      <div className="total-price"><h3>Total Price : <span>$390</span></h3></div>
                    </div>
                  </div>
                </div>
                <div className="search float-right">
                  <input type="text" defaultValue placeholder="Search Here...." />
                  <button className="submit"><i className="fa fa-search" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>{/*End Header Area*/}
      </div>
    );
  }
}

export default Header;
