import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/authSlice";

function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/signIn");
  };

  return (
    <div style={{ height: "10vh" }}>
      <div className="navbar d-flex justify-content-between align-items-center px-5 py-3">
        <div className="logoName fw-bold fs-4 d-flex align-items-center">
          <Link
            to="/"
            className="d-flex align-items-center text-light text-decoration-none"
          >
            Savory<span className="text-warning">Notes</span>
            <img
              style={{ height: "40px", marginLeft: "8px" }}
              src="https://images.icon-icons.com/1286/PNG/512/53_85311.png"
              alt="logo"
            />
          </Link>
        </div>

        <div className="links">
          <ul className="d-flex list-unstyled gap-4 m-0 text-light fw-semibold">
            <li className="nav-link">
              <Link to="/" className="text-light text-decoration-none">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/about" className="text-light text-decoration-none">About</Link>
            </li>
            <li className="nav-link">
              <Link to="/blogs" className="text-light text-decoration-none">Blogs</Link>
            </li>
            <li className="nav-link">
              <Link to="/recipes" className="text-light text-decoration-none">Recipes</Link>
            </li>
            <li className="nav-link">
              <Link to="/favorite" className="text-light text-decoration-none">Favorites</Link>
            </li>
          </ul>
        </div>

        <div>
          {!isAuthenticated ? (
            <Link to="/signIn">
              <button
                className="btn px-5 rounded-pill fw-semibold"
                style={{
                  backgroundColor: "#FFB74D",
                  color: "#2e2e2e",
                  border: "none",
                  boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  zIndex: 2,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 12px 20px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 15px rgba(0,0,0,0.2)";
                }}
              >
                Sign In
              </button>
            </Link>
          ) : (
            <button
              className="btn btn-danger px-5 rounded-pill fw-semibold"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
