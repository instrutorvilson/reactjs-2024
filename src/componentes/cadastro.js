import Consulta from "./consulta";
import { useState } from 'react'

export default function Cadastro(){
  const [nome, setNome]  = useState('')

  const[contatos, setContatos] = useState([
        {nome:'maria',email:'maria@gmail.com'},
        {nome:'joao',email:'joao@gmail.com'},
        {nome:'antonio',email:'antonio@gmail.com'}])
  
  {/*  var contatos = [
    {nome:'maria',email:'maria@gmail.com'},
    {nome:'joao',email:'joao@gmail.com'},
    {nome:'antonio',email:'antonio@gmail.com'},
    {nome:'Pedro',email:'pedro@gmail.com'},
    {nome: 'teste', email:'teste@gmail.com'}
 ]*/}

   function gravar(){
     let novoContato = {nome, email:'teste@gmail.com'}
     setContatos([...contatos,novoContato])
   }

    return(
        <div>
            <h2 className="text-center">Novo contato</h2>
            <label>Informe nome</label>
            <input 
                   value={nome}
                   onChange={(e)=>setNome(e.target.value)}
                   className="form-control" 
                   type='text' 
                   placeholder="informe nome" />
            
            <label>Informe Email</label>
            <input className="form-control" type='email' placeholder="informe email" />

            <button onClick={gravar} className="btn btn-primary mt-2">Gravar</button>
            
            <Consulta dados={contatos} xpto="não sei de nada"/>
        </div>
    )
}