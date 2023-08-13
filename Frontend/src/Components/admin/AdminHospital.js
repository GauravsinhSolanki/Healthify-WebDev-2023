import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSync, FaHospital } from 'react-icons/fa';
import backendUrl from "../config/Constants";
import AdminNavbar from "./AdminNavbar";

const AdminHospital = () => {
    const [hospitals, setHospitals] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const navigate = useNavigate();

    const getHospitals = () => {
        axios.get(`${backendUrl}/`).then((response) => {
            setHospitals(response.data);
        });
    };

    const goToRegisterHospitalPage = () => {
        navigate("/admin/hospital/register");
    };

    useEffect(() => {
        getHospitals();
    }, []);

    const totalPages = Math.ceil(hospitals.length / itemsPerPage);

    const handleClick = (number) => {
        setCurrentPage(number);
    };

    return (
      <>
          <AdminNavbar />
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <button
                className="btn btn-primary btn-lg mb-3"
                onClick={goToRegisterHospitalPage}
              >
                <FaHospital /> Register Hospital {/* Added icon */}
              </button>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col text-center">
              <h2>All Hospitals</h2>
              <button
                className="btn btn-success btn-lg mb-3"
                onClick={getHospitals}
              >
                <FaSync /> Refresh
              </button>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {hospitals
                    .slice(
                      (currentPage - 1) * itemsPerPage,
                      currentPage * itemsPerPage
                    )
                    .map((hospital) => (
                      <tr key={hospital.id}>
                        <td>{hospital.name}</td>
                        <td>{hospital.address}</td>
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

export default AdminHospital;
