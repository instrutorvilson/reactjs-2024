import { useContext } from "react";
import UserContext from "../contextos/userContext";
import { Link } from "react-router-dom";

{/*export default function Component3(props) {
    return (
      <>
        <h1>{`Componente3: ${props.user}!`}</h1>
      </>
    );
  }*/
}
export default function Component3() {
  const { nome, idade } = useContext(UserContext)
  return (
    <>
      <h1>Componente3</h1>
      <h1>{`Nome: ${nome}!`}</h1>
      <h1>{`Idade: ${idade}!`}</h1>
      <hr />
      <Link to='/'>Voltar</Link>
    </>
  );
}
