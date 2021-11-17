import {useState} from "react";
import Header from "./header";
import Button from "./button";
function Counter() {
    const [counter,setCounter] = useState(0);
    const handleClick = (value) => {
        setCounter(counter+value);
    }
    return (
        <>
        <Header title="Counter"/>
        <Header title={counter}/>
        <Button title="Add" onClick={() => handleClick(1)}/>
        <Button title="Reduce" onClick={() => handleClick(-1)}/>
        </>
    )
}
export default Counter