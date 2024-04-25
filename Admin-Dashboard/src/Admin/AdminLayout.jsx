import React from 'react'
import Header from "./Header";
import './Admin.css'
import Sidebar from './Sidebar/Sidebar';

const AdminLayout = ({ children }) => {
    return (
        <>
            <div className="admin-grid">
                <Header />
                <Sidebar>
                    {children}
                </Sidebar>
            </div>
        </>
    );
};

export default AdminLayout