import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { contactsAddContact } from "./ducks/actions";

const AddContact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    name: "Kai Doe",
    email: "kai@doe.com",
    phone: "+91 99999 88888",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const contactObj = {
      id: nanoid(),
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    };

    dispatch(contactsAddContact(contactObj));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add new contact</h1>
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
          Add
        </button>
      </div>
    </form>
  );
};

export default AddContact;
