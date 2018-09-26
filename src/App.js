import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  
  componentDidMount(){

  }
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder /> 
        </Layout>
      </div>
    );
  }
}

export default App;

//https://github.com/gitrkaplan/react-burger-builder/blob/master/src/components/Burger/BuildControls/BuildControl/BuildControl.js