import React, { Component } from 'react';

// import ProductDetail from '../components/ProductDetail';
import { firebaseApp, usersRef } from './../firebase';
import * as notify from './../constants/Notify';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailSignUp: '',
      passwordSignUp: '',
      emailLogin: '',
      passwordLogin: ''
    };
  }
  handleChange = (event) => {
    const target = event.target;    // input selectbox
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmitSignUp = (event) => {
    let { emailSignUp, passwordSignUp } = this.state;
    firebaseApp.auth()
      .createUserWithEmailAndPassword(emailSignUp, passwordSignUp)
      .then(data => {
        usersRef.child(data.uid).set({
          isAdmin: false,
          uid: data.uid
        });
        this.props.changeNotify(notify.NOTI_TYPE_SUCCESS, notify.NOTI_SIGNUP_SUCCESSFULL_TITLE, notify.NOTI_SIGNUP_SUCCESSFULL_MESSAGE);
      })
      .catch((error) => {
        this.props.changeNotify(notify.NOTI_TYPE_DANGER, notify.NOTI_SIGNUP_FAIL_TITLE, error.message );
      })

    event.preventDefault();
  }

  handleSubmitLogIn = (event) => {
    let { emailLogin, passwordLogin } = this.state;
    firebaseApp.auth()
      .signInWithEmailAndPassword(emailLogin, passwordLogin)
      .then(() => {
        this.props.changeNotify(notify.NOTI_TYPE_SUCCESS, notify.NOTI_SIGNIN_SUCCESSFULL_TITLE, notify.NOTI_SIGNIN_SUCCESSFULL_MESSAGE );
      })
      .catch((error) => {
        this.props.changeNotify(notify.NOTI_TYPE_DANGER, notify.NOTI_SIGNIN_FAIL_TITLE, error.message );
      });
    event.preventDefault();
  }
  render() {

    return (
      <div className="login-page page fix">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-5">
              <div className="login">
                <form id="login-form" onSubmit={this.handleSubmitLogIn}>
                  <h2>Login</h2>
                  <p>Welcome to your account</p>
                  <div className="social-login">
                    <a id="facebook" href=" "><i className="fa fa-facebook" />Sign In with Facebook</a>
                    <a id="twitter" href=" "><i className="fa fa-twitter" />Sign In with Twitter</a>
                  </div>
                  <label>E-mail Address<span>*</span></label>
                  <input value={this.state.email} onChange={this.handleChange} name="emailLogin" type="text" />
                  <label>Password<span>*</span></label>
                  <input value={this.state.password} onChange={this.handleChange} name="passwordLogin" type="password" />
                  {/* <div className="remember">
                    <input type="checkbox" />
                    <p>Remember me!</p>
                    <a href=" ">Forgot Your Password ?</a>
                  </div> */}
                  <input type="submit" defaultValue="login" />
                </form>
              </div>
            </div>
            <div className="col-md-2" />
            <div className="col-sm-6 col-md-5">
              <div className="login">
                <form id="signup-form" onSubmit={this.handleSubmitSignUp}>
                  <h2>Create A new Account</h2>
                  <p>Create your own account</p>
                  <label>E-mail Address<span>*</span></label>
                  <input value={this.state.email} onChange={this.handleChange} name="emailSignUp" type="text" />
                  <label>Password<span>*</span></label>
                  <input value={this.state.password} onChange={this.handleChange} name="passwordSignUp" type="password" />
                  {/* <label>Confirm Password<span>*</span></label>
                  <input type="password" /> */}
                  <input type="submit" defaultValue="Sign up" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
