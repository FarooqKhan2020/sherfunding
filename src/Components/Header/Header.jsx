import React, { useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
    const closeMobileMenu = useCallback(() => {
        const navbarToggle = document.querySelector('.navbar-toggler')
        const navbarCollapse = document.getElementById('navbarNav')

        if (!navbarToggle || !navbarCollapse) return

        const isMobileToggleVisible = window.getComputedStyle(navbarToggle).display !== 'none'
        const isExpanded = navbarToggle.getAttribute('aria-expanded') === 'true'

        if (isMobileToggleVisible && isExpanded) {
            navbarToggle.click()
        }
    }, [])

    return (
        <>
            {/* TOP BAR */}
            <div className="topbar py-2">
                <div className="container d-flex justify-content-between align-items-center flex-wrap">

                    {/* Left Side */}
                    <div className="topbar-left d-flex gap-3 flex-wrap">
                        <span>
                            <i className="bi bi-envelope"></i> info@SherFundingcapitalsolution.com
                        </span>
                        <span>
                            <i className="bi bi-geo-alt"></i> 5940 S Rainbow Blvd, Suite 4101 Las Vegas, NV 89118
                        </span>
                    </div>

                    {/* Right Side */}
                    <div className="topbar-right d-flex align-items-center gap-3">
                        <span>
                            <i className="bi bi-clock"></i> Mon-Fri: 9:00 am to 4:00 pm ET
                        </span>

                        {/* Social Icons */}
                        <div className="social-icons d-flex gap-2">
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-linkedin"></i>
                            <i className="bi bi-pinterest"></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* NAVBAR */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
                <div className="container">

                    {/* Logo */}
                    <NavLink className="navbar-brand fw-bold" to="/">
                        <img src="/logo/logo.png" className="navLogo" alt="SherFunding Capital Solutions" />
                    </NavLink>

                    {/* Mobile Toggle */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Nav Links */}
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav gap-3 text-center">
                            <li className="nav-item">
                                <NavLink end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/" onClick={closeMobileMenu}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/services" onClick={closeMobileMenu}>
                                    Services
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/about" onClick={closeMobileMenu}>
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/contact" onClick={closeMobileMenu}>
                                    Contact Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/applynow" onClick={closeMobileMenu}>
                                    Apply Now
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/checkout" onClick={closeMobileMenu}>
                                    Credit Score
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Right Button */}
                    <div className="d-none d-lg-block">
                        <button
                            className="btn quote-btn"
                            onClick={(e) => (e.target.innerText = "+92 300 1234567")}
                        >
                            Get Free Quote
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;