import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pagination } from 'react-bootstrap';
import { FaSync } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import backendUrl from "../config/Constants";
import AdminNavbar from "./AdminNavbar";

const AdminDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const getDoctors = () => {
        axios.get(`${backendUrl}/getDoctors`).then((response) => {
            setDoctors(response.data);
        });
    };

    useEffect(() => {
        getDoctors();
    }, []);

    const totalPages = Math.ceil(doctors.length / itemsPerPage);

    const handleClick = (number) => {
        setCurrentPage(number);
    };

    return (
      <>
        <AdminNavbar />
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h2>All Doctors</h2>
              <button className="btn btn-success mb-2" onClick={getDoctors}>
                <FaSync /> Refresh
              </button>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Hospital</th>
                    <th>Degree</th>
                    <th>Designation</th>
                  </tr>
                </thead>
                <tbody>
                  {doctors
                    .slice(
                      (currentPage - 1) * itemsPerPage,
                      currentPage * itemsPerPage
                    )
                    .map((doctor) => (
                      <tr key={doctor.id}>
                        <td>{doctor.name}</td>
                        <td>{doctor.hospital}</td>
                        <td>{doctor.degree}</td>
                        <td>{doctor.designation}</td>
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

export default AdminDoctors;
