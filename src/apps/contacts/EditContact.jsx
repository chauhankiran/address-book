import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { contactsEditContact } from "./ducks/actions";

const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialContact = useSelector((state) =>
    state.contacts.find((contact) => contact.id === id)
  );
  const [contact, setContact] = useState(initialContact);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const contactObj = {
      id,
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    };

    dispatch(contactsEditContact(id, contactObj));
    navigate("/");
  };

  return (
    <>
      <h1>Edit this contact</h1>
      {contact ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Kai Doe"
              className="form-control"
              value={contact.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="kai@doe.com"
              className="form-control"
              value={contact.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="+91 99999 88888"
              className="form-control"
              value={contact.phone}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <button type="submit" className="btn">
              Edit
            </button>
          </div>
        </form>
      ) : (
        <p>Either contact doesn't exists or deleted.</p>
      )}
    </>
  );
};

export default EditContact;
