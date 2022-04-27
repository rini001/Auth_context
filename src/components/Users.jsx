import React, { useContext, useEffect, useState } from 'react';
import {
    Navigate, Link
} from 'react-router-dom';
import {
    AuthContext
} from '../contexts/AuthContext';

export const Users = () => {
    const {
        token,
        isAuth
    } = useContext(AuthContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://reqres.in/api/users?page=2", {
            headers: {
                "Auth": token
            }
        })
        .then((response) => response.json())
        .then(data => setUsers(data.data));
    }, []);

    if(!isAuth) {
        return <div>
            You're not authenticated. 
            <Link to="/login">Please login</Link>
        </div>
    }
    return (
    <div>
        <h1>I'm in Users page</h1>
        {
            users.map(user => (<div style={{border: '1 px solid red'}}>
                <p>{user.first_name}</p>
                <p>{user.email}</p>
                <img src={user.avatar} alt=""/>
                <Link to={`/users/${user.id}`}>More details...</Link>
            </div>))
        }
    </div>);
}