import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import 'bootstrap/dist/css/bootstrap.css'
import ListAbout from './Component/AboutSegment.tsx'
import Home from './Component/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
    <ListAbout />
  </StrictMode>,
)
