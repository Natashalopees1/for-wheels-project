import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.tsx';
import GlobalStyle from './global-styled.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    <GlobalStyle/>
  </StrictMode>,
)
