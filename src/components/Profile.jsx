import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Profile.css'; // Import your custom CSS file for styling
import Navbar3 from './Navbar3';

const Profile = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    // Fetch user data when the component mounts
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:8080/viewall");
                setUsers(response.data);
            } catch (err) {
                console.error("Error fetching profiles:", err);
                setError("Error fetching profiles");
            }
        };

        fetchUsers();
    }, []);

    // Function to delete a user from the front end
    const deleteUser = (id) => {
        // Update users state to remove the deleted user
        setUsers(users.filter(user => user._id !== id));
    };

    return (
        <div className="profile-container">
            <Navbar3 />

            <h2>User Profiles</h2>
            {error && <div className="error">{error}</div>}
            <div className="profile-list">
                {users.map((user) => (
                    <div key={user._id} className="profile-card">
                        <img 
                            src={user.image} 
                            alt={`${user.sname}'s profile`} 
                            style={{ height: '80px', objectFit: 'cover', marginTop: '10px' }} // Adjust height and margin
                        />
                        <h3>{user.sname}</h3>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <p><strong>Gender:</strong> {user.gender}</p>
                        
                        <button onClick={() => deleteUser(user._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
