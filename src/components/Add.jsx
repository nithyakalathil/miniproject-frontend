import axios from 'axios';
import React, { useState } from 'react';
import Navbar from './Navbar';

const Add = () => {
    const [data, changedata] = useState({
        title: '',
        company: '',
        description: '',
        location: '',
        salary: '',
        employmentType: '',
        requirements: '',
        responsibilities: '',
        jobid:''
    });

    const inputHandler = (event) => {
        changedata({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = async () => {
        try {
            const response = await axios.post("http://localhost:8080/add", data);
            console.log(response.data);
            if (response.data.status === "Success") {
                alert("Job added successfully");
                changedata({ 
                    title: '',
                    company: '',
                    description: '',
                    location: '',
                    salary: '',
                    employmentType: '',
                    requirements: '',
                    responsibilities: '',
                });
            } else {
                alert("Error: " + response.data.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while adding the job.");
        }
        console.log(data);
    };

    const containerStyle = {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
    };

    const cardStyle = {
        backgroundColor: '#ffffff', 
        borderRadius: '15px',
        padding: '30px', 
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '600px',
    };

    const titleStyle = {
        color: '#007bff',
        textAlign: 'center',
        marginBottom: '20px',
        fontWeight: 'bold', 
        fontSize: '24px', 
    };

    const labelStyle = {
        color: '#495057',
        fontWeight: '600', 
    };

    const inputStyle = {
        border: '2px solid #007bff',
        borderRadius: '5px',
        padding: '12px',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        width: '100%', 
    };

    const textareaStyle = {
        ...inputStyle,
        height: '100px',
        resize: 'none', 
    };

    const buttonStyle = {
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        padding: '12px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s, transform 0.2s',
        marginTop: '15px', 
    };

    const buttonHoverStyle = {
        ...buttonStyle,
        backgroundColor: '#0056b3',
        transform: 'scale(1.05)', 
    };

    return (
        <div>
            <Navbar style={{ marginBottom: '20px' }} /> {}
            <div style={containerStyle}>
                <div style={cardStyle}>
                    <h2 style={titleStyle}>Add Job</h2>
                    <div className="row g-3">
                   
                        <div className="col-12">
                            <label htmlFor="title" className="form-label" style={labelStyle}>Job Title</label>
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                value={data.title}
                                onChange={inputHandler}
                                required
                                style={inputStyle}
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="company" className="form-label" style={labelStyle}>Company Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="company"
                                value={data.company}
                                onChange={inputHandler}
                                required
                                style={inputStyle}
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="description" className="form-label" style={labelStyle}>Job Description</label>
                            <textarea
                                className="form-control"
                                name="description"
                                value={data.description}
                                onChange={inputHandler}
                                required
                                style={textareaStyle}
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="location" className="form-label" style={labelStyle}>Location</label>
                            <input
                                type="text"
                                className="form-control"
                                name="location"
                                value={data.location}
                                onChange={inputHandler}
                                required
                                style={inputStyle}
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="salary" className="form-label" style={labelStyle}>Salary</label>
                            <input
                                type="text"
                                className="form-control"
                                name="salary"
                                value={data.salary}
                                onChange={inputHandler}
                                required
                                style={inputStyle}
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="employmentType" className="form-label" style={labelStyle}>Employment Type</label>
                            <select
                                className="form-control"
                                name="employmentType"
                                value={data.employmentType}
                                onChange={inputHandler}
                                required
                                style={inputStyle}
                            >
                                <option value="">Select</option>
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Contract">Contract</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <label htmlFor="requirements" className="form-label" style={labelStyle}>Requirements</label>
                            <textarea
                                className="form-control"
                                name="requirements"
                                value={data.requirements}
                                onChange={inputHandler}
                                style={textareaStyle}
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="responsibilities" className="form-label" style={labelStyle}>Responsibilities</label>
                            <textarea
                                className="form-control"
                                name="responsibilities"
                                value={data.responsibilities}
                                onChange={inputHandler}
                                style={textareaStyle}
                            />
                        </div>
                        <div className="col-12 text-center">
                            <button 
                                style={buttonStyle} 
                                onClick={readValue} 
                                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Add; 