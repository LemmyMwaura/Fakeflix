import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../features/userSlice"
import modalReducer from "../features/modalSlice"

const store = configureStore({
  reducer: {
    user: userReducer,
    modal:modalReducer,
  },
})

export default store
