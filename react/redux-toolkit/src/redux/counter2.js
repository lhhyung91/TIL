import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   count: 0,
// };

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
export const { increment2, decrement2, incrementByAmount2 } =
  counterSlice2.actions;

export default counterSlice2.reducer;
