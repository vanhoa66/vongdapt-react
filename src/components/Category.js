import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Category extends Component {

  render() {
    let { category } = this.props;
    return (
      <li><Link to="/">{category.name}</Link></li>
    );
  }
}

export default Category;
