import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="container-fluid sticky-top px-0">
            <div className="container-fluid topbar bg-dark d-none d-lg-block">
                <div className="container px-0">
                    <div className="topbar-top d-flex justify-content-between flex-lg-wrap">
                        <div className="top-info flex-grow-0">
                            <span className="rounded-circle btn-sm-square bg-primary me-2">
                                <i className="fas fa-bolt text-white" />
                            </span>
                            <div className="pe-2 me-3 border-end border-white d-flex align-items-center">
                                <p className="mb-0 text-white fs-6 fw-normal">What is New</p>
                            </div>
                            <div className="overflow-hidden" style={{ width: 735 }}>
                                <div id="note" className="ps-2">

                                    <Link to="#">
                                        <p className="text-white mb-0 link-hover">
                                            Providing High-Quality Chemotherapy And Supportive Medications At An Affordable Cost
                                        </p>
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className="top-link flex-lg-wrap">
                            <i className="fas fa-calendar-alt text-white border-end border-secondary pe-2 me-2">
                                {" "}
                                <span className="text-body">Tuesday, Sep 12, 2024</span>
                            </i>
                            <div className="d-flex icon">
                                <p className="mb-0 text-white me-2">Follow Us:</p>
                                <Link to="" className="me-2">
                                    <i className="fab fa-facebook-f text-body link-hover" />
                                </Link>
                                <Link to="" className="me-2">
                                    <i className="fab fa-twitter text-body link-hover" />
                                </Link>
                                <Link to="" className="me-2">
                                    <i className="fab fa-instagram text-body link-hover" />
                                </Link>
                                <Link to="" className="me-2">
                                    <i className="fab fa-youtube text-body link-hover" />
                                </Link>
                                <Link to="" className="me-2">
                                    <i className="fab fa-linkedin-in text-body link-hover" />
                                </Link>
                                <Link to="" className="me-2">
                                    <i className="fab fa-skype text-body link-hover" />
                                </Link>
                                <Link to="" className="">
                                    <i className="fab fa-pinterest-p text-body link-hover" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-light">
                <div className="container px-0">
                    <nav className="navbar navbar-light navbar-expand-xl">
                        <Link to="/" className="navbar-brand mt-3">
                            <p className="text-primary display-6 mb-2" style={{ lineHeight: 0 }}>
                                X - Y - Z
                            </p>
                            <small className="text-body fw-normal" style={{ letterSpacing: 12 }}>
                                HOSPITAL
                            </small>
                        </Link>
                        <button
                            className="navbar-toggler py-2 px-3"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse"
                        >
                            <span className="fa fa-bars text-primary" />
                        </button>
                        <div
                            className="collapse navbar-collapse bg-light py-3"
                            id="navbarCollapse"
                        >
                            <div className="navbar-nav mx-auto border-top">
                                <Link to="/" className="nav-item nav-link active">
                                    Home
                                </Link>
                                <Link to="/aboutus" className="nav-item nav-link">
                                    About Us
                                </Link>

                                <div className="nav-item dropdown">
                                    <Link
                                        href="#"
                                        className="nav-link dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                    >
                                        Diagnostics
                                    </Link>
                                    <div className="dropdown-menu m-0 bg-secondary  rounded-0">
                                        <Link to="/generalDiagnostic" className="dropdown-item">
                                            General Diagnostic
                                        </Link>
                                        <Link to="/cardiologyDiagnostic" className="dropdown-item">
                                            Cardiology Diagnostic
                                        </Link>
                                        <Link to="oncologyDiagnostic" className="dropdown-item">
                                            Oncology Diagnostic
                                        </Link>

                                    </div>
                                </div>

                                <Link to="/biorepository" className="nav-item nav-link">
                                    Biorepository
                                </Link>
                                <Link to="/oncologyDrugs" className="nav-item nav-link">
                                    Oncology Drugs
                                </Link>
                                <Link to="/accreditations" className="nav-item nav-link">
                                    Accreditations
                                </Link>
                                <Link to="/resources" className="nav-item nav-link">
                                    Resources
                                </Link>
                                <Link to="/contactus" className="nav-item nav-link">
                                    Contact Us
                                </Link>
                            </div>

                        </div>
                    </nav>
                </div>
            </div>
        </div>

    )
}

export default Header