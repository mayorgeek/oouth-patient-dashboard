import React from 'react';
import {NavLink} from "react-router-dom";

function SideBar() {

    const logout = (event) => {
        event.preventDefault();
        localStorage.clear();
        window.location.href = "http://localhost:3000/auth/login";
    };

    return (
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="app-brand demo">
                <a href="index.html" className="app-brand-link">
                    <span className="app-brand-text demo menu-text fw-bolder ms-2">Patient Dashboard</span>
                </a>

                <a href="javascript:void(0);"
                   className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                    <i className="bx bx-chevron-left bx-sm align-middle"></i>
                </a>
            </div>

            <div className="menu-inner-shadow"></div>

            <ul className="menu-inner py-1">
                <li className="menu-item">
                    <NavLink to="/home" className="menu-link" end>
                        <i className="menu-icon tf-icons bx bx-home-circle"></i>
                        <div data-i18n="Analytics">Home</div>
                    </NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to="/appointments" className="menu-link" end>
                        <i className="menu-icon tf-icons bx bx-time"></i>
                        <div data-i18n="Analytics">Appointments</div>
                    </NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to="/new-appointment" className="menu-link" end>
                        <i className="menu-icon tf-icons bx bx-time"></i>
                        <div data-i18n="Analytics">Book Appointment</div>
                    </NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to="/transactions" className="menu-link active" end>
                        <i className="menu-icon tf-icons bx bx-transfer"></i>
                        <div data-i18n="Analytics">Transactions</div>
                    </NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to="/payment-page" className="menu-link active" end>
                        <i className="menu-icon tf-icons bx bx-transfer"></i>
                        <div data-i18n="Analytics">Make Payment</div>
                    </NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to="/messages" className="menu-link" end>
                        <i className="menu-icon tf-icons bx bx-message-dots"></i>
                        <div data-i18n="Analytics">Messages</div>
                    </NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to="/profile" className="menu-link" end>
                        <i className="menu-icon tf-icons bx bxs-user-account"></i>
                        <div data-i18n="Analytics">Profile</div>
                    </NavLink>
                </li>
                <li className="menu-item">
                    <a href="#" className="menu-link" onClick={logout}>
                        <i className="menu-icon tf-icons bx bx-log-out"></i>
                        <div data-i18n="Analytics">Logout</div>
                    </a>
                </li>
            </ul>
        </aside>
    );
}

export default SideBar;