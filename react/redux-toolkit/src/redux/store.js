import { configureStore } from "@reduxjs/toolkit";
// import { counterSlice } from "./counter";
// import counterReducer from "./counter";
import rootReducer from "./index";

export const store = configureStore({
  reducer: rootReducer,
  // {
  //   counter: counterReducer,
  // }
});
