import {ADD_TODO, UPDATE_TODO } from "../constants/action-types";


export function addTodo(payload) {
  return { type: ADD_TODO, payload };
}

export function updateTodo(payload) {
  return { type: UPDATE_TODO, payload}
}