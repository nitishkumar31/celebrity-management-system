import { useEffect, useState } from "react";
import UserAccordion from "./components/UserAccordion";
import { BsSearch } from "react-icons/bs";

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [openUserId, setOpenUserId] = useState(null);

  // fetch all celebrities data from the json file
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/data/celebrities.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // validate that do not toggle in edit mode
  const toggleAccordion = (userId) => {
    if (editMode) return;
    setOpenUserId((prev) => (prev === userId ? null : userId));
  };

  const handleEditMode = (value) => {
    setEditMode(value);
  };

  const handleUpdateUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setEditMode(false);
  };

  const handleDeleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    setOpenUserId(null);
  };

  const filteredUsers = users.filter((user) =>
    `${user.first} ${user.last}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App max-w-4xl mx-auto p-4">
      <h1 className="text-4xl lg:text-3xl sm:text-2xl font-bold text-center mb-5">
        Celebrity Management System
      </h1>
      <div className="search-container flex items-center max-w-2xl mx-auto border border-gray-500 rounded-xl mb-5 overflow-hidden focus-within:border-black focus-within:ring-1 focus-within:ring-black">
        <BsSearch className="text-sm text-gray-400 ms-3" />
        <input
          type="text"
          placeholder="Search Celebrity"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-3 py-1.5 focus:outline-none"
        />
      </div>

      <div className="user-list max-w-2xl mx-auto">
        {filteredUsers.map((user) => (
          <UserAccordion
            key={user.id}
            user={user}
            isOpen={openUserId === user.id}
            onToggle={() => toggleAccordion(user.id)}
            onEditMode={handleEditMode}
            onUpdateUser={handleUpdateUser}
            onDeleteUser={handleDeleteUser}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
