import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddContact from "./apps/contacts/AddContact";
import ContactsList from "./apps/contacts/ContactsList";
import EditContact from "./apps/contacts/EditContact";
import ShowContact from "./apps/contacts/ShowContact";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<ContactsList />} />
        <Route path="/:id" element={<ShowContact />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/:id/edit" element={<EditContact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
