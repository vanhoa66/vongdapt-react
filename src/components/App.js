import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import routes from './../route-config';
import Header from './Header';
import Footer from './Footer';
import Notify from './Notify';
// import Support from './Support';
// import Brand from './Brand';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Notify />
          {this.showRoute(routes)}
          {/* <Brand /> */}
          {/* <Support /> */}
          <Footer />
        </div>
      </Router>
    );
  }
  showRoute(routes) {
    let xhtml = null;

    if (routes.length > 0) {
      xhtml = routes.map((route, index) => {
        return (
          <Route key={index} exact={route.exact} path={route.path} component={route.main} />
        );
      });
    }

    return <Switch>{xhtml}</Switch>;
  }
}

export default App;
