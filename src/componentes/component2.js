import { useContext } from "react";
import Component3 from "./componente3";
import UserContext from "../contextos/userContext";
import { Link } from "react-router-dom";

export default function Component2(props) {
   const {nome, idade} = useContext(UserContext)
    return (
      <>
        <h1>Componente2</h1>
        <h1>{`Nome: ${nome}!`}</h1>
        <h1>{`Idade: ${idade}!`}</h1>
        <hr />
      <Link to='/'>Voltar</Link>
      </>
    );
  }