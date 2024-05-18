import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";

const AddUser = ({ addUserModal, setAddUserModal, fetchData }) => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    department: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = () => {
    axios
      .post(`https://ajackus-backend.onrender.com/users/add`, newUser) // Use the correct endpoint
      .then((res) => {
        alert("User Added Successfully");
        setNewUser({
          name: "",
          email: "",
          department: "",
        });
        setAddUserModal(false);
        fetchData();
      })
      .catch((err) => console.error("Error adding user:", err.message));
  };

  return (
    <div>
      {addUserModal && (
        <Modal
          isOpen={addUserModal}
          onRequestClose={() => setAddUserModal(false)}
          style={{
            content: {
              padding: "20px",
              borderRadius: "8px",
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              transform: "translate(-50%, -50%)",
            },
          }}
        >
          <h3>Add User</h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newUser.name}
            onChange={handleInputChange}
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newUser.email}
            onChange={handleInputChange}
          />
          <br />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={newUser.department}
            onChange={handleInputChange}
          />
          <br />
          <br />
          <button type="button" onClick={handleSaveChanges}>
            Save Changes
          </button>
          <button type="button" onClick={() => setAddUserModal(false)}>
            Close
          </button>
        </Modal>
      )}
    </div>
  );
};

export default AddUser;
