import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    
    return (
        <div>
            <NavLink style={{marginRight: '10px'}} to="/home">Home</NavLink>
            <NavLink style={{marginRight: '10px'}} to="/about">About</NavLink>
            <NavLink style={{marginRight: '10px'}} to="/friends">Friends</NavLink>
        </div>
    );
};

export default Header;