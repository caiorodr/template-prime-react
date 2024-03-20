import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'primeflex/primeflex.css'; 
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-dark-purple/theme.css'; // Importe o tema "nova"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
