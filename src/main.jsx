import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className='font-bold text-4xl text-red-500 m-12 underline'>hii, Dhina</h1>
    <App />
  </StrictMode>,
)
