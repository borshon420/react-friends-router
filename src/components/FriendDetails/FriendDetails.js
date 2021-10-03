import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetails = () => {
    const {friendId} = useParams()
    const [friend, setFriend] = useState({})
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])
    
    const history = useHistory()
    function handleClick() {
        history.push("/friends");
      }
    return (
        <div>
            <h2>{friend.name}</h2>
            <h4>{friend.phone}</h4>
            <p><small>{friend.website}</small></p>
            <p>{friend.address?.city}</p>
            <button onClick={handleClick}>Go to friends</button>
        </div>
    );
};

export default FriendDetails;