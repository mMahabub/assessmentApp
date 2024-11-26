import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.createRoot(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
//     ,document.getElementById('root')).render()
// ReactDOM.createRoot(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
 
//     , document.getElementById('root')).render()