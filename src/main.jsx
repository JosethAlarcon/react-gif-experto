import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GifExpertoApp } from './GifExpertoApp.jsx'

import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertoApp />
  </StrictMode>,
)
