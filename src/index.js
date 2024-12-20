import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbarr';

import { ThemeProvider } from 'next-themes';
import TestF from './components/footer/TestF';
import Scroll from './components/scroll/Scroll';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ThemeProvider attribute="class">
  <BrowserRouter>
    <Navbar/>
    <App />
    <TestF/>
    <Scroll/>
  </BrowserRouter>
  </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
