import './App.css';
// import Add from './Component/add';
import Card from './Component/card';
function App() {
  return (
    <div className = "App App-header">
      <Card url="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Greek_pizza_%281%29.jpg/1200px-Greek_pizza_%281%29.jpg" title="Pizza" description="Loaded with Plant Based Protein topping along with Black Olives & Red Paprika enjoy this unique 100% Vegetarian pizza with a 100% Chicken like taste!" calories="265cal" price="$60" temp="35.8cel"/>
      <Card url="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Greek_pizza_%281%29.jpg/1200px-Greek_pizza_%281%29.jpg" title="idli" description="Loaded with Plant Based Protein topping along with Black Olives & Red Paprika enjoy this unique 100% Vegetarian pizza with a 100% Chicken like taste!" calories="265cal" price="$60" temp="35.8cel"/>
      <Card url="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Greek_pizza_%281%29.jpg/1200px-Greek_pizza_%281%29.jpg" title="dosa" description="Loaded with Plant Based Protein topping along with Black Olives & Red Paprika enjoy this unique 100% Vegetarian pizza with a 100% Chicken like taste!" calories="265cal" price="$60" temp="35.8cel"/>
    </div>
  );
}

export default App;
