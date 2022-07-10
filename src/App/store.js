import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../features/userSlice"
import modalReducer from "../features/modalSlice"
import showEditFormReducer from "../features/showEditFormSlice"

const store = configureStore({
  reducer: {
    user: userReducer,
    modal:modalReducer,
    showEditForm:showEditFormReducer,
  },
})

export default store
