import {useState,useEffect,useRef} from "react";
const Stopwatch = () => {
    const [seconds,setSeconds] = useState(0);
    const [minutes,setMinutes] = useState(0);
    const [hours,setHours] = useState(0);
    const secondsRef = useRef(null);
    useEffect(()=>{
        return ()=>{
            clearInterval(secondsRef.current);
        }
    },[]);
    const startTimer = () => {
        if( seconds === 0){
            secondsRef.current = setInterval(() => {
                setSeconds((prev) => prev+1)
            }, 17);
        }
    }
    const pauseTimer = () => {
        clearInterval(secondsRef.current);
    };
    const resetTimer = () => {
        pauseTimer()
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    }
    if(seconds === 60){
        setSeconds(0);
        setMinutes((prev)=>prev+1)
    }
    if(minutes === 60){
        setMinutes(0);
        setHours((prev) => prev+1)
    }
    return (
        <>
            <h1 style={{textAlign: 'center'}}>Stopwatch</h1>
            <div style={{width:"500px", height:"170px",border:"1px solid black",backgroundColor:"white",color:"black",margin:"auto"}}>
                {hours}:{minutes}:{seconds}
                <br/>
            <button style={{ backgroundColor:"skyblue",marginTop:"100px",width:"150px",height:"25px"}} onClick={startTimer}>START</button>
            <button onClick={resetTimer}>RESET</button>
            </div>
        </>
    )
}
export default Stopwatch;