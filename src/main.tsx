import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Landing from './pages/Landing/Landing.tsx';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode> 
      <Landing />
    </StrictMode>

);
