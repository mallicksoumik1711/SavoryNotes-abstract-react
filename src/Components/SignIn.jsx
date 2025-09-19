
import { useNavigate } from "react-router-dom";

function SignIn() {

    const navigate = useNavigate();

    return (
        <section
            className="d-flex flex-column justify-content-center align-items-center text-light"
            style={{
                minHeight: "80vh",
                background: "linear-gradient(135deg, #2e2e2e 0%, #4b3f2f 100%)"
            }}
        >
            <div
                className="p-5 rounded shadow-lg"
                style={{
                    backgroundColor: "rgba(28,28,28,0.9)",
                    maxWidth: "800px",
                    width: "100%"
                }}
            >
                <h2 className="text-center mb-4 fw-bold">
                    Welcome to Savory<span className="text-warning">Notes</span>
                </h2>
                <p className="text-center text-light mb-4">
                    Choose your role to continue
                </p>

                <div className="d-flex flex-column gap-3">
                    <button className="btn btn-warning fw-semibold py-3 rounded-pill shadow" onClick={()=>navigate("/adminSignIn")}>
                        Sign In as Admin
                    </button>

                    <button className="btn btn-outline-warning fw-semibold py-3 rounded-pill text-light shadow">
                        Sign In as User
                    </button>
                </div>
            </div>
        </section>
    );
}

export default SignIn;
