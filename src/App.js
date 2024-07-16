import logo from './logo.svg';
import './App.css';
import { useReducer} from 'react'

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch(action.type){
    case "COMPLETE":
    return state.map(todo => {
       if(todo.id === action.id){
         return {...todo, complete: !todo.complete}
       }
       else
         return todo
    })
    case "UPPER":
    return state.map(todo => {
       if(todo.id === action.id){
         return {...todo, title: todo.title.toUpperCase()}
       }
       else
         return todo
    })
    default:
      return state
  }
}

function App() {
  const[todos, dispatch] = useReducer(reducer, initialTodos)
  
  function handleComplete(todo) {
    dispatch({type: "COMPLETE", id: todo.id})
  }

  return (
    <div className="App">
      <button onClick={() => dispatch({type:"UPPER", id: 1})}>Uper</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={()=>handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </div>
  );
}

export default App;
