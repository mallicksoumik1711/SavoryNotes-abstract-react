
// import { Link } from "react-router-dom";

// function HeroSection() {

//     return (
//         <>
//             <section
//                 className="hero-section position-relative overflow-hidden d-flex align-items-center"
//                 style={{
//                     minHeight: "90vh",
//                     background: "linear-gradient(135deg, #2e2e2e 0%, #4b3f2f 100%)",
//                     color: "#F5F5F5"
//                 }}
//             >
//                 <div
//                     className="shape-overlay position-absolute"
//                     style={{
//                         right: "-150px",
//                         top: "20%",
//                         width: "500px",
//                         height: "500px",
//                         background: "rgba(255, 183, 77, 0.2)",
//                         borderRadius: "50%",
//                         transform: "rotate(45deg)",
//                         pointerEvents: "none",
//                     }}
//                 ></div>

//                 <div
//                     className="container d-flex flex-column flex-md-row align-items-center justify-content-between"
//                 >
//                     <div
//                         className="hero-text"
//                         style={{ maxWidth: "600px", zIndex: 2 }}
//                     >
//                         <h1 className="display-4 fw-bold mb-3" style={{ lineHeight: 1.2 }}>
//                             Learn cooking the <span style={{ color: "#FFB74D" }}>simple way</span>.
//                         </h1>
//                         <p className="lead mb-4 text-light" style={{ fontSize: "1.2rem" }}>
//                             Dive into <span style={{ color: "#FFB74D", fontWeight: "600" }}>100+ delicious recipes</span> from across the world.
//                             Crafted for ease, flavor, and joy. Start your culinary adventure today!
//                         </p>
//                         <Link to="/signIn">
//                             <button
//                                 className="btn px-5 py-3 rounded-pill fw-semibold"
//                                 style={{
//                                     backgroundColor: "#FFB74D",
//                                     color: "#2e2e2e",
//                                     border: "none",
//                                     boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
//                                     transition: "transform 0.2s, box-shadow 0.2s",
//                                     zIndex: 2
//                                 }}
//                                 onMouseEnter={e => {
//                                     e.currentTarget.style.transform = "translateY(-3px)";
//                                     e.currentTarget.style.boxShadow = "0 12px 20px rgba(0,0,0,0.3)";
//                                 }}
//                                 onMouseLeave={e => {
//                                     e.currentTarget.style.transform = "translateY(0)";
//                                     e.currentTarget.style.boxShadow = "0 8px 15px rgba(0,0,0,0.2)";
//                                 }}
//                             >
//                                 Get Started →
//                             </button>
//                         </Link>
//                     </div>

//                     <div
//                         className="hero-image mt-5 mt-md-0"
//                         style={{ zIndex: 2 }}
//                     >
//                         <img
//                             src="https://cdn.prod.website-files.com/682d1c6b3c16bb956eafd6aa/682d1c6b3c16bb956eafda8a_63158fe13a6379546cdc4dcb_DrawKit0026_Cooking_%2526_Food_Banner.png"
//                             alt="Chef at work"
//                             style={{
//                                 maxHeight: "400px",
//                                 width: "auto",
//                                 borderRadius: "20px",
//                                 boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
//                             }}
//                         />
//                     </div>
//                 </div>
//             </section>
//             <section
//                 style={{
//                     position: "relative",
//                     background: "linear-gradient(135deg, #1c1c1c 0%, #2e2e2e 100%)",
//                     color: "#F5F5F5",
//                     overflow: "hidden",
//                 }}
//             >
//                 <div
//                     style={{
//                         position: "absolute",
//                         top: "-60px",
//                         left: "-100px",
//                         width: "300px",
//                         height: "300px",
//                         background: "rgba(255,183,77,0.12)",
//                         borderRadius: "50%",
//                         filter: "blur(90px)",
//                         zIndex: 0,
//                     }}
//                 ></div>
//                 <div
//                     style={{
//                         position: "absolute",
//                         bottom: "-120px",
//                         right: "-150px",
//                         width: "400px",
//                         height: "400px",
//                         background: "rgba(255,183,77,0.18)",
//                         borderRadius: "50%",
//                         filter: "blur(120px)",
//                         zIndex: 0,
//                     }}
//                 ></div>

