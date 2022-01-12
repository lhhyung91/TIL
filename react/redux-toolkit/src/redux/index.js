import { combineReducers } from "redux";
// export default로 내보내면 이름을 마음대로 정할 수 있다.
import couunter1 from "./counter";
import counter2 from "./counter2";

const rootReducer = combineReducers({
  counter1: couunter1,
  counter2: counter2,
});

export default rootReducer;
