import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.jsx'
import HomePage from './pages/Home.jsx'
import AhePage from './pages/Ahe.jsx'
import EnglishPage from './pages/English.jsx'
import SempoaPage from './pages/Sempoa.jsx'
import SchoolPage from './pages/School.jsx'
import ScrollToTop from './variants/ScrollToTop.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/school',
    element: <SchoolPage/>
  },
  {
    path: '/english',
    element: <EnglishPage/>
  },
  {
    path: '/sempoa',
    element: <SempoaPage/>
  },
  {
    path: '/ahe',
    element: <AhePage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
