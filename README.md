 <h1 align="center">User Management System</h1>
  <h3 align="center">A simple user management system built with React, Axios, and React Modal.</h3>
  <hr/>
  <br><br/>
  
  
  <h2>Features</h2>
  <ul>
    <li>Add new users</li>
    <li>Edit existing users</li>
    <li>Delete users</li>
    <li>Fetch and display users from the backend</li>
    <li>Pagination for user list</li>
  </ul>
  
  <h2>Technologies Used</h2>
  <ul>
    <li>React</li>
    <li>Axios</li>
    <li>React Modal</li>
    <li>CSS</li>
  </ul>
  
  <h2>Prerequisites</h2>
  <p>Before you begin, ensure you have met the following requirements:</p>
  <ul>
    <li>You have installed the latest version of <a href="https://nodejs.org/">Node.js</a></li>
    <li>You have a running backend server that supports the following endpoints:
      <ul>
        <li><code>GET /users</code> to fetch the list of users</li>
        <li><code>POST /users/add</code> to add a new user</li>
        <li><code>PATCH /users/update/:id</code> to update an existing user</li>
        <li><code>DELETE /users/delete/:id</code> to delete a user</li>
      </ul>
    </li>
  </ul>
  
  <h2>Installation</h2>
  <ol>
    <li>Clone the repository:
      <pre><code>git clone https://github.com/your-username/user-management-system.git</code></pre>
    </li>
    <li>Navigate to the project directory:
      <pre><code>cd user-management-system</code></pre>
    </li>
    <li>Install the dependencies:
      <pre><code>npm install</code></pre>
    </li>
  </ol>
  
  <h2>Running the Application</h2>
  <ol>
    <li>Start the application:
      <pre><code>npm start</code></pre>
    </li>
    <li>Open your browser and navigate to <a href="http://localhost:3000">http://localhost:3000</a>.</li>
  </ol>
   <h2>Components</h2>
  <h3>AddUser Component</h3>
  <p>The <code>AddUser</code> component is responsible for rendering the modal to add a new user. It includes the following functionalities:</p>
  <ul>
    <li>Managing form state for new user data.</li>
    <li>Handling input changes.</li>
    <li>Sending a POST request to the backend to add the user.</li>
    <li>Resetting form state and closing the modal on successful submission.</li>
  </ul>
  
  <h3>UserManagement Component</h3>
  <p>The <code>UserManagement</code> component handles the main user interface and includes functionalities such as:</p>
  <ul>
    <li>Fetching and displaying the list of users from the backend.</li>
    <li>Opening and closing modals for adding and editing users.</li>
    <li>Handling deletion of users.</li>
    <li>Handling pagination.</li>
    <li>Sending PATCH requests to update user data.</li>
  </ul>
  
  <h2>CSS</h2>
  <p>The <code>UserManagement.css</code> file contains styles for the user table and buttons, ensuring a clean and user-friendly interface.</p>
  
  <h2>Backend Endpoints</h2>
  <p>Ensure your backend server supports the following endpoints:</p>
  <ul>
    <li><b>Fetch Users</b>: <code>GET /users</code>
      <ul>
        <li>Response: Array of user objects</li>
      </ul>
    </li>
    <li><b>Add User</b>: <code>POST /users/add</code>
      <ul>
        <li>Request Body: <code>{ name: String, email: String, department: String }</code></li>
      </ul>
    </li>
    <li><b>Update User</b>: <code>PATCH /users/update/:id</code>
      <ul>
        <li>Request Body: <code>{ name: String, email: String, department: String }</code></li>
      </ul>
    </li>
    <li><b>Delete User</b>: <code>DELETE /users/delete/:id</code></li>
  </ul>
  <h2>License</h2>
  <p>This project is licensed under the MIT License.</p>
