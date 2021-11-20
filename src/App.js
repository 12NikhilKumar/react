import './App.css';
import Giftcard from './Component3/giftcard'
function App() {
  return (
    <div className = "App App-header">
      <Giftcard date={"12/10/20"} title={"Amazon Gift"} subtitle={"Pay"} description={"Desktop-Mobile"} color={"orange"}/>
      <Giftcard date={"2/01/20"} title={"Apple Gift"} subtitle={"Pay"} description={"Desktop-Mobile"} color={"white"}/>
    </div>
  );
}

export default App;
