export default function Filho( props ){
    function handleMsgdoFilho(){
        props.msgDoFilho('ola pai')
    }
    return(
        <div>
           <h2>Componente filho</h2> 
           <p>Mensagem do pai:{props.msg}</p>
           <button onClick={handleMsgdoFilho}>ola</button>
        </div>
    )
    
}