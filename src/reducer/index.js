import {
  ADD_TODO,
  REMOVE_TODO,
  TO_IN_PROGRESS,
  TO_DONE,
} from "../actions/types";

const initialState = [];

//En nuestro estado guardaremos objetos con `todos`. Cada todo tendra: title, description, place, date, id y un status;
const todos = (state = initialState, { type, payload }) => {
  switch (type) {
    // Aca va tu codigo;
    case ADD_TODO:
      return [...state, { ...payload }];
    case REMOVE_TODO:
      return state.filter((el) => el.id !== payload);
    case TO_IN_PROGRESS:
      return state.map((el) => {
        if (el.id === payload) {
          return { ...el, status: "InProgress" };
        }
        return { ...el };
      });
    case TO_DONE:
      return state.map((el) => {
        if (el.id === payload) {
          return { ...el, status: "Done" };
        }
        return { ...el };
      });
    default:
      return state;
  }
};

export default todos;

// import {
//   ADD_CONTACT,
//   REMOVE_CONTACT,
//   ADD_FAV,
//   REMOVE_FAV,
// } from "../actions/types";

// const initialState = [];
// let prevId = 0;

// function reducer(state = initialState, { type, payload }) {
//   switch (type) {
//     case ADD_CONTACT:
//       return [...state, { ...payload, id: ++prevId }];
//     case REMOVE_CONTACT:
//       return state.filter((contact) => contact.id !== payload);
//     case ADD_FAV:
//       return state.map((contact) => {
//         if (contact.id === payload) {
//           return { ...contact, fav: true };
//         }
//         return { ...contact };
//       });
//     case REMOVE_FAV:
//       return state.map((contact) => {
//         if (contact.id === payload) {
//           return { ...contact, fav: false };
//         }
//         return { ...contact };
//       });
//     default:
//       return state;
//   }
// }

// export default reducer;
