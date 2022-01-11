import { configureStore } from "@reduxjs/toolkit";
// import { counterSlice } from "./counter";
import counterReducer from "./counter";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
