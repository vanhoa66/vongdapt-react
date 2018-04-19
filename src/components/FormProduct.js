import React, { Component } from 'react';

import { connect } from 'react-redux'

import { productsRef } from './../firebase';
import { closeForm, toggleForm, productUnSelected, actChangeNotify } from './../actions'
import * as notify from './../constants/Notify';

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

  handleSubmit = (event) => {
    let { key, name, image, price, description } = this.state;
    if (name !== "" && image !== "") {
      if (key === '') { //add new product
        productsRef.push({
          name,
          image,
          price,
          description
        });
        this.props.changeNotify(notify.NOTI_TYPE_SUCCESS, notify.NOTI_ADD_TASK_TITLE, notify.NOTI_ADD_TASK_MESSGAE);
      } else { //update product
        let updateProduct = { key, name, image, price, description };
        productsRef.child(key).update(updateProduct);
        this.props.changeNotify(notify.NOTI_TYPE_SUCCESS, notify.NOTI_UPDATE_TASK_TITLE, notify.NOTI_UPDATE_TASK_MESSGAE);
      }
      this.props.closeForm();
    }
    this.props.productUnSelected();
    event.preventDefault();
  }

  render() {
    let xhtm = null;
    let { user } = this.props;
    if (this.props.isShowForm) {
      xhtm = (
        <div>
          <div className="overlay"></div>
          <div className="white-box container">
            <form id="signup-form" onSubmit={this.handleSubmit}>
              <h3>Create your own product</h3>
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
          </div>
        </div>
      )
    };
    if (user.isLogin && user.info.isAdmin) {
      return (<div className="login container">
        <input onClick={this.handleToggle} type="button" defaultValue="Add new Product" />
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
    },
    changeNotify: (style, title, content) => {
      dispatch(actChangeNotify(style, title, content));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormProduct)
