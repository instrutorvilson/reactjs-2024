import React, { useState } from 'react';
import './App.css';
import LoginContext from './contextos/loginContext';
import Cadastro from './pages/cadastro';
import Consulta from './pages/consulta';
import { TUser } from './types/tuser';
import Login from './pages/login';
import Rotas from './rotas/rotas';


function App() {
  const[user, setUser] = useState<TUser>({nome:'maria',email:'maria@gmail'})
  
  function atualizaLogin(novoUser:TUser){
    setUser({...user, nome:novoUser.nome, email: novoUser.email})
  }
  
  return (
    <LoginContext.Provider value={{user, atualizaLogin}}>
       {/* <Cadastro />
        <Consulta />
         <Login />*/}
      <Rotas />
    </LoginContext.Provider>
  );
}

export default App;
