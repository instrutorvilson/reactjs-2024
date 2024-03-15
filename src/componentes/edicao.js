import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Edicao() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [fone, setFone] = useState("");
  const { idContato } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/contatos/${idContato}`)
      .then((response) => response.json())
      .then((data) => {
        setNome(data.nome);
        setEmail(data.email);
        setFone(data.fone);
      });
  }, []);

  function salvar() {
    if (!validarDados()){
        return
    }

    let contato = {
      id: idContato,
      nome: nome,
      email: email,
      fone: fone,
    };
    fetch(`http://localhost:3000/contatos/${idContato}`, {
      method: "PUT",
      body: JSON.stringify(contato),
    });
    //.then(response => navigate('/consulta') )
    navigate("/consulta");
  }

  function validarDados(){
    if(nome === ''){
       toast.error("O nome deve ser informado!");
       return false
    }
    if(email === ''){
        toast.error("O email deve ser informado!");
        return false
     }
     if(fone === ''){
        toast.error("O fone deve ser informado!");
        return false
     }
    return true
  }

  return (
    <div className="container">
      <h2 className="text-center">Editar contato: {idContato}</h2>
      <label className="form-label">Informe nome</label>
      <input
        className="form-control"
        type="text"
        placeholder="informe nome"
        value={nome}
        onChange={(txt) => setNome(txt.target.value)}
      />

      <label className="form-label">Informe email</label>
      <input
        className="form-control"
        type="email"
        placeholder="informe email"
        value={email}
        onChange={(txt) => setEmail(txt.target.value)}
      />

      <label className="form-label">Informe fone</label>
      <input
        className="form-control"
        type="text"
        placeholder="informe fone"
        value={fone}
        onChange={(txt) => setFone(txt.target.value)}
      />

      <div className="mt-3">
        <button className="btn btn-primary" onClick={salvar}>
          Gravar
        </button>
      </div>
    </div>
  );
}
