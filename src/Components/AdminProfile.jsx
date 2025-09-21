import { useSelector } from "react-redux";
import AddRecipeForm from "./AddRecipeForm";
import { useState } from "react";

function AdminProfile() {
  const { admin } = useSelector((state) => state.admin);
const [showForm, setShowForm] = useState(false); 
  return (
    <section
      className="d-flex justify-content-center align-items-center text-light"
      style={{
        minHeight: "80vh",
        background: "linear-gradient(135deg, #2e2e2e 0%, #4b3f2f 100%)",
      }}
    >

      {showForm ? (
      <AddRecipeForm onClose={() => setShowForm(false)} />
    ) : (
      <div
        className="p-5 rounded-4 shadow-lg"
        style={{ backgroundColor: "rgba(28,28,28,0.95)", maxWidth: "600px", width: "100%" }}
      >
        <h2 className="fw-bold mb-3 text-center text-warning">Welcome, Admin</h2>
        <p className="text-center text-secondary">
          You are logged in as <b>{admin?.email}</b>
        </p>

        <div className="text-center mt-4">
          <button
            className="btn px-5 py-3 rounded-pill fw-semibold"
            style={{
              backgroundColor: "#FFB74D",
              color: "#2e2e2e",
              border: "none",
              boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 12px 20px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 15px rgba(0,0,0,0.2)";
            }}
             onClick={() => setShowForm(true)}
          >
            Add Recipes
          </button>
        </div>
      </div>
        )}
    </section>
  );
}

export default AdminProfile;
