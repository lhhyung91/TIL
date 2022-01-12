import { combineReducers } from "redux";
import couunter1 from "./counter";
// import { counterSlice2 } from "./counter2";
import counter2 from "./counter2";

const rootReducer = combineReducers({
  counter1: couunter1,
  counter2: counter2,
});

export default rootReducer;
