import { useState } from "react"
import { Link } from "react-router-dom"

export default function Cadastro() {
    const [nome, setNome] = useState('ana')
    const [email, setEmail] = useState('ana@gmail.com')

    function handleInserir() {
        let contato = { nome, email }
        fetch('http://localhost:3000/contatos',
            {
                method: 'POST',
                headers: { 'Content-Type': 'Application/json' },
                body: JSON.stringify(contato)
            })
    }

    function handleCancelar() {
        setNome('')
        setEmail('')
    }

    return (
        <>
            <header className="bg-primary p-3">
                <h1 className="text-center text-white">Agenda</h1>
            </header>
            <div className="col-sm-6 offset-sm-3">
                <h2 className="text-center bg-secondary p-2">Novo contato</h2>
                <div className="m-2">
                    <label htmlFor="nome">Informe nome</label>
                    <input
                        type="text"
                        placeholder="Informe nome"
                        id="nome"
                        className="form-control"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <label htmlFor="email">Informe email</label>
                    <input
                        type="text"
                        placeholder="Informe email"
                        id="email"
                        className="form-control"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="d-flex justify-content-around">
                    <button
                        onClick={handleInserir}
                        className="btn btn-primary"
                    >Inserir
                    </button>
                    <button
                        onClick={handleCancelar}
                        className="btn btn-danger"
                    >Cancelar</button>
                </div>
                <hr />
                <Link className="btn" to='/' >Home</Link>
                <Link className="btn" to='/consulta' >Consulta</Link>
            </div>
        </>
    )
}