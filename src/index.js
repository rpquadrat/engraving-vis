import React from 'react';
import ReactDOM from 'react-dom/client';
import Visualizer from './components/Visualizer';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('app-root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <Visualizer root={rootElement} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
