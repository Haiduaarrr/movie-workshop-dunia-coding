import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // fungsi dari .render adalah untuk memanggil fungsi App
  <StrictMode>
    <App />
  </StrictMode>,
)
