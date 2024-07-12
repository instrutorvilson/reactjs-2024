import Consulta from "./consulta";
import { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Cardcontato from "./cardContato";

export default function Cadastro() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [contatoAlterar, setContatoAlterar] = useState(null)
   

    const refNome = useRef(null)
    const refEmail = useRef(null)

    const [contatos, setContatos] = useState([
        { nome: 'maria', email: 'maria@gmail.com' },
        { nome: 'joao', email: 'joao@gmail.com' },
        { nome: 'antonio', email: 'antonio@gmail.com' }])

    {/*  var contatos = [
    {nome:'maria',email:'maria@gmail.com'},
    {nome:'joao',email:'joao@gmail.com'},
    {nome:'antonio',email:'antonio@gmail.com'},
    {nome:'Pedro',email:'pedro@gmail.com'},
    {nome: 'teste', email:'teste@gmail.com'}
 ]*/}

   function handleEditar(contato){
      setNome(contato.nome)
      setEmail(contato.email)
      setContatoAlterar(contato)
   }

   function handleExcluir(contato){
      let cts = contatos.filter(ct => ct.email != contato.email)
      setContatos(cts)
   }

    function gravar() {
        if (nome == '') {
            //alert('O nome deve ser informado')
            toast('O nome deve ser informado')
            refNome.current.focus()
            return
        }

        if (email == '') {
            toast('O email deve ser informado')
            refEmail.current.focus()
            return
        }

        if(contatoAlterar != null){
          let updateContato = contatos.find(ct => ct.email == contatoAlterar.email) 
          updateContato.nome = nome
          updateContato.email = email
          setContatoAlterar(null)
        }else{
            let novoContato = { nome, email }
            setContatos([...contatos, novoContato])
        }
        

        setNome('')
        setEmail('')
    }

    return (
        <div>
            <h2 className="text-center">Novo contato</h2>
            <label>Informe nome</label>
            <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="form-control"
                type='text'
                placeholder="informe nome"
                ref={refNome}
            />

            <label>Informe Email</label>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                type='email'
                placeholder="informe email"
                ref={refEmail}
            />

            <button onClick={gravar} className="btn btn-primary mt-2">Gravar</button>

            <Consulta dados={contatos} xpto="não sei de nada" />
            <ToastContainer
                position="bottom-center"
                autoClose="5000"
                pauseOnHover="true"
                theme="dark"
            />

            <hr />
            <h2>Contato em cartões</h2>
            <div className="d-flex flex-wrap">
                {
                    contatos.map(ct => <Cardcontato 
                        contato={ct} 
                        onEditar={handleEditar} 
                        onExcluir={handleExcluir}
                        />)
                }
            </div>
        </div>
    )
}