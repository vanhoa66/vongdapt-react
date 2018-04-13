import React, { Component } from 'react';

import { connect } from 'react-redux'

import { firebaseApp,productsRef } from './../firebase';
import { closeForm, toggleForm, productUnSelected } from './../actions'

class FormProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: '',
      name: '',
      image: '',
      price: 0,
      description: ''

    };
  }

  componentWillReceiveProps(nextProps) {
    let { productSelected } = nextProps;
    if (productSelected !== null) {
      this.setState({
        key: productSelected.key,
        name: productSelected.name,
        image: productSelected.image,
        price: productSelected.price,
        description: productSelected.description
      })
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleToggle = () => {
    this.props.toggleForm();
  }
  
  handleCancel = () => {
    this.props.productUnSelected();
    this.props.closeForm();
  }

  handleLogout = () => {
    firebaseApp.auth().signOut();
  }

  handleSubmit = (event) => {
    let { key, name, image, price, description } = this.state;
    if (name !== "" && image !== "") {
      if (key === '') { //add new product
        productsRef.push({
          key,
          name,
          image,
          price,
          description
        });
      } else { //update product
        let updateProduct = { key, name, image, price, description };
        productsRef.child(key).update(updateProduct);
      }
      this.props.closeForm();
    }
    this.setState({
      name: '',
      image: '',
      price: 0,
      description: ''
    });
    event.preventDefault();
  }

  render() {
    let xhtm = null;
    let { user } = this.props;
    if (this.props.isShowForm) {
      xhtm = <form id="signup-form" onSubmit={this.handleSubmit}>
        <h2>Add new Product</h2>
        <p>Create your own product</p>
        <label>Name<span>*</span></label>
        <input type="text" value={this.state.name} onChange={this.handleChange} name="name" />
        <label>Image<span>*</span></label>
        <input type="text" value={this.state.image} onChange={this.handleChange} name="image" />
        <label>Price<span>*</span></label>
        <input type="number" min={0} value={this.state.price} onChange={this.handleChange} name="price" />
        <label>Description<span>*</span></label>
        <textarea value={this.state.description} onChange={this.handleChange} name="description" className="form-control" rows="5" id="description"></textarea>
        <input type="submit" defaultValue="Add" />
        <input onClick={this.handleCancel} type="button" defaultValue="Cancel" />
      </form>
    };
    if (user.isLogin && user.info.isAdmin) {
      return (<div className="login container">
        <input onClick={this.handleToggle} type="button" defaultValue="OpenForm" />
        <input onClick={this.handleLogout} type="button" defaultValue="Logout" />
        {xhtm}
      </div>
      );
    }
    return null
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    isShowForm: state.isShowForm,
    productSelected: state.productSelected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeForm: () => {
      dispatch(closeForm())
    },
    toggleForm: () => {
      dispatch(toggleForm())
    },
    productUnSelected: () => {
      dispatch(productUnSelected())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormProduct)
