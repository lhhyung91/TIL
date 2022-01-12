import { createSlice } from "@reduxjs/toolkit";

// 초깃 값 설정
// const initialState = {
//   count: 0,
// };

// reducer 생성
export const counterSlice2 = createSlice({
  name: "counter2",
  initialState: {
    count: 0,
  },
  reducers: {
    increment2: state => {
      state.count += 1;
    },
    decrement2: state => {
      state.count -= 1;
    },
    incrementByAmount2: (state, action) => {
      state.count += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
// counterSlice2에 대한 액션을 생성해준다.
export const { increment2, decrement2, incrementByAmount2 } =
  counterSlice2.actions;

// 리듀서를 내보낸다.
export default counterSlice2.reducer;
