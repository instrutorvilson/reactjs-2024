import { connect } from "react-redux"

const mapStateToProps = state => ({...state})

const mapDispatchToProps = dispatch => ({
    tornarVermelho: ()=> dispatch({type:'mudacor', payload:'red'}),
    tornarVerde: ()=> dispatch({type:'mudacor', payload:'green'}),
    tornarAmarelo: ()=> dispatch({type:'mudacor', payload:'yellow'})
})

const Home = (props) => {
    return(
        <div style={{backgroundColor:props.cor}}>
            <button onClick={props.tornarVermelho}>vermelho</button>
            <button onClick={props.tornarVerde}>verde</button>
            <button onClick={props.tornarAmarelo}>amarelo</button>            
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)