import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactsPage from "./pages/ContactsPage";

const phoneBook = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "+1234567890",
    email: "john.doe@example.com",
    address: "123 Main St, Springfield, IL",
    avatarUrl: "https://example.com/avatars/john_doe.png",
  },
  {
    id: "2",
    firstName: "Jane",
    lastName: "Smith",
    phoneNumber: "+0987654321",
    email: "jane.smith@example.com",
    address: "456 Elm St, Springfield, IL",
    avatarUrl: "https://example.com/avatars/jane_smith.png",
  },
  {
    id: "3",
    firstName: "Alice",
    lastName: "Johnson",
    phoneNumber: "+1122334455",
    email: "alice.johnson@example.com",
    address: "789 Oak St, Springfield, IL",
    avatarUrl: "https://example.com/avatars/alice_johnson.png",
  },
  {
    id: "4",
    firstName: "Bob",
    lastName: "Brown",
    phoneNumber: "+2233445566",
    email: "bob.brown@example.com",
    address: "101 Pine St, Springfield, IL",
    avatarUrl: "https://example.com/avatars/bob_brown.png",
  },
  {
    id: "5",
    firstName: "Charlie",
    lastName: "Davis",
    phoneNumber: "+3344556677",
    email: "charlie.davis@example.com",
    address: "202 Maple St, Springfield, IL",
    avatarUrl: "https://example.com/avatars/charlie_davis.png",
  },
];

function App() {
  const contacts = [...phoneBook];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/contacts/*"
          element={<ContactsPage contacts={contacts} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

// Home
// ContactsPage
//   ContactItem
