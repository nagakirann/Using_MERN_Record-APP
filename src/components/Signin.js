import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './signin.css';

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSignin = async () => {
        try {
            const response = await axios.post("http://localhost:3001/user/login", {
                username: email,
                password: password
            });
            let data = response.data;
            localStorage.setItem("token", data.token);
            window.location = "/";
        } catch (error) {
            console.log(error.response.data.message);
            setErrorMessage(error.response.data.message);
        }
    };

    return (
        <div>
            <div className="signin-container">
                <h6>
                    Welcome to Record App. Sign in below
                </h6>
            </div>
            <div className="signin-form">
                <input
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    placeholder="Email"
                    className="input-field"
                    required
                />
                <input
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                    placeholder="Password"
                    className="input-field"
                    required
                />
                <button
                    className="signin-button"
                    onClick={handleSignin}
                >
                    Signin
                </button>
                <Link to="/signup" className="signup-link">
                    Create an account
                </Link>
                {errorMessage && (
                    <div className="error-message">{errorMessage}</div>
                )}
            </div>
        </div>
    );
}

export default Signin;

