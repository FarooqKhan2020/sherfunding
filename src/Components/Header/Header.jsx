import React, { useState, useRef, useEffect, useCallback } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
    FaChevronDown,
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaLinkedinIn,
    FaPinterestP,
} from 'react-icons/fa';
import { FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isServicesActive = location.pathname.startsWith('/services');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const closeMobileMenu = useCallback(() => {
        const navbarToggle = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarToggle && navbarCollapse) {
            const isVisible = window.getComputedStyle(navbarToggle).display !== 'none';
            const isExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
            if (isVisible && isExpanded) {
                navbarToggle.click();
            }
        }
    }, []);

    const toggleDropdown = (e) => {
        e.stopPropagation();
        setDropdownOpen(prev => !prev);
    };

    return (
        <>
            {/* TOP BAR */}
            {/* <div className="topbar py-2">
                <div className="container d-flex justify-content-between align-items-center flex-wrap">
                    <div className="topbar-left d-flex gap-3 flex-wrap">
                            <a href="mailto:info@bbcapitalsolutions.com">
                        <span><FiMail className="topbar-icon" /> info@bbcapitalsolutions.com</span>
                            </a>
                        <a href="tel:646-306-9371" className="topbar-phone-link">
                            <FaPhoneAlt className="topbar-icon" />
                            <span className="phone-number d-none d-lg-block">646-306-9371</span>
                            <span className="call-now-text d-block d-lg-none">Call Now</span>
                        </a>
                        <span className="d-none d-lg-block">
                            <FiMapPin className="topbar-icon" /> 869 Walnut StMacon, GA 31201, USA
                        </span>
                    </div>
                    <div className="topbar-right d-flex align-items-center gap-3">
                        <span className="d-none d-lg-block">
                            <FiClock className="topbar-icon" /> Mon-Fri: 9:00 am to 6:00 pm PST
                        </span>
                    </div>
                </div>
            </div> */}

            {/* NAVBAR */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-1">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold" to="/" onClick={closeMobileMenu}>
                        <img src="/logo/logo.jpg" className="navLogo" alt="Better Business Capital Solutions" />
                    </NavLink>

                    <button
                        className="navbar-toggler custom-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-expanded="false"
                    >
                        <span className="navbar-toggler-icon"><span></span></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav gap-3 text-center">
                            <li className="nav-item">
                                <NavLink end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/" onClick={closeMobileMenu}>
                                    Home
                                </NavLink>
                            </li>

                          <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/about" onClick={closeMobileMenu}>
                                    About Us
                                </NavLink>
                            </li>

                            {/* Custom React Dropdown */}
                            <li className="nav-item dropdown" ref={dropdownRef}>
                                <span
                                    className={`nav-link dropdown-toggle ${isServicesActive ? 'active' : ''}`}
                                    role="button"
                                    onClick={toggleDropdown}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Solutions
                                    <FaChevronDown className={`dropdown-arrow ${dropdownOpen ? 'rotated' : ''}`} />
                                </span>
                                <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                                    <li><NavLink className="dropdown-item" to="/services/collateral-loans" onClick={() => { setDropdownOpen(false); closeMobileMenu(); }}>Collateral Loans</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/services/sba-7a-loan" onClick={() => { setDropdownOpen(false); closeMobileMenu(); }}>SBA 7A Loan</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/services/small-business-loans" onClick={() => { setDropdownOpen(false); closeMobileMenu(); }}>Small Business Loans</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/services/equipment-financing" onClick={() => { setDropdownOpen(false); closeMobileMenu(); }}>Equipment Financing</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/services/working-capital" onClick={() => { setDropdownOpen(false); closeMobileMenu(); }}>Working Capital</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/services/merchant-cash-advances" onClick={() => { setDropdownOpen(false); closeMobileMenu(); }}>Merchant Cash Advance</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/checkout" end onClick={() => { setDropdownOpen(false); closeMobileMenu(); }}>Credit Score Improvement</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/services" end onClick={() => { setDropdownOpen(false); closeMobileMenu(); }}>All Services</NavLink></li>
                                </ul>
                            </li>

                            {/* <li className="nav-item">
                                <NavLink end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/checkout" onClick={closeMobileMenu}>
                                    Credit Score Improvement
                                </NavLink>
                            </li> */}
                            <li className="nav-item d-block d-lg-none">
                                <NavLink end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/applynow" onClick={closeMobileMenu}>
                                    Apply Now
                                </NavLink>
                            </li>
                              <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/contact" onClick={closeMobileMenu}>
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="d-none d-lg-block">
                        <div className="d-none d-lg-flex align-items-center gap-3">
                            <button className="btn quote-btn" onClick={() => navigate('/applynow')}>
                                Apply Now
                            </button>
                            <a href="tel:646-306-9371" className="icon-btn"><FaPhoneAlt /></a>
                            <a href="mailto:info@bbcapitalsolutions.com" className="icon-btn"><FaEnvelope /></a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;