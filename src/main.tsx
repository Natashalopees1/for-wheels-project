import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home.tsx';
import GlobalStyle from './global-styled.ts'
import Contato from './pages/contato/Contato.tsx';
import Participantes from './pages/participantes/Participantes.tsx';
import Sobre from './pages/sobre/Sobre.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contato' element={<Contato/>}/>
        <Route path='/participantes' element={<Participantes/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path="*" element={<Navigate to="/home" />} />



      </Routes>
    </BrowserRouter>
    <GlobalStyle/>
  </StrictMode>,
)
