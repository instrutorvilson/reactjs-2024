import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './pages/home';
import CadUsuario from './pages/cadUsuario';
import CadContato from './pages/cadContato';
import ConsultaContatos from './pages/consultaContatos';
import Info from './pages/info';
import Login from './pages/login';
import EditaContato from './pages/editaContato';
import { useState } from 'react';

const routes = createBrowserRouter([
  {
    path:'', element:<Home />,
    children:[
      { path:'usuario/registrar', element: <CadUsuario /> }, 
      { path:'usuario/login', element:<Login /> },
      { path:'contato/cadastrar', element: <CadContato />},
      { path:'contato/consultar', element: <ConsultaContatos />},
      { path:'contato/consultar/:id', element: <EditaContato />},
      { path:'*', element:<Info />}            
    ]
  }
])

function App() {
  const [isLogged, setIslogged] = useState(localStorage.getItem('userLogado') != null)
   
  return (
   /* <BrowserRouter>
        <Routes>
           <Route path='' element={<Home /> } />
           <Route path='usuario/registrar' element={<CadUsuario />} />
           <Route path='usuario/login' element={<Login />} />
          
           <Route path='contato/cadastrar' element={<CadUsuario />}/>
           <Route path='contato/consultar' element={<ConsultaContatos />}/>

           <Route path='contato/consultar/:id' element={<EditaContato />}/>
           <Route path='*' element={<Info />} />
        </Routes>
    </BrowserRouter>*/
    <>      
      <RouterProvider router={routes}/>
    </>
  );
}

export default App;
