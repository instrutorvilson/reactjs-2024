import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Consulta from './componentes/consulta'
import Cadastro from './componentes/cadastro'
import App from './App'
import Edicao from './componentes/edicao'

const router = createBrowserRouter(
  [
     {
      path:'/', element: <App />,
        children:[
            {path:'/cadastro', element: <Cadastro />},
            {path:'/consulta', element: <Consulta />},
            {path:'/contato/:idContato', element: <Edicao />}            
            ]
     },
     
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


