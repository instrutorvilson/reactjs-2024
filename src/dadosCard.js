import { Avatar, Button, Card, CardActions, CardContent } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

export default function DadosCard() {
    const navigate = useNavigate()
    const [lista, setLista] = useState([]) //mantem o estado do componente
    useEffect(() => { consultar() }, []) //executado toda vez que o componente é inicializado, ou sofre alteraçaõ de estado

    async function consultar() {
        let response = await fetch('http://localhost:3000/contatos')
        let dados = await response.json()
        setLista(dados)
    }

    function navega(){
        alert('cd')
    }
    return (
        <div>
            <h2>Card de contato</h2>

            {
                lista.map(ct =>
                    <Card className="m-3">
                        <CardContent>
                            <Avatar
                                alt="Jack Sparrow"
                                src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            />
                            <p>Nome: {ct.nome}</p>
                            <p>Email: {ct.email}</p>
                            <p>Fone: {ct.fone}</p>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" 
                              onClick={() => {navigate(`/contato/${ct.id}`)}}>
                                Salvar
                            </Button>
                            <Button size="small" color="secondary" 
                              onClick={() => { alert('clicado') }}
                            >
                                Excluir
                            </Button>
                            
                        </CardActions>
                    </Card>)
            }
        </div>
    )
}

//https://react.school/material-ui/paper