//                 <svg
//                     style={{ display: "block" }}
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 100 1000 140"
//                 >
//                     <defs>
//                         <linearGradient id="myGradient" x1="0%" y1="100%" x2="0%" y2="0%">
//                             <stop offset="0%" stopColor="#2e2e2e" />
//                             <stop offset="100%" stopColor="#4b3f2f" /> 
//                         </linearGradient>
//                     </defs>

//                     <path
//                         fill="url(#myGradient)"
//                         fillOpacity="1"
//                         d="M0,192L48,170.7C96,149,192,107,288,122.7C384,139,480,213,576,224C672,235,768,181,864,160C960,139,1056,149,1152,149.3C1248,149,1344,139,1392,133.3L1440,128L1440,0L0,0Z"
//                     ></path>
//                 </svg>



//                 <div className="container position-relative" style={{ zIndex: 2 }}>
//                     <h2
//                         className="fw-bold mb-5 text-center"
//                         style={{
//                             color: "#FFB74D",
//                             fontSize: "2.5rem",
//                             textShadow: "0 3px 10px rgba(0,0,0,0.4)",
//                             letterSpacing: "1px",
//                         }}
//                     >
//                         Deep dive into recipes
//                     </h2>

//                     <div className="cards d-flex flex-wrap gap-4 justify-content-center mb-5">
//                         <div className="card" style={{ width: "18rem" }}>
//                             <img src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
//                             <div className="card-body">
//                                 <p className="card-text">
//                                     Some quick example text to build on the card title and make up the bulk of the card’s content.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="card" style={{ width: "18rem" }}>
//                             <img src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
//                             <div className="card-body">
//                                 <p className="card-text">
//                                     Some quick example text to build on the card title and make up the bulk of the card’s content.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="card" style={{ width: "18rem" }}>
//                             <img src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
//                             <div className="card-body">
//                                 <p className="card-text">
//                                     Some quick example text to build on the card title and make up the bulk of the card’s content.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="card" style={{ width: "18rem" }}>
//                             <img src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
//                             <div className="card-body">
//                                 <p className="card-text">
//                                     Some quick example text to build on the card title and make up the bulk of the card’s content.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="card" style={{ width: "18rem" }}>
//                             <img src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
//                             <div className="card-body">
//                                 <p className="card-text">
//                                     Some quick example text to build on the card title and make up the bulk of the card’s content.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="card" style={{ width: "18rem" }}>
//                             <img src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
//                             <div className="card-body">
//                                 <p className="card-text">
//                                     Some quick example text to build on the card title and make up the bulk of the card’s content.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="card" style={{ width: "18rem" }}>
//                             <img src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
//                             <div className="card-body">
//                                 <p className="card-text">
//                                     Some quick example text to build on the card title and make up the bulk of the card’s content.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="card" style={{ width: "18rem" }}>
//                             <img src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
//                             <div className="card-body">
//                                 <p className="card-text">
//                                     Some quick example text to build on the card title and make up the bulk of the card’s content.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </section>

//         </>
//     );
// }

// export default HeroSection;


