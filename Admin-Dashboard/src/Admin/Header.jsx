import React from 'react'
import { CiMail } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";


function Header({ OpenSidebar }) {
    return (
        <header className='admin-header'>
            <div className='header-left'>
            </div>
            <div className='header-right'>
                <CgProfile className='icon' />
                <CiMail className='icon' />
                <IoMdNotificationsOutline className='icon' />
            </div>
        </header>
    )
}

export default Header
