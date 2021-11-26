import {useState,useEffect,useRef} from 'react';
const Stopwatch = ()=>{
    const [time,setTime] = useState(0);
    const timeRef = useRef(null);
    useEffect(()=>{
        return ()=>{
            clearInterval(timeRef.current);
        }
    },[]);
    const startTimer = () => {
        timeRef.current = setInterval(()=>{
            setTime((prev)=>prev+1);
        },1000)
    }
    const pauseTimer = () => {
        clearInterval(timeRef.current);
    };
    const resetTimer = () => {
        pauseTimer()
        setTime(0);
    }
    return (
        <>
            <h1>Stopwatch</h1>
            <h3>{time}</h3>
            <button onClick={startTimer}>startTimer</button>
            <button onClick={pauseTimer}>pauseTimer</button>
            <button onClick={resetTimer}>Reset</button>
        </>
    )
};
export default Stopwatch