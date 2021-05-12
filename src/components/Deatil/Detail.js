import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Detail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({})
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(response => response.json())
        .then(data =>setFriend(data))
    });
    const {name, phone, website} = friend;
    return (
        <div>
            <h1>ID:{friendId}</h1>
             <h1>{name}</h1>
            <p>{phone}</p>
            <p>{website}</p> 
            
        </div>
    );
};

export default Detail;