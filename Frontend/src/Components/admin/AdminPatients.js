import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSync, FaUserMd } from 'react-icons/fa';
import backendUrl from "../config/Constants";
import AdminNavbar from "./AdminNavbar";

const AdminPatients = () => {
    const [patients, setPatients] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const navigate = useNavigate();

    const getPatients = () => {
        axios.get(`${backendUrl}/patient`).then((response) => {
            setPatients(response.data);
        });
    };

    useEffect(() => {
        getPatients();
    }, []);

    const totalPages = Math.ceil(patients.length / itemsPerPage);

    const handleClick = (number) => {
        setCurrentPage(number);
    };

    return (
      <>
        {" "}
          <AdminNavbar />
        <div className="container">

          <div className="row mt-4">
            <div className="col text-center">
              <h2>All Patients</h2>
              <button
                className="btn btn-success btn-lg mb-3"
                onClick={getPatients}
              >
                <FaSync /> Refresh
              </button>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {patients
                    .slice(
                      (currentPage - 1) * itemsPerPage,
                      currentPage * itemsPerPage
                    )
                    .map((patient) => (
                      <tr key={patient._id}>
                        <td>{patient._id}</td>
                        <td>{patient.firstName + " " + patient.lastName}</td>
                        <td>{patient.email}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <Pagination className="justify-content-center mt-3">
                {[...Array(totalPages)].map((_, i) => (
                  <Pagination.Item
                    key={i}
                    active={i + 1 === currentPage}
                    onClick={() => handleClick(i + 1)}
                  >
                    {i + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </div>
          </div>
        </div>
      </>
    );
};

export default AdminPatients;
