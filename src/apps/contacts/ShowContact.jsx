import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { contactsDeleteContact } from "./ducks/actions";

const ShowContact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const contact = useSelector((state) =>
    state.contacts.find((s) => s.id === id)
  );

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      dispatch(contactsDeleteContact(id));
      navigate("/");
    } else {
      return false;
    }
  };

  return (
    <>
      <h1>Show contact details</h1>
      {contact ? (
        <>
          <div className="contact" key={contact.id}>
            <h3 className="contact-title">{contact.name}</h3>
            <p className="contact-info">
              {contact.phone} &middot; {contact.email}
            </p>
          </div>
          <button
            className="btn me-2"
            onClick={() => navigate(`/${contact.id}/edit`)}
          >
            Edit
          </button>
          <button
            className="btn danger"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </>
      ) : (
        <p>Either contact doesn't exists or deleted.</p>
      )}
    </>
  );
};

export default ShowContact;
