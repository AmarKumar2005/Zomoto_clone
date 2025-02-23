import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-light navbar-expand navbar-dark">
                <div className="text-bg-secondary container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="zomoto_logo.avif" alt="Logo" width="50" height="25" className="d-inline-block align-text-top" />

                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href='#'>Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href='/pages\Login.jsx'>Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href='#'>SignUp</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
