import React, { Component } from 'react';

class Support extends Component {
  render() {
    return (
      <div className="support-area section fix">
        <div className="container">
          <div className="row">
            <div className="support col-sm-3">
              <i className="fa fa-thumbs-up" />
              <h3>High quality</h3>
              <p>Lorem ipsum dolor sit amet, conseetur adipiscing elit, consectetur</p>
            </div>
            <div className="support col-sm-3">
              <i className="fa fa-bus" />
              <h3>Fast Delivery</h3>
              <p>Lorem ipsum dolor sit amet, conseetur adipiscing elit, consectetur</p>
            </div>
            <div className="support col-sm-3">
              <i className="fa fa-phone" />
              <h3>24/7 support</h3>
              <p>Lorem ipsum dolor sit amet, conseetur adipiscing elit, consectetur</p>
            </div>
            <div className="support col-sm-3">
              <i className="fa fa-random" />
              <h3>14 - Day Returns</h3>
              <p>Lorem ipsum dolor sit amet, conseetur adipiscing elit, consectetur</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Support;
