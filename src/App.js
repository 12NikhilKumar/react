import './App.css';
import {Navbar} from "./Component12/navbar"
import React from "react"
import {Appcontext} from './Context/context'
function App() {
  const {theme} = React.useContext(Appcontext);
  return (
    <div style={{ background:`${theme}`}} className = "App App-header">
      <Navbar/>
    </div>
  );
}

export default App;
