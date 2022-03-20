import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from "./actions";

const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return state.concat(action.payload);
    case EDIT_CONTACT:
      return state.map((s) =>
        s.id === action.payload.id ? action.payload.contactDetails : s
      );
    case DELETE_CONTACT:
      return state.filter((s) => s.id !== action.payload);
    default:
      return state;
  }
};

export default contactsReducer;
