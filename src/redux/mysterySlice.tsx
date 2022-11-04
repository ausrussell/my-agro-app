import { createSlice } from "@reduxjs/toolkit";

interface MysteryState {
  clickCounter: number
}

const initialState: MysteryState = {
  clickCounter: 0
}

const mysterySlice = createSlice({
  name: "mystery",
  initialState,
  reducers: {
    mysteryClick(state) {
      state.clickCounter += 1;
    },
  },
});

export const { mysteryClick } = mysterySlice.actions;
export default mysterySlice.reducer;
