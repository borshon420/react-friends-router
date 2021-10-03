import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    
    
    const {name, phone, website, address, id} = props.friend;
    const friendStyle = {
        border: '3px solid goldenrod',
        borderRadius: '10px',
        padding: '20px'

    }
    return (
        <div style={friendStyle}>
            <h1>{name}</h1>
            <h2>{phone}</h2>
            <p><small>{address.city}</small></p>
            <p>Website: {website}</p>
            <Link to={`/friend/${id}`}>Visit</Link>
        </div>
    );
};

export default Friend;