import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Path from './path.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Path />
  </StrictMode>,
  
)
