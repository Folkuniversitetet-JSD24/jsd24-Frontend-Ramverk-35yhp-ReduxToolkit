import "./App.css";
import Counter from "./components/Counter";
import Todos from "./components/Todos";
import PostsList from "./components/PostsList";

function App() {
  return (
    <div>
      <h1>Min counter app</h1>
      <Counter />
      <br />
      <Todos />
      <br />
      <PostsList />
    </div>
  );
}

export default App;
