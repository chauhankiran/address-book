export const ADD_CONTACT = "contacts/ADD_CONTACT";
export const EDIT_CONTACT = "contacts/EDIT_CONTACT";
export const DELETE_CONTACT = "contacts/DELETE_CONTACT";

export const contactsAddContact = (contactDetails) => {
  return {
    type: ADD_CONTACT,
    payload: contactDetails,
  };
};

export const contactsEditContact = (id, contactDetails) => {
  return {
    type: EDIT_CONTACT,
    payload: { id, contactDetails },
  };
};

export const contactsDeleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};
