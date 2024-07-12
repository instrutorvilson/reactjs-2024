import { useState } from "react"

export default function Cadastro(){
    const[nome, setNome] = useState('ana')
    const[email, setEmail] = useState('ana@gmail.com')

    function handleInserir(){
       let contato = {nome, email} 
       fetch('http://localhost:3000/contatos',
       {
         method: 'POST',
         headers: {'Content-Type':'Application/json'},
         body: JSON.stringify(contato) 
       })
    }
    return(
        <div>
            <h2>Novo contato</h2>
            <button onClick={handleInserir}>Inserir</button>
        </div>
    )
}