import React from 'react';
import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from './components/Header';
import { Orders } from './components/Orders';

// react fragment
export function App() {
  return(
    <React.Fragment>
      <GlobalStyles />  
      <Header />
      <Orders />
    </React.Fragment>
  );
};

