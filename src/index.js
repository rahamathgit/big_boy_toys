import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import "./App.css"
import ShopContextProvider from './Context/ShopContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ShopContextProvider>
        <App />
    </ShopContextProvider>
);
