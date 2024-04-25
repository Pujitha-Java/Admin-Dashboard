import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaThList
} from "react-icons/fa";
import { RiBillFill } from "react-icons/ri";
import { HiOutlineCog } from "react-icons/hi"; // Import HiOutlineCog icon
import { Link } from 'react-router-dom';
import { AiOutlineSafetyCertificate } from "react-icons/ai"; // Import AiOutlineSafetyCertificate icon
import "./Sidebar.css";

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/admin-deployh",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/admin-deployh/management",
            name: "Management",
            icon: <FaUserAlt />
        },
        {
            path: "/admin-deployh/licenses",
            name: "Licenses",
            icon: <FaRegChartBar />
        },
        {
            path: "/admin-deployh/billing",
            name: "Billing",
            icon: <RiBillFill />
        },
        {
            path: "/workspace",
            name: "Product List",
            icon: <FaThList />
        }
    ];

    return (
        <div className="sidebar_admin-container">
            <div style={{ width: isOpen ? "600px" : "50px" }} className="sidebar_admin">
                <div className="top_section">
                    <p style={{ display: isOpen ? "block" : "none" }} className="sidebar_admin-logo highlighted-area">CYBER AI - Security Savant <br />
                        Powered by DEPLOYH.AI</p>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <Link to={item.path} key={index} className="sidebar_admin-link" activeClassName="sidebar_admin-link-active">
                            <div className="sidebar_admin-icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="sidebar_admin-link_text">{item.name}</div>
                        </Link>
                    ))
                }
                <div className="bottom_section">
                    <Link to="/admin-deployh/cyber" className="sidebar_admin-link" activeClassName="sidebar_admin-link-active">
                        <div className="sidebar_admin-icon"><AiOutlineSafetyCertificate /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="sidebar_admin-link_text">Cyber</div>
                    </Link>
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
