import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Dashboard from './components/DashBoard.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>hiiiiiiiiiiii</h1>
    <Dashboard />
  </StrictMode>
);
