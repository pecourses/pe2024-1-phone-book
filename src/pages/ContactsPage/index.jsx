import { Link, Route, Routes, useParams } from "react-router-dom";
import Header from "../../components/Header";

function ContactsPage({ contacts }) {
  return (
    <div>
      <Header />
      <ul>
        {contacts.map(c => (
          <li key={c.id}>
            <Link to={c.id}>
              {c.firstName} {c.lastName}
            </Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route
          path=":contactId"
          element={<ContactsItem contacts={contacts} />}
        />
      </Routes>
    </div>
  );
}

export default ContactsPage;

function ContactsItem({ contacts }) {
  const { contactId } = useParams();
  const foundContact = contacts.find(c => c.id === contactId);

  return (
    <div>
      <p>Phone: {foundContact.phoneNumber}</p>
      <p>Email: {foundContact.email}</p>
      <p>Address: {foundContact.address}</p>
    </div>
  );
}
