import React, { Component } from 'react';

class ProductDetail extends Component {

  render() {
    let { product } = this.props;
    return (
      <section className="product-page page fix">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="details-pro-tab">
                {/* Tab panes */}
                <div className="tab-content details-pro-tab-content">
                  <div className="tab-pane fade in active" id="image-1">
                    <div className="simpleLens-big-image-container">
                      <a className="simpleLens-lens-image" data-lens-image="img/single-product/1.jpg">
                        <img src={product.image} alt="vong da chi tiet" className="simpleLens-big-image" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Nav tabs */}
              </div>
            </div>
            <div className="col-sm-6">
              <div className="shop-details">
                {/* Product Name */}
                <h2>{product.name}</h2>
                {/* Product Ratting */}
                <div className="pro-ratting">
                  <i className="on fa fa-star" />
                  <i className="on fa fa-star" />
                  <i className="on fa fa-star" />
                  <i className="on fa fa-star" />
                  <i className="on fa fa-star-half-o" />
                </div>
                <h3><span>$165</span>{product.price}</h3>
                <h4>10 Reviews</h4>
                <h5>Availability - <span>In Stock</span></h5>
                <h6>QUICK OVERVIEW</h6>
                <p>{product.description}</p>
                <div className="select-menu fix">
                  <div className="sort fix">
                    <h4>SIZE</h4>
                    <select>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                    </select>
                  </div>
                  <div className="sort fix">
                    <h4>Color</h4>
                    <select>
                      <option value="pink">pink</option>
                      <option value="red">red</option>
                      <option value="blue">blue</option>
                    </select>
                  </div>
                  <div className="sort fix">
                    <h4>Qty</h4>
                    <select>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                    </select>
                  </div>
                </div>
                <div className="review">
                  <textarea rows={4} placeholder="Write Your Review..." defaultValue={""} />
                </div>
                <div className="action-btn">
                  <a href=" "><i className="fa fa-shopping-cart" /></a>
                  <a href=" "><i className="fa fa-heart-o" /></a>
                  <a href=" "><i className="fa fa-refresh" /></a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 fix">
              <div className="description">
                {/* Nav tabs */}
                <ul className="nav product-nav">
                  <li className="active"><a data-toggle="tab" href="description">DESCRIPTION</a></li>
                  <li ><a data-toggle="tab" href="review">REVIEWS</a></li>
                  <li ><a data-toggle="tab" href="tags">PRODUCTS TAGS</a></li>
                  <li ><a data-toggle="tab" href="custom-tags">CUSTOM TABS</a></li>
                </ul>
                {/* Tab panes */}
                <div className="tab-content">
                  <div id="description" className="tab-pane fade active in" role="tabpanel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco aboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepte.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc.</p>
                  </div>
                  <div id="review" className="tab-pane fade" role="tabpanel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco aboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepte.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc.</p>
                  </div>
                  <div id="tags" className="tab-pane fade" role="tabpanel">
                    <a href=" ">JEWELRY</a><a href=" ">Necklaces</a><a href=" ">Jewelry Sets</a><a href=" ">Churi</a>
                  </div>
                  <div id="custom-tags" className="tab-pane fade" role="tabpanel">
                    <a href=" ">JEWELRY</a><a href=" ">Necklaces</a><a href=" ">Jewelry Sets</a><a href=" ">Churi</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 fix">
              <div className="section-title">
                <h2>RELATEDE PRODUCT</h2>
                <div className="underline" />
              </div>
              <div className="related-pro-slider owl-carousel">
                {/* Single Product Start */}
                <div className="product-item fix">
                  <div className="product-img-hover">
                    {/* Product image */}
                    <a href="product-details.html" className="pro-image fix"><img src="img/product/1.jpg" alt="product" /></a>
                    {/* Product action Btn */}
                    <div className="product-action-btn">
                      <a className="quick-view" href=" "><i className="fa fa-search" /></a>
                      <a className="favorite" href=" "><i className="fa fa-heart-o" /></a>
                      <a className="add-cart" href=" "><i className="fa fa-shopping-cart" /></a>
                    </div>
                  </div>
                  <div className="pro-name-price-ratting">
                    {/* Product Name */}
                    <div className="pro-name">
                      <a href="product-details.html">Product Name Demo</a>
                    </div>
                    {/* Product Ratting */}
                    <div className="pro-ratting">
                      <i className="on fa fa-star" />
                      <i className="on fa fa-star" />
                      <i className="on fa fa-star" />
                      <i className="on fa fa-star" />
                      <i className="on fa fa-star-half-o" />
                    </div>
                    {/* Product Price */}
                    <div className="pro-price fix">
                      <p><span className="old">$165</span><span className="new">$150</span></p>
                    </div>
                  </div>
                </div>{/* Single Product End */}
                {/* Single Product Start */}
                <div className="product-item fix">
                  <div className="product-img-hover">
                    {/* Product image */}
                    <a href="product-details.html" className="pro-image fix"><img src="img/product/2.jpg" alt="product" /></a>
                    {/* Product action Btn */}
                    <div className="product-action-btn">
                      <a className="quick-view" href=" "><i className="fa fa-search" /></a>
                      <a className="favorite" href=" "><i className="fa fa-heart-o" /></a>
                      <a className="add-cart" href=" "><i className="fa fa-shopping-cart" /></a>
                    </div>
                  </div>
                  <div className="pro-name-price-ratting">
                    {/* Product Name */}
                    <div className="pro-name">
                      <a href="product-details.html">Product Name Demo</a>
                    </div>
                    {/* Product Ratting */}
                    <div className="pro-ratting">
                      <i className="on fa fa-star" />
                      <i className="on fa fa-star" />
                      <i className="on fa fa-star" />
                      <i className="on fa fa-star" />
                      <i className="on fa fa-star-half-o" />
                    </div>
                    {/* Product Price */}
                    <div className="pro-price fix">
                      <p><span className="old">$165</span><span className="new">$150</span></p>
                    </div>
                  </div>
                </div>{/* Single Product End */}
                {/* Single Product Start */}
                <div className="product-item fix">
                  <div className="product-img-hover">
                    {/* Product image */}
                    <a href="product-details.html" className="pro-image fix"><img src="img/product/3.jpg" alt="product" /></a>
                    {/* Product action Btn */}
                    <div className="product-action-btn">
                      <a className="quick-view" href=" "><i className="fa fa-search" /></a>
                      <a className="favorite" href=" "><i className="fa fa-heart-o" /></a>
                      <a className="add-cart" href=" "><i className="fa fa-shopping-cart" /></a>
                    </div>
                  </div>
                  <div className="pro-name-price-ratting">
                    {/* Product Name */}
                    <div className="pro-name">
                      <a href="product-details.html">Product Name Demo</a>
                    </div>
                    {/* Product Ratting */}
                    <div className="pro-ratting">
                      <i className="on fa fa-star" />
                      <i className="on fa fa-star" />
                      <i className="on fa fa-star" />
                      <i className="on fa fa-star" />
                      <i className="on fa fa-star-half-o" />
                    </div>
                    {/* Product Price */}
                    <div className="pro-price fix">
                      <p><span className="old">$165</span><span className="new">$150</span></p>
                    </div>
                  </div>
                </div>{/* Single Product End */}
                {/* Single Product Start */}
                <div className="product-item fix">
                  <div className="product-img-hover">
                    {/* Product image */}
                    <a href="product-details.html" className="pro-image fix"><img src="img/product/4.jpg" alt="product" /></a>
                    {/* Product action Btn */}
                    <div className="product-action-btn">
                      <a className="quick-view" href=" "><i className="fa fa-search" /></a>
                      <a className="favorite" href=" "><i className="fa fa-heart-o" /></a>
                      <a className="add-cart" href=" "><i className="fa fa-shopping-cart" /></a>
                    </div>
                  </div>
                  <div className="pro-name-price-ratting">
                    {/* Product Name */}
                    <div className="pro-name">
                      <a href="product-details.html">Product Name Demo</a>
                    </div>
                    {/* Product Ratting */}
                    <div className="pro-ratting">
                      <i className="on fa fa-star" />
                      <i className="on fa fa-star" />
                      <i className="on fa fa-star" />
                      <i className="on fa fa-star" />
                      <i className="on fa fa-star-half-o" />
                    </div>
                    {/* Product Price */}
                    <div className="pro-price fix">
                      <p><span className="old">$165</span><span className="new">$150</span></p>
                    </div>
                  </div>
                </div>{/* Single Product End */}
                {/* Single Product Start */}
                <div className="product-item fix">
                  <div className="product-img-hover">
                    {/* Product image */}
                    <a href="product-details.html" className="pro-image fix"><img src="img/product/5.jpg" alt="product" /></a>
                    {/* Product action Btn */}
                    <div className="product-action-btn">
                      <a className="quick-view" href=" "><i className="fa fa-search" /></a>
                      <a className="favorite" href=" "><i className="fa fa-heart-o" /></a>
                      <a className="add-cart" href=" "><i className="fa fa-shopping-cart" /></a>
                    </div>
                  </div>
                  <div className="pro-name-price-ratting">
                    {/* Product Name */}
                    <div className="pro-name">
                      <a href="product-details.html">Product Name Demo</a>
                    </div>
                    {/* Product Ratting */}
                    <div className="pro-ratting">
                      <i className="on fa fa-star" />
                      <i className="on fa fa-star" />
                      <i className="on fa fa-star" />
                      <i className="on fa fa-star" />
                      <i className="on fa fa-star-half-o" />
                    </div>
                    {/* Product Price */}
                    <div className="pro-price fix">
                      <p><span className="old">$165</span><span className="new">$150</span></p>
                    </div>
                  </div>
                </div>{/* Single Product End */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductDetail;
