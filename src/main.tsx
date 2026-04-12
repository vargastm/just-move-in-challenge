import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { ComponentsPage } from './pages/ComponentsPage'

const path = window.location.pathname
const showComponentsPage =
  path === '/components' || path.endsWith('/components')

createRoot(document.getElementById('root')!).render(
  <StrictMode>{showComponentsPage ? <ComponentsPage /> : <App />}</StrictMode>,
)
