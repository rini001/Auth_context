import React, { useEffect, useState } from 'react';
import {
    useParams
} from 'react-router-dom';

export const UsersDetails = () => {
    const {
        userId
    } = useParams();
    const [userState, setUserState] = useState({});
    console.log(userId);
    useEffect(() => {
        fetch(`https://reqres.in/api/users/${userId}`)
        .then((response) => response.json())
        .then(data => setUserState(data.data));
    }, []);
    return (
    <div>
       <div>{userState.email}</div>
       <div>{userId}</div>
       <div>{userState.first_name}</div>
       <div>{userState.last_name}</div>
       <div> <img src={userState.avatar} alt=""/></div>
    </div>);
}