import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { startAction, stopAction } from './actions/startActions';
import Home from './pages/home';
import Login from './pages/login';

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch => ({
  parar: () => dispatch({type:'rotate', payload: false}),
  girar: () => dispatch(startAction)
})

function App(props) {
  return (
    <Login />
    // <Home />
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo}
    //       className={"App-logo " + (props.rotating ? "" : "App-logo-paused")}
    //       alt="logo"
    //     />
    //     <button onClick={props.parar}>Parar</button>
    //     <button onClick={props.girar}>girar</button>
    //   </header>
    // </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
