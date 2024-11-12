import axios from 'axios';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Navbar3 from './Navbar3';

const Search = () => {
    const [data, changedata] = useState({
        title: '' 
    });
    
    const [result, setresult] = useState([]);

    const inputHandler = (event) => {
        changedata({ ...data, [event.target.name]: event.target.value });
    };

    const readValue = () => {
        console.log(data);
        axios.post("http://localhost:8080/search", data).then(
            (response) => {
                console.log(response.data);
                setresult(response.data);
            }
        ).catch((error) => {
            console.error("Error fetching data:", error);
            alert("An error occurred while searching for jobs.");
        });
    };

    const deleteJob = (id) => {
        let input = { "_id": id };
        axios.post("http://localhost:8080/delete", input).then(
            (response) => {
                console.log(response.data);
                if (response.data.status === "Success") {
                    alert("Job deleted successfully");
                    setresult(result.filter(job => job._id !== id));
                } else {
                    alert("Error deleting job");
                }
            }
        ).catch((error) => {
            console.error("Error deleting job:", error);
            alert("An error occurred while deleting the job.");
        });
    };

    return (
        <div>
            <Navbar3 />
            <div className="container">
                <h2 className="text-center mb-4" style={{ color: '#007bff' }}>Job Search</h2> {}
                <div className="row g-3">
                    <div className="col-12">
                        <label htmlFor="title" className="form-label">Job Title</label>
                        <input
                            type="text"
                            className="form-control"
                            name="title" 
                            value={data.title}
                            onChange={inputHandler}
                            placeholder="Enter Job Title"
                        />
                    </div>
                    <div className="col-12">
                        <button className="btn btn-success" onClick={readValue}>Search</button>
                    </div>
                </div>

                <table className="table mt-4"> {}
                    <thead>
                        <tr>
                            <th scope="col">Job Title</th>
                            <th scope="col">Company</th>
                            <th scope="col">Location</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result.length > 0 ? result.map((value, index) => (
                            <tr key={index}>
                                <th scope="row">{value.title}</th>
                                <td>{value.company}</td>
                                <td>{value.location}</td>
                                <td>{value.salary}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => { deleteJob(value._id) }}>Delete</button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="5" className="text-center">No jobs found</td> {}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Search;
