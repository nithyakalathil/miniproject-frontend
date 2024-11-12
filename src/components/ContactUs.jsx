import React, { useState } from 'react';
import Navbar from './Navbar2';
import Navbar2 from './Navbar2';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); 
    };

    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            margin: 0,
            padding: '20px',
        },
        header: {
            textAlign: 'center',
            marginBottom: '20px',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '600px',
            margin: '0 auto',
        },
        label: {
            marginBottom: '5px',
            fontWeight: 'bold',
        },
        input: {
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginBottom: '15px',
        },
        textarea: {
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginBottom: '15px',
            minHeight: '100px',
        },
        button: {
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
    };

    return (
        <div style={styles.container}>
            <Navbar2 style={{ marginBottom: '20px' }} /> {}
            <h1 style={styles.header}>Contact Us</h1>
            <form style={styles.form} onSubmit={handleSubmit}>
                <label style={styles.label} htmlFor="name">Name</label>
                <input
                    style={styles.input}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label style={styles.label} htmlFor="email">Email</label>
                <input
                    style={styles.input}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label style={styles.label} htmlFor="message">Message</label>
                <textarea
                    style={styles.textarea}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button style={styles.button} type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactUs;
