import React from "react";
import {incrementCounter} from '../redux/action';
import {Appcontext} from '../redux/reduxcontextprovoder'
function Counter(){
    const {dispatch} = React.useContext(Appcontext);
    const handleIncrement = () => {
        const action = incrementCounter(1);
        dispatch(action);
    };
    return (
        <div>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}
export default Counter;