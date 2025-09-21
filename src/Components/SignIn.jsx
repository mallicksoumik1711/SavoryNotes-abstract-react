import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/authSlice";   
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isAuthenticated, user, error, loading } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (isAuthenticated) {
        console.log("Login successful!");
        console.log(user.admin);
        if(user.admin){
            navigate("/adminPanel");
        }else{
            navigate("/userPanel");
        }
        
    }
  }, [isAuthenticated, navigate]);

  return (
    <section
      className="position-relative d-flex justify-content-center align-items-center text-light"
      style={{
        minHeight: "80vh",
        background: "linear-gradient(135deg, #2e2e2e 0%, #4b3f2f 100%)",
        overflow: "hidden",
      }}
    >
      <div
        className="position-absolute"
        style={{
          left: "-120px",
          bottom: "10%",
          width: "400px",
          height: "400px",
          background: "rgba(255, 183, 77, 0.2)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      ></div>

      <div
        className="p-5 rounded-4 shadow-lg"
        style={{
          backgroundColor: "rgba(28,28,28,0.95)",
          maxWidth: "500px",
          width: "100%",
          zIndex: 2,
        }}
      >
        <h2 className="fw-bold mb-3 text-center">
          <span className="text-warning">Sign In</span>
        </h2>
        <p className="text-secondary text-center mb-5">
          Please enter your credentials
        </p>

        <form className="d-flex flex-column gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="fw-semibold text-warning mb-2 ms-2">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control shadow-none rounded-pill px-4 py-3 bg-dark text-light border border-secondary"
            />
          </div>

          <div>
            <label className="fw-semibold text-warning mb-2 ms-2">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control shadow-none rounded-pill px-4 py-3 bg-dark text-light border border-secondary"
            />
          </div>

          <button
            type="submit"
            className="btn btn-warning fw-semibold py-3 rounded-pill shadow"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          {error && <p className="text-danger text-center mt-3">{error}</p>}
        </form>
      </div>
    </section>
  );
}

export default SignIn;
