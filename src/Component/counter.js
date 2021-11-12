import {useState} from "react";
export default function Counter(value){
    const [counter, setCounter] = useState(0)
    const handleClick = (value) => {
        setCounter(counter+value)
    }
    return (
        <>
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <button onClick={()=>handleClick(1)}>add</button>
        </>
    )
}