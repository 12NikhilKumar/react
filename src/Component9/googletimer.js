import {useState,useEffect,useRef} from 'react';
const Timer = () => {
    const [time,setTime] = useState({
        seconds:0,
        minutes:0
    })
    const handleChange = (e) => {
        setTime({...time,[e.target.name]: e.target.value});
    }
    const [milliseconds, setMilliseconds] = useState(0);
    const millisecondsRef = useRef(null)
    const StartTimer = () => {
        millisecondsRef.current = setInterval(()=>{
            setMilliseconds((prev)=>prev+1)
        }, 17)
    }
    if(milliseconds === 60 && time.seconds !== 0){
        time.seconds -= .5;
        setMilliseconds(0); 
    }
    if(time.minutes > 0){
        if(time.seconds === 0){
            time.minutes -= 1;
            time.seconds = 60;
            setMilliseconds("");
        }
    }
    useEffect(()=>{
        if(time.minutes === 0 && time.seconds === 0){
            clearInterval(millisecondsRef)
            millisecondsRef.current = null;
            time.minutes = 0;
            time.seconds = 0;
            setMilliseconds(0)
        }
    },time)
    return(
        <>
            <h1 style={{textAlign: 'center'}}>Timer</h1>
            <div style={{width:"500px", height:"170px",border:"1px solid black",backgroundColor:"white",color:"black",margin:"auto"}}>{time.minutes}:{time.seconds}:{milliseconds}</div>
            <input type="number" name="minutes" placeholder="enter your minutes" value={time.minutes} onChange={handleChange}/>
            <input type="number" name="seconds" placeholder="enter your seconds" value={time.seconds} onChange={handleChange}/>
            <br/>
            <button onClick={StartTimer}>Start Timer</button>
        </>
    )
}
export default Timer;