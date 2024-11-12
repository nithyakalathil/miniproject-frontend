import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';


const Confirmation = () => {
    const location = useLocation();
    const { message } = location.state || { message: 'No message available' }; // Default message if state is not available

    // Retrieve applications from local storage
    const [applications, setApplications] = React.useState(JSON.parse(localStorage.getItem('applications')) || []);

    const deleteApplication = (index) => {
        // Create a new array without the deleted application
        const updatedApplications = applications.filter((_, i) => i !== index);
        
        // Update local storage
        localStorage.setItem('applications', JSON.stringify(updatedApplications));
        
        // Update state
        setApplications(updatedApplications);
    };

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
    };

    const thStyle = {
        backgroundColor: '#007bff',
        color: '#ffffff',
        padding: '10px',
        textAlign: 'left',
    };

    const tdStyle = {
        border: '1px solid #dddddd',
        padding: '8px',
    };

    const messageStyle = {
        marginBottom: '20px',
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#495057',
    };

    const deleteButtonStyle = {
        backgroundColor: '#dc3545',
        border: 'none',
        borderRadius: '5px',
        color: '#ffffff',
        padding: '5px 10px',
        cursor: 'pointer',
    };

    return (
        <div style={{ padding: '20px' }}>
                        <Navbar style={{ marginBottom: '20px' }} /> {}

            <center><h3>All Applicants:</h3></center>
            {applications.length === 0 ? (
                <p>No applications submitted yet.</p>
            ) : (
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Job Title</th>
                            <th style={thStyle}>Name</th>
                            <th style={thStyle}>Email</th>
                            <th style={thStyle}>10th %</th>
                            <th style={thStyle}>Education</th>
                            <th style={thStyle}>12th %</th>
                            <th style={thStyle}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((app, index) => (
                            <tr key={index}>
                                <td style={tdStyle}>{app.title || 'N/A'}</td>
                                <td style={tdStyle}>{app.name}</td>
                                <td style={tdStyle}>{app.email}</td>
                                <td style={tdStyle}>{app.tenth}</td>
                                <td style={tdStyle}>{app.education}</td>
                                <td style={tdStyle}>{app.twelfth}</td>
                                <td style={tdStyle}>
                                    <button onClick={() => deleteApplication(index)} style={deleteButtonStyle}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Confirmation;
