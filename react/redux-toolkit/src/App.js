import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/counter";
import { decrement2, increment2 } from "./redux/counter2";

function App() {
  // const count = useSelector(state => state.counter.count);
  const count1 = useSelector(state => state.counter1.count);
  const count2 = useSelector(state => state.counter2.count);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h1>카운터1</h1>
        <button
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count1}</span>
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>
        <h1>카운터2</h1>
        <button
          aria-label='Increment value'
          onClick={() => dispatch(increment2())}
        >
          Increment
        </button>
        <span>{count2}</span>
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(decrement2())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
