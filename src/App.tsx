import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ComponentsPage } from './pages/ComponentsPage'
import { MarketplacePage } from './pages/MarketplacePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MarketplacePage />} />
        <Route path="/components" element={<ComponentsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
