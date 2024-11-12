import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [data, changedata] = useState({
        email: "",
        password: ""
    });

    let navigate = useNavigate(); 

    const inputHandler = (event) => {
        changedata({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        console.log(data);
        axios.post("http://localhost:8080/signin", data).then(
            (response) => {
                console.log(response.data);
                if (response.data.status === "Success") {
                    sessionStorage.setItem("token", response.data.token);
                    sessionStorage.setItem("userid", response.data.userid);
                    navigate("/view");
                } else {
                    alert("Error: " + response.data.message); 
                }
            }
        ).catch((error) => {
            console.error("There was an error!", error);
            alert("Login failed. Please try again.");
        });
    };

    const handleNavigation = () => {
        navigate("/s");  
    };
     const handleNavigater = () => {
        navigate("/e");  
    };

    return (
        <div style={styles.backgroundContainer}>
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div 
                    className="card p-4 shadow-lg"  // Reduced padding
                    style={{
                        maxWidth: '400px', // Decreased max width
                        width: '100%',
                        backgroundColor: 'rgba(255, 255, 254, 0.2)', // Semi-transparent white
                        backdropFilter: 'blur(10px)', // Glass effect
                        borderRadius: '10px', // Rounded corners
                        border: '1px solid rgba(255, 255, 255, 0.3)' // Optional border for more glass effect
                    }}
                >
                    <h2 className="text-center mb-3" style={{ fontWeight: 'bold', color: '#2c3e50', fontSize: '2rem' }}>Login</h2>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label" style={{ fontSize: '1.2rem' }}>Email</label>
                        <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            name="email" 
                            value={data.email} 
                            onChange={inputHandler} 
                            placeholder="Enter your email" 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label" style={{ fontSize: '1.2rem' }}>Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            className="form-control form-control-lg" 
                            value={data.password} 
                            onChange={inputHandler} 
                            placeholder="Enter your password" 
                        />
                    </div>
                    <div className="text-center mb-3">
                        <button 
                            className="btn btn-primary btn-lg btn-block" 
                            style={{ width: '100%', fontWeight: 'bold', padding: '0.75rem' }} 
                            onClick={readValue}
                        >
                            Login
                        </button>
                    </div>
                    <div className="text-center mb-3">
                        <button 
                            className="btn btn-primary btn-lg btn-block" 
                            style={{ width: '100%', fontWeight: 'bold', padding: '0.75rem' }} 
                            onClick={handleNavigation}
                        >
                            AdminLogin
                        </button>
                    </div>
                    <div className="text-center mb-3">
                        <button 
                            className="btn btn-primary btn-lg btn-block" 
                            style={{ width: '100%', fontWeight: 'bold', padding: '0.75rem' }} 
                            onClick={handleNavigater}
                        >
                            Emplogin
                        </button>
                    </div>
                    <div className="text-center">
                        <Link className="text-decoration-none" to="/p" style={{ color: '#3498db', fontSize: '1.1rem' }}>
                            Don't have an account? Register
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    backgroundContainer: {
        width: '100%',
        height: '100vh',
        backgroundImage: 'url("https://i.pinimg.com/736x/5f/56/14/5f56143a4be1c0cab0fb1b86c678f121.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
};

export default Login;
