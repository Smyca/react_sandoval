import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider , createHashRouter} from 'react-router-dom';
import ServiciosPage from './pages/ServiciosPage.jsx';
import SerasContactado from './pages/SerasContactado.jsx';  

const router = createBrowserRouter([
  { path: "/" , element: <App/>},
  { path: "/servicios" , element: <ServiciosPage/>},
  { path: "/seras-contactado" , element: <SerasContactado />} 

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
