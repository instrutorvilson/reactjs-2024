import { useContext } from "react"
import LoginContext from "../contextos/loginContext"

export default function Cadastro(){
    const  { user } = useContext<any>(LoginContext)
    return(
        <div style={{backgroundColor:'red'}}>
            <p>Cadastro</p>
            <p>Nome: {user.nome}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}