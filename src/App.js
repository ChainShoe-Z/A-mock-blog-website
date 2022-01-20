//root component
//index is the entry: index --> App --> components, why do we need App.js?
import React, { Component } from 'react';
import { Globalstyle } from './style.js';
import Header from './common/header/index.js';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return ( 
      // Provider provides the information in store to the inside components (Header)
        <Provider store={store}> 
          <Header />

          {/* do i need this to use global style????????????????????????????? */}
          <Globalstyle /> 

        </Provider> 
    );
  }
}

export default App;
