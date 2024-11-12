import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'; // Assuming CSS is placed in Signup.css

const Signup = () => {

    const [data, changedata] = useState({
        "image":"",
        "sname": "",
        "email": "",
        "phone": "",
        "gender": "",
        "password": "",
        "conf": ""
    });

    const inputHandler = (event) => {
        changedata({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        console.log(data);
        if (data.password === data.conf) {
            axios.post("http://localhost:8080/signup", data).then(
                (response) => {
                    console.log(response.data);
                    if (response.data.status === "Success") {
                        alert("Successfully registered");
                    } else {
                        alert("Error during signup");
                    }
                }
            );
        } else {
            alert("Password and confirmation password do not match");
        }
    };

    return (
        <div className="signup-container">
            <div className="card signup-card p-5 shadow-lg">
                <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#2c3e50', fontSize: '2.5rem' }}>Register</h2>

                <div className="row g-3">
                <div className="col-12 col-sm-6">
                <label htmlFor="image" className="form-label" style={{ fontSize: '1.1rem' }}>image</label>
                <input htmlFor="text" className="form-control form-control-lg" name="image" value={data.image} onChange={inputHandler}placeholder="Enter your image" />
                    </div>
                    <div className="col-12 col-sm-6">
                        <label htmlFor="sname" className="form-label" style={{ fontSize: '1.1rem' }}>Name</label>
                        <input type="text" className="form-control form-control-lg" name="sname" value={data.sname} onChange={inputHandler} placeholder="Enter your name" />
                    </div>
                    <div className="col-12 col-sm-6">
                        <label htmlFor="email" className="form-label" style={{ fontSize: '1.1rem' }}>Email</label>
                        <input type="text" className="form-control form-control-lg" name="email" value={data.email} onChange={inputHandler} placeholder="Enter your email" />
                    </div>
                    <div className="col-12 col-sm-6">
                        <label htmlFor="phone" className="form-label" style={{ fontSize: '1.1rem' }}>Phone</label>
                        <input type="text" className="form-control form-control-lg" name="phone" value={data.phone} onChange={inputHandler} placeholder="Enter your phone" />
                    </div>
                    <div className="col-12 col-sm-6">
                        <label htmlFor="gender" className="form-label" style={{ fontSize: '1.1rem' }}>Gender</label>
                        <input type="text" className="form-control form-control-lg" name="gender" value={data.gender} onChange={inputHandler} placeholder="Enter your gender" />
                    </div>
                    <div className="col-12 col-sm-6">
                        <label htmlFor="password" className="form-label" style={{ fontSize: '1.1rem' }}>Password</label>
                        <input type="password" name="password" className="form-control form-control-lg" value={data.password} onChange={inputHandler} placeholder="Enter your password" />
                    </div>
                    <div className="col-12 col-sm-6">
                        <label htmlFor="conf" className="form-label" style={{ fontSize: '1.1rem' }}>Confirmation Password</label>
                        <input type="password" name="conf" className="form-control form-control-lg" value={data.conf} onChange={inputHandler} placeholder="Confirm your password" />
                    </div>
                    <div className="text-center mt-4">
                        <button className="btn btn-success btn-lg" style={{ width: '100%', fontWeight: 'bold', padding: '0.75rem' }} onClick={readValue}>Register</button>
                    </div>
                    <div className="text-center mt-3">
                        <Link to="/l" className="text-decoration-none" style={{ color: '#3498db', fontSize: '1.1rem' }}>Back to login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
