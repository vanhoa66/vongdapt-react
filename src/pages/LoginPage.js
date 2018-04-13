import React, { Component } from 'react';

import Login from '../components/Login';
// import { productsRef } from './../firebase';

class LoginPage extends Component {


  render() {

    return (
      <div>
        <div className="page-title fix">{/*Start Title*/}
          <div className="overlay section">
            <h2>login / Register</h2>
          </div>
        </div>{/*End Title*/}
        {/*start login Area*/}
        <Login />
        {/*End login Area*/}
      </div>
    );
  }
}

export default LoginPage;
