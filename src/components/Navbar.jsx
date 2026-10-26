import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark app-navbar shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
          <span className="brand-mark">👥</span>
          <span>Employee Dashboard</span>
        </Link>

        <div className="navbar-nav ms-auto flex-row gap-2 gap-sm-3">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-link px-3 py-2 rounded-3 fw-medium ${isActive ? "active fw-semibold" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/employee-form"
            className={({ isActive }) =>
              `nav-link px-3 py-2 rounded-3 fw-medium ${isActive ? "active fw-semibold" : ""}`
            }
          >
            Employee Form
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
