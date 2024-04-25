import React from 'react';
import { MdManageAccounts } from "react-icons/md";
import { IoTicketOutline } from "react-icons/io5";
import { MdOutlineSubscriptions } from "react-icons/md";
import AdminLayout from '../AdminLayout';

const AdminHome = () => {
    return (
        <AdminLayout>
            <main className='admin-container'>
                <div className='admin-title'>
                    <h3>DASHBOARD</h3>
                </div>
                <div className='admin-cards'>
                    <div className='admin-card'>
                        <div className='admin-card-inner'>
                            <h3>Users</h3>
                            <MdManageAccounts className='admin-card_icon' />
                        </div>
                        <h1>300</h1>
                    </div>
                    <div className='admin-card'>
                        <div className='admin-card-inner'>
                            <h3>Tickets</h3>
                            <IoTicketOutline className='admin-card_icon' />
                        </div>
                        <h1>12</h1>
                    </div>
                    <div className='admin-card'>
                        <div className='admin-card-inner'>
                            <h3>Subscription</h3>
                            <MdOutlineSubscriptions className='admin-card_icon' />
                        </div>
                        <h1>33</h1>
                    </div>
                </div>
            </main>
        </AdminLayout>
    );
};

export default AdminHome;
