import React, { useState } from 'react';
import './Signin.css'; // Import CSS file
import { useFetch } from '../../hooks/useFetch';

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {data, error, postData} = useFetch('http://localhost/practice/signin','POST')

    const handleSubmit = (event) => {
        event.preventDefault();
        postData ({
            email: email,
            password: password
        });
        console.log(data);
    }

    return (
        <div className="signin-form">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default Signin;
