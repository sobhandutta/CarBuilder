import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

class App extends Component {
  
  componentDidMount(){
  }

  render() {
    return (
      <div>
        <Layout>
          <Switch> {/* Switch is not needed if exact is used, but added both here for demenstation purpose */}
            {/* BrowserRouter is added in index.js */}
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/checkout/contact-data" component={BurgerBuilder} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

//https://github.com/gitrkaplan/react-burger-builder/blob/master/src/components/Burger/BuildControls/BuildControl/BuildControl.js