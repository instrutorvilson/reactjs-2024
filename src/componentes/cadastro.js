import { useEffect, useRef, useState } from "react"
import { Link, Navigate, useNavigate} from "react-router-dom"

export default function Cadastro(){
    const[nome, setNome] = useState('')
    const[idade, setIdade] = useState('')

    const  navigate = useNavigate()

    const nomeRef = useRef(null)
    function handleGravar(){
       if(nome === ''){
          alert('Informe nome')
          nomeRef.current.focus()
          return
       }

       if(idade === ''){
        alert('Informe idade')
     }
    }

    useEffect(()=>{
        console.log(localStorage.getItem('userLogado') === null)
        if(localStorage.getItem('userLogado') === null){
           {/*<Navigate to='login' />*/}
           navigate('../login')
        }
    },[])

    return(
        <>
        <div>
            <input type="text" 
                  ref={nomeRef}
                  placeholder="informe nome" 
                  value={nome}
                  onChange={tecla => setNome(tecla.target.value)}
                />
            <input type="number" placeholder="informe idade" />
            <button onClick={handleGravar}>Clique aqui</button>

            <hr />
            <span>{nome}</span>
        </div>
        <hr />
      <Link to='/'>Voltar</Link>
      </>
    )
}