import { ADD_TODO, UPDATE_TODO } from "../constants/action-types";

function rootReducer(state = [], action) {
  if (action.type === ADD_TODO) {
    const ar = [...state, action.payload];
    return ar;
  }
  if (action.type === UPDATE_TODO) {
    console.log("this is update reducers", action.payload);
    let oldItem = state.find((item) => item.id === action.payload.id );
    let index = state.indexOf(oldItem);
    let newState = [...state];
    newState[index] = action.payload;
    return newState;
  }
  return state;
};


export default rootReducer;

