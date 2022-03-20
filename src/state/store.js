import { combineReducers, createStore } from "redux";
import contactsReducer from "../apps/contacts/ducks/operation";

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const persistedState = localStorage.getItem("contacts")
  ? JSON.parse(localStorage.getItem("contacts"))
  : [];
const store = createStore(rootReducer, persistedState);
store.subscribe(() => {
  localStorage.setItem("contacts", JSON.stringify(store.getState()));
});

export default store;
