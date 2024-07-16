import { useContext } from "react"
import UserContext from "../contextos/loginContext"

export default function Cadastro(){
    const {user} = useContext(UserContext)
    return(
        <div style={{backgroundColor: 'red'}}>
            <p>Cadastro</p>
            <p>Usuario conectado: {user.nome}</p>
            <p>Usuario conectado: {user.email}</p>
        </div>
    )
}