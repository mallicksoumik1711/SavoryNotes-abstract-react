// src/pages/UnderConstruction.jsx
import { Link } from "react-router-dom";

function UnderConstruction() {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center text-center text-light"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #2e2e2e 0%, #4b3f2f 100%)",
      }}
    >
      <div
        className="p-5 rounded-4 shadow-lg"
        style={{
          backgroundColor: "rgba(28,28,28,0.95)",
          maxWidth: "600px",
          width: "90%",
        }}
      >
        <h1 className="fw-bold text-warning mb-3">🚧 404 NOT FOUND 🚧</h1>
        <p className="text-secondary mb-4">
          This page that you're looking for was not found.
        </p>
        <Link to="/" className="btn btn-warning fw-semibold rounded-pill px-4 py-2">
          Go Back Home
        </Link>
      </div>
    </section>
  );
}

export default UnderConstruction;
