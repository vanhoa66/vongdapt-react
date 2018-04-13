import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer-top-area fix">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="footer-about">
                  <div className="image">
                    <img src="img/header/logo.png" alt="vong da phong thuy" />
                    <h3>online jewelry store</h3>
                  </div>
                  <p>perspiciatis unde omnis iste natus error sit voluptatem accm doloremque antium, totam rem aperiam, eaque ipsa perspiciatis unde omnis iste</p>
                </div>
                <div className="footer-contact">
                  <div className="single-contact">
                    <div className="icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="details">
                      <p>Main town, Anystreen</p>
                      <p>C/A 1254 New Yourk</p>
                    </div>
                  </div>
                  <div className="single-contact">
                    <div className="icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="details">
                      <p>+012  456  456  456</p>
                      <p>+012  356  897  222</p>
                    </div>
                  </div>
                  <div className="single-contact">
                    <div className="icon">
                      <i className="fa fa-dribbble" />
                    </div>
                    <div className="details">
                      <a href=" ">info@olongker.com</a>
                      <a href=" ">www.olongker.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="footer-quick-link footer-links">
                  <h2>QUICK LINK</h2>
                  <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="shop-list.html">Shop</a></li>
                    <li><a href="shop-left-sidebar.html">New Arrivals</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="portfolio-1.html">Portfolio</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href=" ">Shortcodes</a></li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="row">
                  <div className="col-sm-8 footer-support footer-links">
                    <h2>OUR SUPPORT</h2>
                    <ul>
                      <li><a href=" ">Site Map</a></li>
                      <li><a href=" ">privacy Policy</a></li>
                      <li><a href=" ">Your Account</a></li>
                      <li><a href=" ">Term &amp; Conditions</a></li>
                      <li><a href=" ">Advance Search</a></li>
                      <li><a href="faq.html">Help &amp; FAQs</a></li>
                      <li><a href=" ">Gift Voucher</a></li>
                      <li><a href="contact-2.html">Contact Us</a></li>
                    </ul>
                  </div>
                  <div className="col-sm-4 footer-account footer-links">
                    <h2>my Account</h2>
                    <ul>
                      <li><a href=" ">my Account</a></li>
                      <li><a href=" ">order History</a></li>
                      <li><a href=" ">Returns</a></li>
                      <li><a href=" ">Specials</a></li>
                    </ul>
                  </div>
                </div>
                <div className="footer-newslater fix">
                  <div className="wrap fix">
                    <h3>NEWS LETTER ! </h3>
                    <form action="#">
                      <input type="email" placeholder="Your E-mail..." />
                      <button className="submit">SUBSCRIBE</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{/*Start Footer top area*/}
        <div className="footer-area fix">{/*Start Footer Area*/}
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="copy-right">
                  <p>© 2015 <a href="">BootExperts</a>, All Right Reserved</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="payment">
                  <ul>
                    <li><a href=" "><img src="img/footer/paypal.jpg" alt="vong da phong thuy" /></a></li>
                    <li><a href=" "><img src="img/footer/visa.jpg" alt="vong da phong thuy" /></a></li>
                    <li><a href=" "><img src="img/footer/master.jpg" alt="vong da phong thuy" /></a></li>
                    <li><a href=" "><img src="img/footer/cards.jpg" alt="vong da phong thuy" /></a></li>
                    <li><a href=" "><img src="img/footer/discover.jpg" alt="vong da phong thuy" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
