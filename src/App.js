import './App.css';
import {useState} from "react";
import Timer from './Component9/googletimer';
import Stopwatch from './Component9/googlestopwatch';
function App() {
  const [isLoading,setLoading] = useState(false);
  const handleClick = ()=>{
    setLoading(!isLoading);
  }
  return (
    <div className = "App App-header">
    {isLoading ?(<Timer/>):(<Stopwatch/>)}
    <button onClick={handleClick}>Change</button>
    </div>
  );
}

export default App;
