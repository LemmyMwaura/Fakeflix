import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  movie: null,
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
    setMovie: (state, action) => {
      state.movie = action.payload;
    }
  }
})

export const { toggleModal, setMovie } = modalSlice.actions;
export default modalSlice.reducer;
