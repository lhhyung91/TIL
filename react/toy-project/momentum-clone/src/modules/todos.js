// 액션 (이름만 생성)
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

// 디스패치 액션 생성 함수 ( 액션 자체임)
let nextId = 1;

export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

// 초깃 값
const initialStete = [
  // {
  //   id: null,
  //   text: null,
  //   done: false,
  // },
];

// 리듀서
export default function todos(state = initialStete, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );

    default:
      return state;
  }
}
