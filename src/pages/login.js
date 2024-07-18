import { useState } from "react"
import { connect } from "react-redux"
import dados from '../dados/dados'

const mapStateToProps = state =>({...state})

const mapDispatchToProps = dispatch => ({
    mudaEmail: (data) => dispatch({type:'alterarEmail', payload:data}),
    gerenciaLogar: (data) => dispatch({type:'logar', payload:data})
})



const Login = (props)=>{
    const[senha, setSenha] = useState('')

    function verificarUser(){
        let obj = dados.filter(user => user.email === props.email && user.senha === senha)[0]
        props.gerenciaLogar(obj)        
    }

    return(
        <div className="container">
            <label>Informe email</label>
            <input 
               className="form-control" 
               type="text" 
               placeholder="Informe email"
               value={props.user.email}
               onChange={e => props.mudaEmail(e.target.value)}
            />
            <label>Informe senha</label>
            <input 
               className="form-control" 
               type="password" 
               placeholder="Informe senha"
               value={senha}
               onChange={e => setSenha(e.target.value)}
            />

         <button onClick={verificarUser}>Logar</button>
         <label>Perfil: {props.perfil}</label>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)