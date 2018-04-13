import React, { Component } from 'react';

import ProductDetail from '../components/ProductDetail';
import { productsRef } from './../firebase';

class ProductPage extends Component {
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

    return (
      <div>
        <div className="page-title fix">{/*Start Title*/}
          <div className="overlay section">
            <h2>Product Details</h2>
          </div>
        </div>{/*End Title*/}
        {/*Start Product Details Area*/}
        <ProductDetail product={this.state.product} />
        {/*End Product Details Area*/}
      </div>
    );
  }
}

export default ProductPage;
