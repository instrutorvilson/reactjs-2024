import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Consulta from './componentes/consulta'
import Cadastro from './componentes/cadastro'
import App from './App'
import Edicao from './componentes/edicao'
import DadosCard from './componentes/dadosCard'


const router = createBrowserRouter(
  [
     {
      path:'/', element: <App />,
        children:[
            { path:'/cadastro', element: <Cadastro /> },
            { path:'/consulta', element: <Consulta /> },
            { path:'/contato/:idcontato', element: <Edicao /> },
            { path:'consultacards', element: <DadosCard />}           
          ]
     },
     
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


