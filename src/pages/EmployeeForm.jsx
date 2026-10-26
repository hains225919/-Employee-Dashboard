import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function EmployeeForm() {
  const initialFormData = {
    name: "",
    designation: "",
    location: "",
    salary: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submittedData, setSubmittedData] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Requirements: "No need to post data from Frontend"
    // Storing in local state to display success feedback and entered details
    setSubmittedData({ ...formData, submittedAt: new Date().toLocaleTimeString() });
    setShowSuccessAlert(true);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setShowSuccessAlert(false);
    setSubmittedData(null);
  };

  return (
    <div className="employee-form-container">
      {/* Page Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <div>
          <span className="badge bg-secondary-subtle text-secondary border px-3 py-2 rounded-pill fw-semibold mb-2">
            FORM SUBMISSION
          </span>
          <h1 className="h2 fw-bold text-dark mb-1">Employee Form</h1>
          <p className="text-muted mb-0">
            Create or register an employee profile. (Frontend-only validation)
          </p>
        </div>
        <div>
          <Link to="/" className="btn btn-outline-secondary px-3 py-2 fw-medium shadow-sm">
            ← Back to Dashboard
          </Link>
        </div>
      </div>

      <div className="row g-4 justify-content-center">
        {/* Form Card */}
        <div className="col-12 col-lg-8">
          <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white">
            <div className="card-header bg-white border-bottom p-4">
              <div className="d-flex align-items-center gap-3">
                <div
                  className="rounded-3 bg-primary-subtle text-primary d-flex align-items-center justify-content-center"
                  style={{ width: "45px", height: "45px", fontSize: "1.4rem" }}
                >
                  📝
                </div>
                <div>
                  <h5 className="fw-bold mb-0 text-dark">Employee Information</h5>
                  <small className="text-muted">
                    All fields (Name, Designation, Location, Salary) are required.
                  </small>
                </div>
              </div>
            </div>

            <div className="card-body p-4 p-md-5">
              {showSuccessAlert && (
                <div
                  className="alert alert-success alert-dismissible fade show border-0 shadow-sm rounded-3 p-3 mb-4"
                  role="alert"
                >
                  <div className="d-flex align-items-start gap-3">
                    <span style={{ fontSize: "1.5rem" }}>✅</span>
                    <div>
                      <h6 className="fw-bold mb-1">Form Submitted Successfully!</h6>
                      <p className="small mb-0 text-dark">
                        Employee record validated successfully on frontend. (As per assignment
                        instructions, no backend POST request is made).
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowSuccessAlert(false)}
                    aria-label="Close"
                  ></button>
                </div>
              )}

              <form onSubmit={handleSubmit} onReset={handleReset}>
                <div className="row g-4">
                  {/* Field: Name */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="name" className="form-label fw-semibold text-secondary small">
                      EMPLOYEE NAME <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light text-muted">👤</span>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Field: Designation */}
                  <div className="col-12 col-md-6">
                    <label
                      htmlFor="designation"
                      className="form-label fw-semibold text-secondary small"
                    >
                      DESIGNATION <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light text-muted">💼</span>
                      <input
                        type="text"
                        className="form-control"
                        id="designation"
                        name="designation"
                        placeholder="e.g. Frontend Engineer"
                        value={formData.designation}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Field: Location */}
                  <div className="col-12 col-md-6">
                    <label
                      htmlFor="location"
                      className="form-label fw-semibold text-secondary small"
                    >
                      LOCATION <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light text-muted">📍</span>
                      <input
                        type="text"
                        className="form-control"
                        id="location"
                        name="location"
                        placeholder="e.g. San Francisco, CA"
                        value={formData.location}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Field: Salary */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="salary" className="form-label fw-semibold text-secondary small">
                      SALARY <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light text-muted">💰</span>
                      <input
                        type="number"
                        className="form-control"
                        id="salary"
                        name="salary"
                        placeholder="e.g. 75000"
                        min="0"
                        step="any"
                        value={formData.salary}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Form Buttons */}
                <div className="d-flex flex-wrap align-items-center justify-content-end gap-3 mt-4 pt-3 border-top">
                  <button type="reset" className="btn btn-outline-secondary px-4 py-2 fw-medium">
                    Reset
                  </button>
                  <button type="submit" className="btn btn-primary px-4 py-2 fw-medium shadow-sm">
                    Submit Employee
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Live Preview Card */}
        <div className="col-12 col-lg-4">
          <div className="card border-0 shadow-sm rounded-4 p-4 bg-white sticky-top" style={{ top: "1rem" }}>
            <h6 className="fw-bold text-uppercase text-secondary small mb-3">Live Form Preview</h6>

            <div className="p-3 bg-light rounded-3 mb-3">
              <div className="small text-muted mb-1">Name:</div>
              <div className="fw-bold text-dark">{formData.name || "(Not entered yet)"}</div>
            </div>

            <div className="p-3 bg-light rounded-3 mb-3">
              <div className="small text-muted mb-1">Designation:</div>
              <div className="fw-semibold text-dark">
                {formData.designation || "(Not entered yet)"}
              </div>
            </div>

            <div className="p-3 bg-light rounded-3 mb-3">
              <div className="small text-muted mb-1">Location:</div>
              <div className="fw-semibold text-dark">
                {formData.location || "(Not entered yet)"}
              </div>
            </div>

            <div className="p-3 bg-light rounded-3 mb-3">
              <div className="small text-muted mb-1">Salary:</div>
              <div className="fw-bold text-success">
                {formData.salary ? `$${Number(formData.salary).toLocaleString()}` : "(Not entered yet)"}
              </div>
            </div>

            {submittedData && (
              <div className="p-3 border border-success-subtle bg-success-subtle rounded-3 mt-2">
                <small className="fw-bold text-success d-block mb-1">
                  Last Submitted Snapshot ({submittedData.submittedAt}):
                </small>
                <div className="small text-secondary">
                  <strong>{submittedData.name}</strong> • {submittedData.designation} (
                  {submittedData.location}) - ${Number(submittedData.salary).toLocaleString()}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
