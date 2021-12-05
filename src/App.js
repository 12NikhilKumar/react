import './App.css';
import React from "react"
import Navbar from './Component14/router';
import AllRoutes from './routes/Allroutes'
function App() {
  return (
    <div className = "App App-header">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
