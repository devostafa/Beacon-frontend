import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import IndexPage from './views/pages/indexPage'
import SettingsPage from './views/pages/settingPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/settings" element={<SettingsPage/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
