// Importera configureStore från Redux Toolkit.
// configureStore förenklar skapandet och konfigurationen av en Redux store genom att kombinera reducers och sätta upp bra standardverktyg.
import { configureStore } from "@reduxjs/toolkit";

// Importera counterReducer från vår slice-fil.
import counterReducer from "./counterSlice";
import todosReducer from "./todosSlice";
import postsReducer from "./postsSlice";

/*
  Store:
  - Storen är applikationens centrala state-hanterare.
  - Den kombinerar alla reducers (i vårt fall en reducer från counterSlice) och håller koll på hela appens state.
  - configureStore integrerar automatiskt Redux DevTools och andra middleware.
*/
const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    posts: postsReducer,
  },
});

export default store;
