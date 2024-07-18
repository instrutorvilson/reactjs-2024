import { createStore } from "redux";
import rotateReducer from "../reducers/rotateReducer";

function configureStore(state = {
      rotating: true,  
      cor:'red', 
      user:{ email:'', nome:'',perfil:''}
    }){
    return createStore(rotateReducer, state)
}

export default configureStore