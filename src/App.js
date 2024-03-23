import logo from './logo.svg';
import './App.css';
import Component1 from './componentes/componente1';
import UserContext from './contextos/userContext';
import { useState } from 'react';
import Component3 from './componentes/componente3';
import Component2 from './componentes/component2';
import Rotas from './componentes/rotas';

function App() {
  const[nome, setNome] = useState('maria')
  const[idade, setIdade] = useState(25)
  return (
    <UserContext.Provider value={{nome, idade}}>
       {/* <Component3 />
        <Component2 />
        <Component1 />*/}
        <Rotas />
    </UserContext.Provider>
  );
}

export default App;
