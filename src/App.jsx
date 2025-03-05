import "./App.css";
import Counter from "./components/Counter";
import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <h1>Min counter app</h1>
      <Counter />
      <br />
      <Todos />
    </div>
  );
}

export default App;
