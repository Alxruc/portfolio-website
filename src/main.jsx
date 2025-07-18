import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CanvasBuilder from './canvasBuilder.jsx'
import ContentBuilder from './content.jsx'
import "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContentBuilder />
  </StrictMode>,
)
