import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; 
import Navbar1 from './Navbar1';

const Apply = () => {
    const { jobId } = useParams(); 
    const [applicationData, setApplicationData] = useState({
        title:'',
        name: '',  
        email: '',
        resume: null,
        education: '',
        tenth: '',
        twelfth: '',
    });
    const [showAlert, setShowAlert] = useState(false); // State to control alert visibility
    const [alertMessage, setAlertMessage] = useState(''); // State to store alert message

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setApplicationData({ ...applicationData, [name]: value });
    };

    const handleFileChange = (event) => {
        setApplicationData({ ...applicationData, resume: event.target.files[0] });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Create the alert message
        const message = `Application submitted successfully!\n\nDetails:\nName: ${applicationData.name}\nEmail: ${applicationData.email}\nResume: ${applicationData.resume.name}\nEducation: ${applicationData.education}\n10th Grade: ${applicationData.tenth}\n12th Grade: ${applicationData.twelfth}`;

        // Save the application data to local storage
        const existingApplications = JSON.parse(localStorage.getItem('applications')) || [];
        existingApplications.push(applicationData);
        localStorage.setItem('applications', JSON.stringify(existingApplications));

        // Show the alert message
        setAlertMessage(message);
        setShowAlert(true);

        // Reset the application data
        setApplicationData({ name: '', email: '', resume: null, education: '', tenth: '', twelfth: '' });
    };

    const closeAlert = () => {
        setShowAlert(false);
    };

    const containerStyle = {
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center', 
        width: '100%', 
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
        width: '100%',
        marginBottom: '15px', 
    };

    const buttonStyle = {
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        padding: '12px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        width: '100%', 
    };

    const alertStyle = {
        position: 'fixed',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#f8d7da',
        color: '#721c24',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)',
        zIndex: 1000,
    };

    return (
        <div style={containerStyle}>
            <Navbar1 /> 

            <div style={cardStyle}>
                <h2 style={titleStyle}>Apply for Job</h2>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                        <label htmlFor="title" style={labelStyle}>JOB TITLE</label>
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            value={applicationData.title}
                            onChange={handleInputChange}
                            required
                            style={inputStyle}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" style={labelStyle}>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={applicationData.name}
                            onChange={handleInputChange}
                            required
                            style={inputStyle}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" style={labelStyle}>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={applicationData.email}
                            onChange={handleInputChange}
                            required
                            style={inputStyle}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="education" style={labelStyle}>Education Qualification</label>
                        <input
                            type="text"
                            className="form-control"
                            name="education"
                            value={applicationData.education}
                            onChange={handleInputChange}
                            required
                            style={inputStyle}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tenth" style={labelStyle}>10th Grade Percentage</label>
                        <input
                            type="text"
                            className="form-control"
                            name="tenth"
                            value={applicationData.tenth}
                            onChange={handleInputChange}
                            required
                            style={inputStyle}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="twelfth" style={labelStyle}>12th Grade Percentage</label>
                        <input
                            type="text"
                            className="form-control"
                            name="twelfth"
                            value={applicationData.twelfth}
                            onChange={handleInputChange}
                            required
                            style={inputStyle}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="resume" style={labelStyle}>Resume</label>
                        <input
                            type="file"
                            className="form-control"
                            name="resume"
                            onChange={handleFileChange}
                            required
                            style={inputStyle}
                        />
                    </div>
                    <button type="submit" style={buttonStyle}>Submit Application</button>
                </form>
            </div>

            {showAlert && (
                <div style={alertStyle}>
                    <p>{alertMessage}</p>
                    <button onClick={closeAlert} style={buttonStyle}>Close</button>
                </div>
            )}
        </div>
    );
};

export default Apply;
