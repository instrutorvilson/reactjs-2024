import { useContext } from "react"
import UserContext from "../contextos/loginContext"

export default function Consulta(){
    const {user} = useContext(UserContext)
    return(
        <div style={{backgroundColor: 'green'}}>
            <p>consulta</p>
            <p>Usuario conectado: {user.nome}</p>
            <p>Usuario conectado: {user.email}</p>
        </div>
    )
}