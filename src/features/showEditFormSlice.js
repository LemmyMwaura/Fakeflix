import { createSlice } from "@reduxjs/toolkit"

const showEditFormSlice = createSlice({
  name: "showEditForm",
  initialState: false,
  reducers: {
    toogleFormState: (state) => {
      return !state
    },
  },
})

export const { toogleFormState } = showEditFormSlice.actions
export default showEditFormSlice.reducer
