

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance"; 

const Dashboard = () => {
  const goTo = useNavigate();
  const userToken = localStorage.getItem("userToken");
  const personName = localStorage.getItem("userName") || "Guest";

  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [problem, setProblem] = useState("");
  const [loading, setLoading] = useState(false);
  const pageSize = 10;

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setProblem("");
      try {
        const response = await axiosInstance.get("/user", {
          params: { pageNumber: currentPage, pageSize: pageSize },
        });

        const fetchedUsers = response.data?.data || [];
        const fetchedTotal = response.data?.totalRecords || 0;

        setUsers(fetchedUsers);
        setTotalRecords(fetchedTotal);
      } catch (err) {
        setProblem(err.response?.data?.message || "Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [currentPage, userToken, goTo]);

  const nextPage = () => {
    if (currentPage * pageSize < totalRecords) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleDetails = (userId) => {
    goTo(`/user/${userId}/${userToken}`);
  };

  const handleAddUser = () => {
    goTo("/register");
  };

  return (
    <div className="box">
      <h2>Dashboard</h2>
      <p>Welcome, {personName}!</p>

      <div className="dashboard-header">
        <button onClick={handleAddUser} className="add-user-btn">
          Add User
        </button>
      </div>

      <h3>Users</h3>
      {loading && <p>Loading users...</p>}
      {problem && <p className="error">{problem}</p>}
      {users.length > 0 ? (
        <>
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id || user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      onClick={() => handleDetails(user.id || user._id)}
                      className="details-btn"
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="prev-btn"
            >
              Previous
            </button>
            <span>Page {currentPage}</span>
            <button
              onClick={nextPage}
              disabled={currentPage * pageSize >= totalRecords}
              className="next-btn"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default Dashboard;