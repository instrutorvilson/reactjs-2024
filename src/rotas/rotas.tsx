import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/home'
import Cadastro from '../pages/cadastro'
import Consulta from '../pages/consulta'
import Login from '../pages/login'

const routes = createBrowserRouter([
    {
        path: '', element: <Home />,
        children:[
            {path:'cadastro', element: <Cadastro />},
            {path:'consulta', element: <Consulta />},
            {path:'login', element: <Login />}
        ]
    }
])
export default function Rotas() {
    return (
        <RouterProvider router={routes} />
    )
}