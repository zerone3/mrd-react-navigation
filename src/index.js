import * as React from 'react';
import ReactDOM from 'react-dom/client';
// Import BrowserRouter untuk bisa menggunakan router
import { BrowserRouter } from 'react-router-dom';
// import './index.css';
import App from './App';
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Gunakan BrowserRouter di sini */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
