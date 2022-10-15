import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.component';

const root = ReactDOM.createRoot(document.querySelector('#root') as Element);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)