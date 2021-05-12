import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css'
const Friend = (props) => {
    // console.log(props)
   const {name, email,id} = props.friend;
   const history = useHistory();
   const handleClick = (friendId) => {
       const url = `/friend/${friendId}`
       history.push(url)
   }
    return (
        <div className = "friend">
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>
            <Link to={`/friend/${id}`}>Detail Information {id}</Link>
            <button onClick={()=>handleClick(id)}>Click</button>
        </div>
    );
};

export default Friend;