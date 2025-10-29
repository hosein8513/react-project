import React from 'react';
import { NavLink } from 'react-router';

const Sidebaritem = ({to,children}) => {
    return (
        <li>
            <NavLink to={to} className={({isActive})=>
            `hover:bg-blue-100 p-2 rounded-lg w-full h-full block ${isActive? "bg-blue-300":""}`}>{children}</NavLink>
        </li>
    );
};

export default Sidebaritem;