import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <>
            <style>
                {`
                /* Bootstrap card hover styles */
                .cards .card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    cursor: pointer;
                }
                .cards .card:hover {
                    transform: translateY(-10px) scale(1.03);
                    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.35);
                    z-index: 5;
                }
                .cards .card img {
                    transition: transform 0.4s ease;
                    height: 200px;       /* 🔑 Fix image height */
                    object-fit: cover;   /* 🔑 Crop to fit without stretching */
                    width: 100%;         /* 🔑 Always fill card width */
                }
                .cards .card:hover img {
                    transform: scale(1.05);
                }
                `}
            </style>

            <section
                className="hero-section position-relative overflow-hidden d-flex align-items-center"
                style={{
                    minHeight: "90vh",
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

                <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
                    <div className="hero-text" style={{ maxWidth: "600px", zIndex: 2 }}>
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

                    <div className="hero-image mt-5 mt-md-0" style={{ zIndex: 2 }}>
                        <img
                            src="https://cdn.prod.website-files.com/682d1c6b3c16bb956eafd6aa/682d1c6b3c16bb956eafda8a_63158fe13a6379546cdc4dcb_DrawKit0026_Cooking_%2526_Food_Banner.png"
                            alt="Chef at work"
                            className="img-fluid rounded shadow"
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

            <section
                style={{
                    position: "relative",
                    background: "linear-gradient(135deg, #1c1c1c 0%, #2e2e2e 100%)",
                    color: "#F5F5F5",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "-60px",
                        left: "-100px",
                        width: "300px",
                        height: "300px",
                        background: "rgba(255,183,77,0.12)",
                        borderRadius: "50%",
                        filter: "blur(90px)",
                        zIndex: 0,
                    }}
                ></div>
                <div
                    style={{
                        position: "absolute",
                        bottom: "-120px",
                        right: "-150px",
                        width: "400px",
                        height: "400px",
                        background: "rgba(255,183,77,0.18)",
                        borderRadius: "50%",
                        filter: "blur(120px)",
                        zIndex: 0,
                    }}
                ></div>

                <svg
                    style={{ display: "block" }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 100 1000 140"
                >
                    <defs>
                        <linearGradient id="myGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                            <stop offset="0%" stopColor="#2e2e2e" />
                            <stop offset="100%" stopColor="#4b3f2f" />
                        </linearGradient>
                    </defs>

                    <path
                        fill="url(#myGradient)"
                        fillOpacity="1"
                        d="M0,192L48,170.7C96,149,192,107,288,122.7C384,139,480,213,576,224C672,235,768,181,864,160C960,139,1056,149,1152,149.3C1248,149,1344,139,1392,133.3L1440,128L1440,0L0,0Z"
                    ></path>
                </svg>

                <div className="container position-relative" style={{ zIndex: 2 }}>
                    <h2
                        className="fw-bold mb-5 text-center"
                        style={{
                            color: "#FFB74D",
                            fontSize: "2.5rem",
                            textShadow: "0 3px 10px rgba(0,0,0,0.4)",
                            letterSpacing: "1px",
                        }}
                    >
                        Deep dive into recipes
                    </h2>

                    <div className="cards d-flex flex-wrap gap-4 justify-content-center mb-5">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://images.pexels.com/photos/33985911/pexels-photo-33985911.jpeg" className="card-img-top" alt="Food 1" />
                            <div className="card-body"><p className="card-text">Some quick example text...</p></div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://images.pexels.com/photos/33986945/pexels-photo-33986945.jpeg" className="card-img-top" alt="Food 2" />
                            <div className="card-body"><p className="card-text">Some quick example text...</p></div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://images.pexels.com/photos/33976796/pexels-photo-33976796.jpeg" className="card-img-top" alt="Food 3" />
                            <div className="card-body"><p className="card-text">Some quick example text...</p></div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://images.pexels.com/photos/33952637/pexels-photo-33952637.jpeg" className="card-img-top" alt="Food 4" />
                            <div className="card-body"><p className="card-text">Some quick example text...</p></div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg" className="card-img-top" alt="Food 5" />
                            <div className="card-body"><p className="card-text">Some quick example text...</p></div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg" className="card-img-top" alt="Food 6" />
                            <div className="card-body"><p className="card-text">Some quick example text...</p></div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://images.pexels.com/photos/1051399/pexels-photo-1051399.jpeg" className="card-img-top" alt="Food 7" />
                            <div className="card-body"><p className="card-text">Some quick example text...</p></div>
                        </div>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg" className="card-img-top" alt="Food 8" />
                            <div className="card-body"><p className="card-text">Some quick example text...</p></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroSection;
