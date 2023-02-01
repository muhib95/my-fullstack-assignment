import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const AdminPanal = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/userInfo", {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        {users.map((user, index) => (
          <tbody key={user._id}>
            <tr>
              <td>{index + 1}</td>
              <td>{user?.email ? user.email : "Not found"}</td>
              <td>{user?.password ? user.password : "Not found"}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default AdminPanal;
