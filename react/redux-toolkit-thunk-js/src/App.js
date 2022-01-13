import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTodos } from "./features/todoSlice";

function App() {
  const { data, error, loading, todos } = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  if (!data) return null;

  return (
    <div className='App'>
      <ul>
        {data.map(data => (
          <li key={data.id}>
            {data.id}
            {data.title}
            {data.completed}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
