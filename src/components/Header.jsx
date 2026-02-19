import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
                <a className="navbar-brand" href="#">Magam<span className="text-blue">it</span></a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="#">Features</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>

                </div>
            </nav>


            <section className="flex-grow-1 container py-4">

                <div className="container my-5">

                    <div className="row align-items-center">
                        <div className="row mb-4">
                            <div className="col-md-6 align-content-center">
                                <h2>Welcome to Magam<span className="text-blue">it</span></h2>

                                <p className="lead">We specialize in creating custom solutions for Microsoft Dynamics
                                    365
                                    Business Central. Our tools and add‑ins enhance your ERP experience, making it more
                                    powerful and user‑friendly.</p>

                            </div>
                            <div className="col-md-6">
                                <img src="./oksana-demenko-gkzP5awCZAQ-unsplash.jpg"
                                     className="img-fluid rounded w-auto"
                                     alt="Business IT Solutions"/>
                            </div>
                        </div>
                    </div>


                </div>


            </section>
        </div>
    );
}

export default Header;