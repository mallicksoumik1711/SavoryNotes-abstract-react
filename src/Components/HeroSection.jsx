
import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <section
            className="hero-section position-relative overflow-hidden d-flex align-items-center"
            style={{
                minHeight: "80vh",
                background: "linear-gradient(135deg, #2e2e2e 0%, #4b3f2f 100%)",
                color: "#F5F5F5"
            }}
        >
            <div
                className="shape-overlay position-absolute"
                style={{
                    right: "-150px",
                    top: "20%",
                    width: "500px",
                    height: "500px",
                    background: "rgba(255, 183, 77, 0.2)",
                    borderRadius: "50%",
                    transform: "rotate(45deg)",
                    pointerEvents: "none",
                }}
            ></div>

            <div
                className="container d-flex flex-column flex-md-row align-items-center justify-content-between"
            >
                <div
                    className="hero-text"
                    style={{ maxWidth: "600px", zIndex: 2 }}
                >
                    <h1 className="display-4 fw-bold mb-3" style={{ lineHeight: 1.2 }}>
                        Learn cooking the <span style={{ color: "#FFB74D" }}>simple way</span>.
                    </h1>
                    <p className="lead mb-4 text-light" style={{ fontSize: "1.2rem" }}>
                        Dive into <span style={{ color: "#FFB74D", fontWeight: "600" }}>100+ delicious recipes</span> from across the world.
                        Crafted for ease, flavor, and joy. Start your culinary adventure today!
                    </p>
                    <Link to="/signIn">
                        <button
                            className="btn px-5 py-3 rounded-pill fw-semibold"
                            style={{
                                backgroundColor: "#FFB74D",
                                color: "#2e2e2e",
                                border: "none",
                                boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
                                transition: "transform 0.2s, box-shadow 0.2s",
                                zIndex: 2
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = "translateY(-3px)";
                                e.currentTarget.style.boxShadow = "0 12px 20px rgba(0,0,0,0.3)";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 8px 15px rgba(0,0,0,0.2)";
                            }}
                        >
                            Get Started →
                        </button>
                    </Link>
                </div>

                <div
                    className="hero-image mt-5 mt-md-0"
                    style={{ zIndex: 2 }}
                >
                    <img
                        src="https://cdn.prod.website-files.com/682d1c6b3c16bb956eafd6aa/682d1c6b3c16bb956eafda8a_63158fe13a6379546cdc4dcb_DrawKit0026_Cooking_%2526_Food_Banner.png"
                        alt="Chef at work"
                        style={{
                            maxHeight: "400px",
                            width: "auto",
                            borderRadius: "20px",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
