import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalIsOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    openModal: (state) => {
      state.modalIsOpen = true;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    closeModal: (state) => {
      state.modalIsOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const selectModalIsOpen = (state) => state.modal.modalIsOpen;

export default modalSlice.reducer;
