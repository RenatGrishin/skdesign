import React from 'react';
import ReactDOM from 'react-dom';
import './fonts/style.css';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from "styled-components";
import store from './store/store'
import {Provider} from "react-redux";
import AppContainer from "./AppContainer";

const GlobalStyles = createGlobalStyle`*{
  margin: 0;
  padding: 0;
  font-family:'SF UI Display Light'
}`;

const rerenderReactDOM =(state)=>{
  ReactDOM.render(
  	<Provider store={store}>
      <GlobalStyles/>
      <AppContainer/>
	  </Provider>,
    document.getElementById('root')
  );
  reportWebVitals();
}

rerenderReactDOM();
store.subscribe(()=>{ rerenderReactDOM() })
