import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { actChangeNotify} from './../actions/index';
import * as notify from './../constants/Notify';
import { firebaseApp } from './../firebase';
import CartsList from './CartsList';
import logo from './../img/logo.png'
class Header extends Component {

  handleLogout = () => {
    firebaseApp.auth().signOut();
    this.props.changeNotify(notify.NOTI_TYPE_DANGER, notify.NOTI_LOGOUT_SUCCESSFULL_TITLE, notify.NOTI_LOGOUT_SUCCESSFULL_MESSAGE );
  }

  render() {

    let { user } = this.props;
    let elmWelcome = (<div className="log-link">
      <p>Well come visitor you can</p>
      <h5><Link to="login">Login</Link> or <Link to="login">Create an account</Link></h5>
    </div>)
    if (user.isLogin) {
      elmWelcome = (<div className="log-link">
        <p>Well come <b>{user.info.email}</b></p>
        <p onClick={this.handleLogout}><i className="fa fa-sign-out"></i><span>Logout</span></p>
        {/* <input onClick={this.handleLogout} type="button" defaultValue="Logout" /> */}
      </div>);
    }

    return (
      <div>
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <div className="info">
                  <div className="phn-num float-left">
                    <i className="fa fa-phone float-left" />
                    <p>0987123456</p>
                  </div>
                  <div className="mail-id float-left">
                    <i className="fa fa-envelope-o float-left" />
                    <p><a href=" ">info@gmail.com</a></p>
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
                    <li><Link to='/myaccount'>My Account</Link></li>
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
                {elmWelcome}
              </div>
              <div className="col-sm-4 col-lg-6">
                <div className="logo text-center">
                  <Link to="/">
                    <img src={logo} alt="header" />
                    <h4>online jewelry store</h4>
                  </Link>
                </div>
              </div>
              <CartsList />
            </div>
          </div>
        </div>{/*End Header Area*/}
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)
