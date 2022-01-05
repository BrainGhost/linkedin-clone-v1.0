import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../features/counter/modalSlice";
import userReducer from "../features/counter/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
  },
});
