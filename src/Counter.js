import { useContext } from "react";
import { CountContext } from "./App";

function Counter() {
    const countC = useContext(CountContext);
    const incrementCount = function () {
        countC({ type: "INCREASE" });
    }
    const decrementCount = function () {
        countC({ type: "DECREMENT" });
    }
    const resetCount = function () {
        countC({ type: "RESET" });
    }
    return (
        <div className="center" >
            <button onClick={incrementCount}>INCREMENT</button>
            <button onClick={decrementCount}>DECREMENT</button>
            <button onClick={resetCount}>RESET</button>
        </div>
    );
}
export default Counter;