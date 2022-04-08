import React from 'react';
import ReactDOM from 'react-dom/client';
import { StateContextProvider } from './context/StateContextProvider';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<StateContextProvider>
    <Router>
        <App />
    </Router>    
</StateContextProvider>);