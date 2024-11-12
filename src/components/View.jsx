import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar1 from './Navbar1';

const View = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filters, setFilters] = useState({
        title: '',
        company: '',
        location: '',
        employmentType: '',
    });
    const navigate = useNavigate();

    const fetchData = () => {
        axios.get("http://localhost:8080/view").then((response) => {
            setData(response.data);
            setFilteredData(response.data); // Set both data and filteredData initially
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const handleSearch = () => {
        const filtered = data.filter((job) =>
            (filters.title === '' || job.title.toLowerCase().includes(filters.title.toLowerCase())) &&
            (filters.company === '' || job.company.toLowerCase().includes(filters.company.toLowerCase())) &&
            (filters.location === '' || job.location.toLowerCase().includes(filters.location.toLowerCase())) &&
            (filters.employmentType === '' || job.employmentType.toLowerCase() === filters.employmentType.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const applyForJob = (jobId) => {
        navigate("/Apply");
    };

    return (
        <div>
            <Navbar1 style={{ marginBottom: '20px' }} />

            <div className="container" style={{ marginTop: '50px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '24px', fontWeight: 'bold', color: '#007bff' }}>
                    Job Information
                </h2>

                {/* Search Filters */}
                <div className="row" style={{ marginBottom: '20px' }}>
                    <div className="col">
                        <input
                            type="text"
                            name="title"
                            placeholder="Job Title"
                            value={filters.title}
                            onChange={handleFilterChange}
                            className="form-control"
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            name="company"
                            placeholder="Company"
                            value={filters.company}
                            onChange={handleFilterChange}
                            className="form-control"
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={filters.location}
                            onChange={handleFilterChange}
                            className="form-control"
                        />
                    </div>
                    <div className="col">
                        <select
                            name="employmentType"
                            value={filters.employmentType}
                            onChange={handleFilterChange}
                            className="form-control"
                        >
                            <option value="">Employment Type</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Contract">Contract</option>
                        </select>
                    </div>
                    <div className="col">
                        <button onClick={handleSearch} className="btn btn-primary">Search</button>
                    </div>
                </div>

                {/* Job Listing Table */}
                <div className="row">
                    <table className="table" style={{ width: '100%', borderCollapse: 'collapse', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#f8f9fa' }}>
                        <thead>
                            <tr>
                                <th style={{ backgroundColor: '#007bff', color: 'white', padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Job Title</th>
                                <th style={{ backgroundColor: '#007bff', color: 'white', padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Company</th>
                                <th style={{ backgroundColor: '#007bff', color: 'white', padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Location</th>
                                <th style={{ backgroundColor: '#007bff', color: 'white', padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Salary</th>
                                <th style={{ backgroundColor: '#007bff', color: 'white', padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Employment Type</th>
                                <th style={{ backgroundColor: '#007bff', color: 'white', padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((value, index) => (
                                <tr key={index}>
                                    <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>{value.title}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>{value.company}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>{value.location}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>{value.salary}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>{value.employmentType}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>
                                        <button
                                            style={{ backgroundColor: '#28a745', border: 'none', borderRadius: '5px', color: 'white', padding: '10px 15px', cursor: 'pointer', transition: 'background-color 0.3s' }}
                                            onClick={() => applyForJob(value.id)}
                                        >
                                            Apply
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default View;
