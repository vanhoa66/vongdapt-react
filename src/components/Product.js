import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom';

import { productsRef, productsDeletedRef } from './../firebase';
import { openForm, productSelected, actBuyProduct, actChangeNotify } from './../actions'
import * as notify from './../constants/Notify';

class Product extends Component {

  handleEdit = (product) => {
    this.props.editProduct(product);
    this.props.openForm();
  }

  handleDelete = (product) => {
    productsRef.child(product.key).remove();
    this.props.changeNotify(notify.NOTI_TYPE_DANGER, notify.NOTI_REMOVE_TASK_TITLE, notify.NOTI_REMOVE_TASK_MESSAGE);
    // Add productsDeletedRef
    productsDeletedRef.push(product);
  }

  handleClick = (product) => {
    this.props.buyProduct(product, 1);
  }

  render() {
    let product = {
      key: '',
      name: '',
      image: '',
      description: '',
      price: 0,
    };
    let { user } = this.props;
    let elmEdit = null;
    let elmDes = null;
    if (user.isLogin && user.info.isAdmin) {
      elmEdit = (<div className="pro-name">
        <button onClick={() => this.handleEdit(product)} type="button" className="btn btn-info">Edit</button>
        <button onClick={() => this.handleDelete(product)} type="button" className="btn btn-danger">Delete</button>
      </div>)
    }
    product = (this.props.product !== undefined) ? this.props.product : product;
    elmDes = (product.description.length > 50) ? (<p>{`${product.description.substring(0, 50)} ...`}</p>) : (<p style={{ width: 242, height: 40 }}>{product.description}</p>);
    return (
      <div>
        <div className="col-md-3">
          <div className="thumbnail">
            <img data-toggle="modal" data-target={`#${product.key}`} src={product.image} alt="product" className="img-responsive" />
            <div className="caption">
              <h4 className="pull-right">${product.price}</h4>
              <h4 data-toggle="modal" data-target={`#${product.key}`}>{product.name}</h4>
              {elmDes}
            </div>
            <div className="btn-ground text-center">
              {elmEdit}
            </div>
            <div className="space-ten"></div>
            <div className="btn-ground text-center">
              <button onClick={() => this.handleClick(product)} type="button" className="btn btn-primary"><i className="fa fa-shopping-cart" /> Add To Cart</button>
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#${product.key}`}><i className="fa fa-search" /> Quick View</button>
            </div>
            <div className="space-ten"></div>
          </div>
        </div>
        {/* <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
          <div className="thumbnail">
            <Link to={`product/${product.key}`} className="pro-image fix"><img src={product.image} alt="product" /></Link>
            <img data-toggle="modal" data-target="#product_view" src={product.image} alt="product" />
            <div className="pro-name-price-ratting">
              <h3><Link to={`product/${product.key}`}>{product.name}</Link></h3>
              <h3 data-toggle="modal" data-target="#product_view" >{product.name}</h3>
              {elmEdit}
              <div className="pro-ratting">
                <i className="on fa fa-star" />
                <i className="on fa fa-star" />
                <i className="on fa fa-star" />
                <i className="on fa fa-star" />
                <i className="on fa fa-star-half-o" />
              </div>
              <div className="pro-price fix">
                <p><span className="old">${+product.price + 10}</span><span className="new">${product.price}</span></p>
              </div>
              <a style={{ marginLeft: "10%", fontSize: 25 }} onClick={() => this.handleClick(product)} className="add-cart"><i className="fa fa-shopping-cart"></i></a>
              <button onClick={() => this.handleClick(product)} style={{ marginRight: 5 }}>Add Cart</button>
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#product_view"><i className="fa fa-search" /> Quick View</button>
            </div>
          </div>
        </div> */}
        <div className="modal fade product_view" id={product.key}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <a href="" data-dismiss="modal" className="class pull-right"><span className="glyphicon glyphicon-remove" /></a>
                <h3 className="modal-title">{product.name}</h3>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6 product_img">
                    <img src={product.image} className="img-responsive" alt="vong da" />
                  </div>
                  <div className="col-md-6 product_content">
                    <h3 className="cost"><span className="glyphicon glyphicon-usd" /> {product.price} <small className="pre-cost"><span className="glyphicon glyphicon-usd" />{+product.price + 100}</small></h3>
                    <p>{product.description}</p>
                    <div className="space-ten" />
                    <div className="btn-ground">
                      <button type="button" className="btn btn-primary"><span className="glyphicon glyphicon-shopping-cart" /> Add To Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
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
    openForm: () => {
      dispatch(openForm())
    },
    editProduct: (product) => {
      dispatch(productSelected(product));
    },
    buyProduct: (product, quantity) => {
      dispatch(actBuyProduct(product, quantity));
    },
    changeNotify: (style, title, content) => {
      dispatch(actChangeNotify(style, title, content));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)

