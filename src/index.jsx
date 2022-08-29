import React from 'react';
import reactDom from 'react-dom';
import App from './components/App';

const app = document.querySelector('.app');

reactDom.render(<App />, app);
