import './App.css';
import Button from './Component/Button';
import List from './Component/list.js';

function App() {
  return (
    <div className = "App App-header">
      <Button title = "A"/>
      <Button title = "B"/>
      <Button title = "C"/>
      <img src = {process.env.PUBLIC_URL + "/logo192.png"}/>
      <List/>
    </div>
  );
}

export default App;
