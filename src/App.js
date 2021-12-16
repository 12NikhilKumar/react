import './App.css';
import React from "react"
import { Appcontext } from './redux/reduxcontextprovoder';
import Counter from './count/counter';
function App() {
  const {getState} = React.useContext(Appcontext);
  const {count} = getState();
  return (
    <div className = "App App-header">
      <h1>hello</h1>
      <h2>{count}</h2>
      <Counter/>
    </div>
  );
}
export default App;
