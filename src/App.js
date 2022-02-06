//root component
//index is the entry: index --> App --> components, why do we need App.js?
import React, { Component } from 'react';
//import { Globalstyle } from './style.js';
import Header from './common/header/index.js';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return ( 
      // Provider provides the information in store to the inside components (Header)
        <Provider store={store}>
         
            
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/detail' element={<Detail />}></Route>
              </Routes>
            </BrowserRouter>
            
          
        </Provider> 
    );
  }
}

export default App;
