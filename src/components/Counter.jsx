import { useState } from "react";

// Importera hooks från react-redux för att interagera med Redux-storen.
import { useSelector, useDispatch } from "react-redux";

// Importera action creators från counterSlice.
import { decrement, increment, incrementByAmount } from "../redux/counterSlice";

function Counter() {
  const [amount, setAmount] = useState(2);

  /*
  useSelector:
  - Används för att läsa data från Redux-storen.
  - I vårt fall hämtar vi räknarens aktuella värde.
  
  useDispatch:
  - Returnerar dispatch-funktionen som gör att vi kan skicka actions till storen.
  - Actions beskriver vilken uppdatering som ska göras på state.
*/

  // Hämta räknarens värde från state.
  const counterValue = useSelector((state) => state.counter.value);

  // Få tillgång till dispatch-funktionen.
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {counterValue}</h2>
      <button onClick={() => dispatch(increment())}>+ 1</button>
      <button onClick={() => dispatch(decrement())}>- 1</button>

      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          + {amount}
        </button>
      </div>
    </div>
  );
}

export default Counter;
