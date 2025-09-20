
// src/pages/UnderConstruction.jsx
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function UnderConstruction() {
  const { user } = useSelector((state) => state.auth);

  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center text-center text-light"
      style={{
        minHeight: "80vh",
        background: "linear-gradient(135deg, #2e2e2e 0%, #4b3f2f 100%)",
      }}
    >
      <div
        className="p-5 rounded-4 shadow-lg d-flex flex-column align-items-center"
        style={{
          backgroundColor: "rgba(28,28,28,0.95)",
          maxWidth: "500px",
          width: "90%",
        }}
      >
        {user && user.admin ? (
          <>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // generic admin avatar
              alt="Admin Avatar"
              className="mb-3 rounded-circle"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <h1 className="fw-bold text-warning mb-3">Admin Dashboard</h1>
            <div className="text-start w-100 mb-4">
              <p className="text-light mb-2">
                <strong>Username:</strong> {user.username}
              </p>
              <p className="text-light mb-2">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="text-light mb-2">
                <strong>Role:</strong> Admin
              </p>
            </div>
            <Link
              to="/adminPanel"
              className="btn btn-warning fw-semibold rounded-pill px-4 py-2"
            >
              Go to Admin Panel
            </Link>
          </>
        ) : (
          <>
            <h1 className="fw-bold text-warning mb-3">🚧 404 NOT FOUND 🚧</h1>
            <p className="text-secondary mb-4">
              The page you are looking for was not found.
            </p>
            <Link
              to="/"
              className="btn btn-warning fw-semibold rounded-pill px-4 py-2"
            >
              Go Back Home
            </Link>
          </>
        )}
      </div>
    </section>
  );
}

export default UnderConstruction;
