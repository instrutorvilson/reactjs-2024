import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import CadUsuario from './pages/cadUsuario';
import CadContato from './pages/cadContato';
import ConsultaContatos from './pages/consultaContatos';
import Info from './pages/info';
import Login from './pages/login';
import EditaContato from './pages/editaContato';

function App() {
  return (
    <BrowserRouter>
        <Routes>
           <Route path='' element={<Home /> } />
           <Route path='usuario/registrar' element={<CadUsuario />} />
           <Route path='usuario/login' element={<Login />} />
           <Route path='contato/cadastrar' element={<CadContato />}/>
           <Route path='contato/consultar' element={<ConsultaContatos />}/>
           <Route path='contato/consultar/:id' element={<EditaContato />}/>
           <Route path='*' element={<Info />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
