import React, {useState, useEffect, useReducer} from 'react'
import ReactDOM from 'react-dom'

//actionTypes
const ActionType = {
  INCREASE: "INCREASE",
  DECREASE : "DECREASE"
}

// actions
const INCREASE = (value) => ({
  type: ActionType.INCREASE,
  payload: {
    value
  }
})
const DECREASE = (value) => ({
  type: ActionType.DECREASE,
  payload: {
    value
  }
})

const initialState = {
  count: 0
}


console.log(ActionType.INCREASE)






const reducer = (state, action) => {

  switch (action.type) {
    case ActionType.INCREASE:
    return {count: state.count + action.payload.value}
    case ActionType.DECREASE:
    if( state.count > 0) {
      return {count: state.count - action.payload.value} 
    } else {
      return state
    }
    default:
     return state
  }

}






const friendList = [
  { id: 1, name: 'Phoebe' },
  { id: 2, name: 'Rachel' },
  { id: 3, name: 'Ross' },
];


const App = () => {


  const [state, dispatch] = useReducer(reducer, initialState)
  const [receipentId, setReceipentId] = useState(1)

  useEffect(() => {
    document.title = `You clicked ${state.count} times`
  }, [state.count])

  return (
    <div style={{marginLeft: '30px'}}>
      <h1>Novamarks</h1>
  <p>receipentId: { receipentId }</p>
      <p>
       You clicked {state.count} times
      </p>
      <button onClick={() => dispatch({type: ActionType.INCREASE, 
        payload: {value: 1}})}
        >
        Push
        </button>
      <button onClick={() => dispatch({type: ActionType.DECREASE, 
        payload: {value: 1}})}
        >
        Pull
        </button>
<div>
  
        <select value={receipentId} name="" id="" onChange={e => setReceipentId(e.target.value)}>
  {friendList.map(fr => <option key={fr.id} value={fr.id}>{ fr.name} </option>)}
        </select>
</div>

    </div>
  )
}



ReactDOM.render(<App/>, document.querySelector('#app'))