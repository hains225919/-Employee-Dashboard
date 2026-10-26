import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("table"); // 'table' or 'card'

  const fetchEmployees = () => {
    setLoading(true);
    setError(null);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch data (Status: ${res.status})`);
        }
        return res.json();
      })
      .then((data) => {
        setEmployees(data);
      })
      .catch((err) => {
        setError(err.message || "Failed to load employee data. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const filteredEmployees = employees.filter((emp) => {
    const term = searchTerm.toLowerCase();
    return (
      emp.id.toString().includes(term) ||
      emp.name.toLowerCase().includes(term) ||
      emp.email.toLowerCase().includes(term)
    );
  });

  // Color generator for avatar badges based on id
  const getAvatarColor = (id) => {
    const colors = [
      { bg: "#e0f2fe", text: "#0369a1" },
      { bg: "#fef3c7", text: "#b45309" },
      { bg: "#dcfce7", text: "#15803d" },
      { bg: "#f3e8ff", text: "#7e22ce" },
      { bg: "#ffe4e6", text: "#be123c" },
      { bg: "#e2e8f0", text: "#334155" },
    ];
    return colors[id % colors.length];
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <div className="dashboard-container">
      {/* Header section */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <div>
          <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 rounded-pill fw-semibold mb-2">
            API DATA SOURCE • JSONPlaceholder
          </span>
          <h1 className="h2 fw-bold text-dark mb-1">Employee Dashboard</h1>
          <p className="text-muted mb-0">
            Real-time directory of employees fetched from external API.
          </p>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <Link to="/employee-form" className="btn btn-primary px-3 py-2 fw-medium shadow-sm">
            + New Employee
          </Link>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white h-100">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <span className="text-muted small text-uppercase fw-semibold">Total Records</span>
                <h3 className="fw-bold mb-0 mt-1">{loading ? "..." : employees.length}</h3>
                <span className="text-muted small">Active entries</span>
              </div>
              <div className="stat-icon-wrapper bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center">
                📋
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-lg-4">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white h-100">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <span className="text-muted small text-uppercase fw-semibold">Endpoint</span>
                <h6 className="fw-bold mb-0 mt-2 text-truncate" style={{ maxWidth: "200px" }}>
                  jsonplaceholder.typicode.com
                </h6>
                <span className="text-muted small">REST API /users</span>
              </div>
              <div className="stat-icon-wrapper bg-info-subtle text-info rounded-circle d-flex align-items-center justify-content-center">
                🌐
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-lg-4">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white h-100">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <span className="text-muted small text-uppercase fw-semibold">API Status</span>
                <div className="d-flex align-items-center gap-2 mt-1">
                  <span
                    className={`status-indicator ${
                      error ? "bg-danger" : loading ? "bg-warning" : "bg-success"
                    }`}
                  ></span>
                  <h6 className="fw-bold mb-0">
                    {error ? "Failed" : loading ? "Loading..." : "Online & Active"}
                  </h6>
                </div>
                <span className="text-muted small">
                  {error ? "Network error" : "Response 200 OK"}
                </span>
              </div>
              <div className="stat-icon-wrapper bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center">
                ⚡
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white mb-4">
        {/* Controls Bar */}
        <div className="card-header bg-white border-bottom p-3 p-md-4">
          <div className="row g-3 align-items-center justify-content-between">
            <div className="col-12 col-md-6 col-lg-5">
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0 text-muted">🔍</span>
                <input
                  type="text"
                  className="form-control bg-light border-start-0 ps-0"
                  placeholder="Search by ID, name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    className="btn btn-light border"
                    type="button"
                    onClick={() => setSearchTerm("")}
                    title="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-md-end align-items-center gap-2">
              {/* View Switcher Toggle */}
              <div className="btn-group shadow-sm" role="group" aria-label="View switch">
                <button
                  type="button"
                  className={`btn btn-sm ${
                    viewMode === "table" ? "btn-primary" : "btn-outline-secondary"
                  }`}
                  onClick={() => setViewMode("table")}
                >
                  📄 Tabular View
                </button>
                <button
                  type="button"
                  className={`btn btn-sm ${
                    viewMode === "card" ? "btn-primary" : "btn-outline-secondary"
                  }`}
                  onClick={() => setViewMode("card")}
                >
                  🗂️ Card View
                </button>
              </div>

              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={fetchEmployees}
                title="Refresh Data"
              >
                🔄 Refresh
              </button>
            </div>
          </div>
        </div>

        {/* State: Loading */}
        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-primary mb-3" role="status">
              <span className="visually-hidden">Loading employees...</span>
            </div>
            <p className="text-muted fw-medium mb-0">Fetching employee records from API...</p>
          </div>
        )}

        {/* State: Error */}
        {!loading && error && (
          <div className="p-4 text-center">
            <div className="alert alert-danger d-inline-block text-start mb-3" role="alert">
              <h5 className="alert-heading fw-bold">⚠️ Error Loading Data</h5>
              <p className="mb-2">{error}</p>
              <hr />
              <button className="btn btn-danger btn-sm" onClick={fetchEmployees}>
                Retry Fetching
              </button>
            </div>
          </div>
        )}

        {/* State: Empty Search Result */}
        {!loading && !error && filteredEmployees.length === 0 && (
          <div className="text-center py-5">
            <div className="display-6 mb-2">🔍</div>
            <h5 className="fw-bold text-dark">No employees matched your search</h5>
            <p className="text-muted">Try typing a different name, email, or ID.</p>
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => setSearchTerm("")}
            >
              Clear Search Filter
            </button>
          </div>
        )}

        {/* Tabular View */}
        {!loading && !error && filteredEmployees.length > 0 && viewMode === "table" && (
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0 employee-table">
              <thead className="table-light border-bottom">
                <tr>
                  <th scope="col" className="ps-4 text-secondary text-uppercase fw-semibold small" style={{ width: "100px" }}>
                    ID
                  </th>
                  <th scope="col" className="text-secondary text-uppercase fw-semibold small">
                    NAME
                  </th>
                  <th scope="col" className="pe-4 text-secondary text-uppercase fw-semibold small">
                    EMAIL
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((emp) => {
                  const avatarColor = getAvatarColor(emp.id);
                  return (
                    <tr key={emp.id} className="employee-row">
                      <td className="ps-4">
                        <span className="badge rounded-pill bg-light text-secondary border px-3 py-2 fw-semibold">
                          #{emp.id}
                        </span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-3">
                          <div
                            className="rounded-circle d-flex align-items-center justify-content-center fw-bold shadow-sm"
                            style={{
                              width: "42px",
                              height: "42px",
                              backgroundColor: avatarColor.bg,
                              color: avatarColor.text,
                              fontSize: "0.95rem",
                              flexShrink: 0,
                            }}
                          >
                            {getInitials(emp.name)}
                          </div>
                          <div>
                            <div className="fw-bold text-dark">{emp.name}</div>
                            {emp.company?.name && (
                              <small className="text-muted d-block">{emp.company.name}</small>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="pe-4">
                        <a
                          href={`mailto:${emp.email}`}
                          className="text-decoration-none text-primary fw-medium d-inline-flex align-items-center gap-1"
                        >
                          <span>✉️</span> {emp.email}
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Card View */}
        {!loading && !error && filteredEmployees.length > 0 && viewMode === "card" && (
          <div className="p-3 p-md-4">
            <div className="row g-3">
              {filteredEmployees.map((emp) => {
                const avatarColor = getAvatarColor(emp.id);
                return (
                  <div key={emp.id} className="col-12 col-md-6 col-lg-4">
                    <div className="card h-100 border rounded-3 p-3 employee-card shadow-sm hover-shadow">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center fw-bold shadow-sm"
                          style={{
                            width: "48px",
                            height: "48px",
                            backgroundColor: avatarColor.bg,
                            color: avatarColor.text,
                            fontSize: "1.05rem",
                          }}
                        >
                          {getInitials(emp.name)}
                        </div>
                        <span className="badge bg-light text-secondary border px-2 py-1 fw-semibold">
                          ID: #{emp.id}
                        </span>
                      </div>

                      <h5 className="card-title fw-bold text-dark mb-1">{emp.name}</h5>
                      {emp.company?.name && (
                        <p className="card-subtitle text-muted small mb-3">🏢 {emp.company.name}</p>
                      )}

                      <div className="mt-auto pt-2 border-top">
                        <div className="d-flex align-items-center gap-2 text-truncate">
                          <span className="text-muted">✉️</span>
                          <a
                            href={`mailto:${emp.email}`}
                            className="text-decoration-none text-primary small fw-medium text-truncate"
                          >
                            {emp.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Footer info inside panel */}
        {!loading && !error && (
          <div className="card-footer bg-light border-top px-4 py-3 d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2">
            <small className="text-muted">
              Showing <strong>{filteredEmployees.length}</strong> of{" "}
              <strong>{employees.length}</strong> employees
            </small>
            <small className="text-muted">
              Fields displayed: <code>id</code>, <code>name</code>, <code>email</code>
            </small>
          </div>
        )}
      </div>
    </div>
  );
}
