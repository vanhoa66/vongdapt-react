import React, { Component } from 'react';

class Blog extends Component {
  render() {
    return (
      <div className="blog-area section fix">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>Latest From Blog</h2>
              <div className="underline" />
            </div>
            <div className="blog-slider owl-carousel">
              <div className="single-blog">
                <div className="content fix">
                  <a className="image fix" href="blog-details.html"><img src="img/blog/blog-1.jpg" alt="vong da phong thuy" />
                    <div className="date">
                      <h4>25</h4>
                      <h5>Aug</h5>
                    </div>
                  </a>
                  <h2><a className="title" href="blog-details.html">Lorem ipsum dolor sit amet</a></h2>
                  <div className="meta">
                    <a href=" "><i className="fa fa-pencil-square-o" />John Lee</a>
                    <a href=" "><i className="fa fa-calendar" />2 Days ago</a>
                    <a href=" "><i className="fa fa-comments" />12 Comments</a>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim niam.</p>
                </div>
              </div>
              <div className="single-blog">
                <div className="content fix">
                  <a className="image fix" href="blog-details.html"><img src="img/blog/blog-2.jpg" alt="vong da phong thuy" />
                    <div className="date">
                      <h4>25</h4>
                      <h5>Aug</h5>
                    </div>
                  </a>
                  <h2><a className="title" href="blog-details.html">Lorem ipsum dolor sit amet</a></h2>
                  <div className="meta">
                    <a href=" "><i className="fa fa-pencil-square-o" />John Lee</a>
                    <a href=" "><i className="fa fa-calendar" />2 Days ago</a>
                    <a href=" "><i className="fa fa-comments" />12 Comments</a>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim niam.</p>
                </div>
              </div>
              <div className="single-blog">
                <div className="content fix">
                  <a className="image fix" href="blog-details.html"><img src="img/blog/blog-3.jpg" alt="vong da phong thuy" />
                    <div className="date">
                      <h4>25</h4>
                      <h5>Aug</h5>
                    </div>
                  </a>
                  <h2><a className="title" href="blog-details.html">Lorem ipsum dolor sit amet</a></h2>
                  <div className="meta">
                    <a href=" "><i className="fa fa-pencil-square-o" />John Lee</a>
                    <a href=" "><i className="fa fa-calendar" />2 Days ago</a>
                    <a href=" "><i className="fa fa-comments" />12 Comments</a>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim niam.</p>
                </div>
              </div>
              <div className="single-blog">
                <div className="content fix">
                  <a className="image fix" href="blog-details.html"><img src="img/blog/blog-4.jpg" alt="vong da phong thuy" />
                    <div className="date">
                      <h4>25</h4>
                      <h5>Aug</h5>
                    </div>
                  </a>
                  <h2><a className="title" href="blog-details.html">Lorem ipsum dolor sit amet</a></h2>
                  <div className="meta">
                    <a href=" "><i className="fa fa-pencil-square-o" />John Lee</a>
                    <a href=" "><i className="fa fa-calendar" />2 Days ago</a>
                    <a href=" "><i className="fa fa-comments" />12 Comments</a>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim niam.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
