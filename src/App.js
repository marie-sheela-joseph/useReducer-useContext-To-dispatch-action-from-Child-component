import { useReducer, createContext } from "react";
import Counter from "./Counter";
import "./App.css";

const reducer = function (state, action) {
  switch (action.type) {
    case "INCREASE": return { ...state, count: state.count + 1 };
    case "DECREMENT": return { ...state, count: state.count - 1 };
    case "RESET": return { ...state, count: 0 };
    default: return state;
  }
}

const initialState = { count: 0 };
export const CountContext = createContext(null);
function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <section className="section counter">
      <div className="container">
        <h1 className="center">useReducer with useContext</h1>
        <h2 className="center">To dispatch action from Child component</h2>
        <p className="center">COUNT: {state.count}</p>
        <CountContext.Provider value={dispatch}>
          <Counter />
        </CountContext.Provider>
        <div className="d-flex logos">
          <div>
            <img src="/assets/useReducer.jpg" alt="useReducer" />
          </div>
          <div>
            <img src="/assets/useContext.jpg" alt="useContext" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default App;
