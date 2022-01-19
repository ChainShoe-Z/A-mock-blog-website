//root component
//index is the entry: index --> App --> components, why do we need App.js?
import React, { Component } from 'react';
import { Globalstyle } from './style.js';
import Header from './common/header/index.js';

class App extends Component {
  render() {

    return (
      <div>
        <Header />
        <Globalstyle />
      </div>
    );
  }
}

export default App;
