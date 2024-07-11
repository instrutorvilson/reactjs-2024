import Filho from "./filho"
export default function Pai(){
    
    function ola(msg){
        alert(ola)
    }
    
    return(
        <div>
            <h2>Componente pai</h2>
            <Filho msg="Olá filho" msgDoFilho={ola} />
            
        </div>
    )
    
}