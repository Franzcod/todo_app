import { ADD_TODO, REMOVE_TODO, TO_IN_PROGRESS, TO_DONE } from "./types";

// Podes usar esta variable para generar un ID por cada Todo.
let todoId = 0;

export function addTodo(title, description, place, date) {
  return {
    type: ADD_TODO,
    payload: { title, description, place, date, status: "Todo", id: ++todoId },
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
}

export function toInProgress(id) {
  return {
    type: TO_IN_PROGRESS,
    payload: id,
  };
}

export function toDone(id) {
  return {
    type: TO_DONE,
    payload: id,
  };
}

// en types
// export const ADD_CONTACT = "ADD_CONTACT";
// export const REMOVE_CONTACT = "REMOVE_CONTACT";
// export const ADD_FAV = "ADD_FAV";
// export const REMOVE_FAV = "REMOVE_FAV";

// import { ADD_CONTACT, REMOVE_CONTACT, ADD_FAV, REMOVE_FAV } from "./types";

// export function addContact(name, surname, phone) {
//   return { type: ADD_CONTACT, payload: { name, surname, phone, fav: false } };
// }
// export function removeContact(id) {
//   return { type: REMOVE_CONTACT, payload: id };
// }
// export function addFav(id) {
//   return { type: ADD_FAV, payload: id };
// }
// export function removeFav(id) {
//   return { type: REMOVE_FAV, payload: id };
// }
