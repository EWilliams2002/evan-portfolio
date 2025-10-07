// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <App />
)

// still need to polish home screen and nav ui

// maybe can research on how to add cookies to react app for saving wordle states and theme switching