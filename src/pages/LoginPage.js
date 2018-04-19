import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Login from '../components/Login';
// import { productsRef } from './../firebase';
import { actChangeNotify } from './../actions'

class LoginPage extends Component {


  render() {
    let { user } = this.props;
    if (user.isLogin) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Login changeNotify={this.props.changeNotify}/>
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
    changeNotify: (style, title, content) => {
      dispatch(actChangeNotify(style, title, content));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
