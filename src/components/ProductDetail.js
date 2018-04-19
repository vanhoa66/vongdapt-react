import React, { Component } from 'react';

import { productsRef } from './../firebase';

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {}
    };
  }

  componentWillMount() {
    let { match } = this.props;
    let id = match.params.id;
    productsRef.child(id).once('value', data => {
      if (data !== null) {
        this.setState({ product: data.val() });
      }
    })
  }
  render() {
    let { product } = this.state;
    return (
      <div className="modal fade product_view" id="product_view">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <a href="#" data-dismiss="modal" className="class pull-right"><span className="glyphicon glyphicon-remove" /></a>
            <h3 className="modal-title">HTML5 is a markup language</h3>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6 product_img">
                <img src="http://img.bbystatic.com/BestBuy_US/images/products/5613/5613060_sd.jpg" className="img-responsive" />
              </div>
              <div className="col-md-6 product_content">
                <h4>Product Id: <span>51526</span></h4>
                <div className="rating">
                  <span className="glyphicon glyphicon-star" />
                  <span className="glyphicon glyphicon-star" />
                  <span className="glyphicon glyphicon-star" />
                  <span className="glyphicon glyphicon-star" />
                  <span className="glyphicon glyphicon-star" />
                  (10 reviews)
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <h3 className="cost"><span className="glyphicon glyphicon-usd" /> 75.00 <small className="pre-cost"><span className="glyphicon glyphicon-usd" /> 60.00</small></h3>
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-xs-12">
                    <select className="form-control" name="select">
                      <option value selected>Color</option>
                      <option value="black">Black</option>
                      <option value="white">White</option>
                      <option value="gold">Gold</option>
                      <option value="rose gold">Rose Gold</option>
                    </select>
                  </div>
                  {/* end col */}
                  <div className="col-md-4 col-sm-6 col-xs-12">
                    <select className="form-control" name="select">
                      <option value>Capacity</option>
                      <option value>16GB</option>
                      <option value>32GB</option>
                      <option value>64GB</option>
                      <option value>128GB</option>
                    </select>
                  </div>
                  {/* end col */}
                  <div className="col-md-4 col-sm-12">
                    <select className="form-control" name="select">
                      <option value selected>QTY</option>
                      <option value>1</option>
                      <option value>2</option>
                      <option value>3</option>
                    </select>
                  </div>
                  {/* end col */}
                </div>
                <div className="space-ten" />
                <div className="btn-ground">
                  <button type="button" className="btn btn-primary"><span className="glyphicon glyphicon-shopping-cart" /> Add To Cart</button>
                  <button type="button" className="btn btn-primary"><span className="glyphicon glyphicon-heart" /> Add To Wishlist</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      // <section className="product-page page fix">
      //   <div className="container">
      //     <div className="row">
      //       <div className="col-sm-6">
      //         <div className="details-pro-tab">
      //           {/* Tab panes */}
      //           <div className="tab-content details-pro-tab-content">
      //             <div className="tab-pane fade in active" id="image-1">
      //               <div className="simpleLens-big-image-container">
      //                 <img src={product.image} alt="vong da chi tiet" className="simpleLens-big-image" />
      //               </div>
      //             </div>
      //           </div>
      //           {/* Nav tabs */}
      //         </div>
      //       </div>
      //       <div className="col-sm-6">
      //         <div className="shop-details">
      //           {/* Product Name */}
      //           <h2>{product.name}</h2>
      //           {/* Product Ratting */}
      //           <div className="pro-ratting">
      //             <i className="on fa fa-star" />
      //             <i className="on fa fa-star" />
      //             <i className="on fa fa-star" />
      //             <i className="on fa fa-star" />
      //             <i className="on fa fa-star-half-o" />
      //           </div>
      //           <h3><span>$165</span>{product.price}</h3>
      //           <h4>10 Reviews</h4>
      //           <h5>Availability - <span>In Stock</span></h5>
      //           <h6>QUICK OVERVIEW</h6>
      //           <p>{product.description}</p>
      //           <div className="select-menu fix">
      //             <div className="sort fix">
      //               <h4>Qty</h4>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </section>
    );
  }
}

export default ProductDetail;
