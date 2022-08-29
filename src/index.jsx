import React from 'react';
import reactDom from 'react-dom';
import App from './components/App.jsx';

const app = document.querySelector('.app');

reactDom.render(<App />, app);
