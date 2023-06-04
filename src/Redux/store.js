// import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";

const ADD = "ADD";

export const addMessage = (message) => {
  return {
    type: ADD,
    message: message,
  };
};

const messageReducer = (state = { message: [], count: 0 }, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, message: [...state.message, action.message] };
    default:
      return state;
  }
};

export const store = createStore(messageReducer);
