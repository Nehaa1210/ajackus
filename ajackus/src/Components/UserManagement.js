import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Modal from "react-modal";
import AddUser from "./AddUser";
import "./UserManagement.css"; 

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    department: "",
  });
  const [totalPage, setTotalPage] = useState(0);
  const [modalControl, setModalControl] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);
  const [addUserModal, setAddUserModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const rootElement = useRef(null);

  useEffect(() => {
    Modal.setAppElement(rootElement.current);
    fetchData();
  }, [currentPage]);

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`https://ajackus-backend.onrender.com/users/delete/${id}`) 
      .then((res) => {
        console.log(id)
        console.log(res.data);
        alert("User Deleted Successfully");
        fetchData();
        console.log(users);
      })
      .catch((err) => console.error("Error deleting user:", err.message));
  };

  const handleEdit = (id) => {
    setModalControl(true);
    setEditingUserId(id);
    let editUser = users.find((el) => el.id === id);
    if (editUser) {
      setNewUser({
        name: editUser.name,
        email: editUser.email,
        department: editUser.company?.name || "", 
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = () => {
    axios
      .patch(`https://ajackus-backend.onrender.com/users/update/${editingUserId}`, newUser)
      .then((res) => {
        alert("Changes Saved Successfully");
        setModalControl(false);
        setEditingUserId(null);
        setNewUser({
          name: "",
          email: "",
          department: "",
        });
        fetchData();
      })
      .catch((err) => {
        console.error("Error saving changes:", err.response ? err.response.data : err.message);
        alert(`Error saving changes: ${err.response ? err.response.data.message : err.message}`);
      });
  };

  
  const fetchData = () => {
    axios
      .get(`https://ajackus-backend.onrender.com/users`) 
      .then((res) => {
        console.log(res)
        setUsers(res.data);
       
        
      })
      .catch((error) => console.error("Error fetching data:", error.message));
  };

  return (
    <div
      style={{ width: "80%", margin: "auto", display: "flex", flexDirection: "column" }}
      ref={rootElement}
    >
      <div className="navbar">
        <h1>User Management System</h1>
        <button onClick={() => setAddUserModal(true)} className="addbutton">Add User</button>
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th className="table-head">Serial Number</th>
            <th className="table-head">Name</th>
            <th className="table-head">Email</th>
            <th className="table-head">Department</th>
            <th className="table-head">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td className="table-cell">{index + 1 + (currentPage - 1) * 5}</td>
              <td className="table-cell">{user.name}</td>
              <td className="table-cell">{user.email}</td>
              <td className="table-cell">{user.department}</td> 
              <td className="table-cell">
                <button onClick={() => handleEdit(user._id)} className="editbutton">Edit</button>
                <button onClick={() => handleDelete(user._id)} className="deletebutton">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AddUser addUserModal={addUserModal} setAddUserModal={setAddUserModal} fetchData={fetchData} />

      <Modal isOpen={modalControl} style={{ content: { top: "50%", left: "50%", right: "auto", bottom: "auto", marginRight: "-50%", transform: "translate(-50%, -50%)" } }}>
        <h3>Edit User</h3>
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
        <button type="button" onClick={() => setModalControl(false)}>
          Close
        </button>
      </Modal>

      {/* Pagination */}
      <div>
        {Array.from({ length: totalPage }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            style={{ backgroundColor: `${currentPage === index + 1 ? "gray" : ""}` }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
