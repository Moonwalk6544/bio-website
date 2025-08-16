import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import 'bootstrap/dist/css/bootstrap.css'
import ListAbout from './Component/AboutSegment.tsx'
import Imager from './Component/Imager.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <ListAbout />
    <Imager />

  </StrictMode>,
)
