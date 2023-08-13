import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminNavbar from "./AdminNavbar";

const AdminPage = () => {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
  };

  return (
    <>
      <AdminNavbar />
      <div className="container">
        <h1 className="text-center mt-4">Admin Page</h1>

        <div className="row mt-4 justify-content-center">
          <button
            className="btn btn-primary m-2"
            onClick={() => goToPage("/admin/hospitals")}
          >
            Show Hospitals
          </button>
          <button
            className="btn bg-success text-white m-2"
            onClick={() => goToPage("/admin/doctors")}
          >
            Show Doctors
          </button>
          <button
            className="btn btn-warning m-2"
            onClick={() => goToPage("/admin/patients")}
          >
            Show Patients
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
