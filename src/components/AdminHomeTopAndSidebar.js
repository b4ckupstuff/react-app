import React from 'react';
import './componentCss/AdminHome.css';

function AdminHomeTopAndSidebar() {
    return (
        <div>
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <div className="navbar-brand col-sm-3 col-md-2 mr-0">THYHEALINGCIRCLEBBEENU</div>
                {/*<input className="form-control form-control-dark w-100" type="text" placeholder="Search"
                       aria-label="Search" />*/}
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <div className="nav-link">Sign out</div>
                    </li>
                </ul>
            </nav>
            <div className="container-fluid">
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                        <div className="sidebar-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <div className="nav-link active">
                                        Numbers <span className="sr-only">(current)</span>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        Arrows
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        Small Arrows
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link">
                                        Planes
                                    </div>
                                </li>
                            </ul>

                            {/*<h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                <span>Saved reports</span>
                                <a className="d-flex align-items-center text-muted" href="#">
                                </a>
                            </h6>
                            <ul className="nav flex-column mb-2">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Current month
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Last quarter
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Social engagement
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Year-end sale
                                    </a>
                                </li>
                            </ul>*/}
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default AdminHomeTopAndSidebar;