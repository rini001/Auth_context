import React, { useState, useContext } from 'react';
import {
    AuthContext
} from '../contexts/AuthContext';

export const Login = () => {
    const {
        login,
    } = useContext(AuthContext);

    const [userDetails, setUserDetails] = useState({
        email: '',
        password: ''
    });
    const handleChange = (event) => {
        const {
            name,
            value
        } = event.target;
        setUserDetails({
            ...userDetails,
            [name]: value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(userDetails.email !== '' && userDetails.password !== '') {
            fetch('https://reqres.in/api/login', {
                method: 'POST',
                body: JSON.stringify(userDetails),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                login(data.token);
            });
        } else {
            alert('Invalid login credentials');
        }
    };

    return (
    <div>
     <form onSubmit={handleSubmit}>
      <h1>Login Page</h1>
      <input
        name="email"
        type="text"
        placeholder="Email"
        value={userDetails.email}
        onChange={handleChange}
      />
      <br />
      <input
        name="password"
        type="text"
        placeholder="Password"
        value={userDetails.password}
        onChange={handleChange}
      />
      <br />
      <input type="submit" value="LOGIN" disabled={userDetails.email === '' || userDetails.password === ''}/>
    </form>
    </div>);
}