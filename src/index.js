import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Lexend Zetta:400', 'sans-serif']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
