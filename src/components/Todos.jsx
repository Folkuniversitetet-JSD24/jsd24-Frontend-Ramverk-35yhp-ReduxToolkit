import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { addTodo, toggleTodo, removeTodo } from "../redux/todosSlice";

function Todos() {
  const [text, setText] = useState("");

  const todos = useSelector((state) => state.todos.items);

  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div>
      <h2>Todo List</h2>

      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Skriv in din påminnelse..."
        />
        <button type="submit">Lägg till påminnelse</button>
      </form>

      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id} onClick={() => dispatch(toggleTodo(todo.id))}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}{" "}
              </span>
              <button
                type="button"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Ta bort påminnelse
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todos;
