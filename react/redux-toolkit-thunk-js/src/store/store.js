import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import todosReducer from "../features/todoSlice";
import logger from "redux-logger";

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware,
});
