import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './signup.css';

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSignup = async () => {
        try {
            const response = await axios.post("http://localhost:3001/user/signup", {
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
            <div className="signup-container">
                <h6>
                    Welcome to Record App. Sign up below
                </h6>
            </div>
            <div className="signup-form">
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
                    className="signup-button"
                    onClick={handleSignup}
                >
                    Signup
                </button>
                <Link to="/signin" className="signin-link">
                    Already have an account
                </Link>
                {errorMessage && (
                    <div className="error-message">{errorMessage}</div>
                )}
            </div>
        </div>
    );
}

export default Signup;
