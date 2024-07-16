import { useContext } from "react"
import LoginContext from "../contextos/loginContext"
import { ContextType, TUser } from "../types/tuser"

const Consulta = ()=>{
    const { user } = useContext<any>(LoginContext)
    return(
        <div style={{backgroundColor:'green'}}>
            <p>Consulta</p>
            <p>Nome:{user.nome}</p>
            <p>Email:{user.email}</p>
        </div>
    )
}
export default Consulta