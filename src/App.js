import './App.css';
import UserContext from './contextos/loginContext';
import { useState } from 'react';
import Cadastro from './pages/cadastro';
import Consulta from './pages/consulta';
import Login from './pages/login';

function App() {
  const [user, setUser] = useState({nome:'maria', email:'maria@gmail.com'})

  function atualizarLogin(novoValor){
     setUser({...user, nome:novoValor})
  }

  return (
     <UserContext.Provider value={{user,atualizarLogin}}>
         <Cadastro />
         <Consulta />
         <Login />
     </UserContext.Provider>
  );
}

export default App;
