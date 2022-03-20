import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const ContactsList = () => {
  const navigate = useNavigate();
  const contacts = useSelector((state) => state.contacts);

  return (
    <>
      <h1>Address book</h1>
      {contacts.length ? (
        <div className="contacts">
          {contacts.map((contact) => {
            return (
              <div
                className="contact"
                key={contact.id}
                onClick={() => navigate(`/${contact.id}`)}
              >
                <h3 className="contact-title">{contact.name}</h3>
                <p className="contact-info">
                  {contact.phone} &middot; {contact.email}
                </p>
              </div>
            );
          })}
          <button className="btn" onClick={() => navigate("/add")}>
            Add
          </button>
        </div>
      ) : (
        <p>
          Address book is empty. <Link to="/add">Add new contact</Link>
        </p>
      )}
    </>
  );
};

export default ContactsList;
