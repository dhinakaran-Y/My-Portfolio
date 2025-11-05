import { createRoot } from 'react-dom/client'
import { HashRouter , Route, Router ,Routes } from 'react-router-dom'
import MainLayout from './assets/layouts/MainLayout'
import HomePage from './assets/pages/HomePage'
import AboutPage from './assets/pages/AboutPage'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='about' element={<AboutPage/>}/>
      </Route>
    </Routes>
  </HashRouter>
)