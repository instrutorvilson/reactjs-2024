import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'

export default function DadosCard() {
    const navigate = useNavigate()
    const [lista, setLista] = useState([])
    
    useEffect(() => { consultar() }, [lista])

    async function consultar() {
        let response = await fetch('http://localhost:3000/contatos')
        let dados = await response.json()
        setLista(dados)
    }
    async function excluir(idcontato){
        await fetch(`http://localhost:3000/contatos/${idcontato}`,{
            method: 'DELETE'
        })

        toast.info('Contato excluído com sucesso')        
    }
    return (
        <div>
            <h2 className="text-center">Cards</h2>

            <div className="d-flex  flex-wrap">
                {lista.map(ct =>
                    <Card className="m-3" sx={{ width: '400px' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5"> Contato: {ct.id} </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <p>Nome: {ct.nome}</p>
                                <p>Email: {ct.email}</p>
                                <p>Fone: {ct.fone}</p>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small' color='primary'
                                onClick={() => navigate(`/contato/${ct.id}`)}>Editar</Button>
                            <Button size='small' color='secondary'
                              onClick={() => excluir(ct.id)}
                            >Excluir</Button>
                        </CardActions>
                    </Card>)
                }
            </div>
        </div>
    )
}