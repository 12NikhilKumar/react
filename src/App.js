import './App.css';
import React from "react"
import CartcontextProvider from './Cartcontext/cartcontext';
import CardDetails from './Component15/carddetails';
import Navbar from './Component15/navbar';
import Cartroute from './cartroutes/cartroutes';
function App() {
  return (
    <div className = "App App-header">
      <CartcontextProvider>
        <Navbar/>
        <Cartroute/>
      </CartcontextProvider>
    </div>
  );
}

export default App;
