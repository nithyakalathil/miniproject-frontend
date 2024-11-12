import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Adminsignin = () => {
    const [data, changedata] = useState({
        email: "admin", 
        password: "123" 
    });

    const inputHandler = (event) => {
        changedata({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = async () => {
        console.log(data);
        try {
            const response = await axios.post("http://localhost:8080/adminsignin", data);
            console.log(response.data);
            if (response.data.status === "Success") {
                navigate("/se");
            } else {
                alert("Error: " + response.data.status); 
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred during login. Please try again.");
        }
    };

    const navigate = useNavigate();

    return (
        <div style={styles.backgroundContainer}>
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div 
                    className="card p-4 shadow-lg"  // Reduced padding
                    style={{
                        maxWidth: '400px',  // Reduced max width
                        width: '100%',
                        backgroundColor: 'rgba(255, 255, 254, 0.2)', // Semi-transparent white
                        backdropFilter: 'blur(10px)', // Glass effect
                        borderRadius: '10px', // Rounded corners
                        border: '1px solid rgba(255, 255, 255, 0.3)' // Optional border for more glass effect
                    }}
                >
                    <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#2c3e50', fontSize: '2rem' }}>Login</h2> {/* Reduced font size */}
                    <div className="mb-3"> {/* Reduced margin bottom */}
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
                    <div className="mb-3"> {/* Reduced margin bottom */}
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
                    <div className="text-center mb-4">
                        <button 
                            className="btn btn-primary btn-lg btn-block" 
                            style={{ width: '100%', fontWeight: 'bold', padding: '0.75rem' }} 
                            onClick={readValue}
                        >
                            AdminLogin
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    backgroundContainer: {
        width: '100%',
        height: '100vh',
        backgroundImage: 'url("https://media.istockphoto.com/id/1365132896/vector/subtle-smooth-gradient-sunset-background.jpg?s=612x612&w=0&k=20&c=rNJ0PmwxjiDjFsQMOf3XpseZS8rjusdtVgdajdtZtu4=")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
};

export default Adminsignin;
