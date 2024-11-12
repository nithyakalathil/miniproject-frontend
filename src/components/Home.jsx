import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Home = () => {
    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            margin: 0,
            padding: 0,
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px',
            backgroundColor: '#007bff',
            color: 'white',
        },
        logo: {
            fontSize: '24px',
            fontWeight: 'bold',
        },
        navbar: {
            display: 'flex',
        },
        navItem: {
            margin: '0 15px',
            color: 'white',
            textDecoration: 'none',
        },
        ctaButton: {
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            borderRadius: '5px',
        },
        hero: {
            backgroundImage: 'url(your-hero-image-url.jpg)',
            backgroundSize: 'cover',
            padding: '60px',
            textAlign: 'center',
            color: 'white',
        },
        searchBar: {
            marginTop: '20px',
        },
        searchInput: {
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            width: '300px',
            marginRight: '10px',
        },
        searchButton: {
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        features: {
            padding: '20px',
            textAlign: 'center',
        },
        featureItem: {
            display: 'inline-block',
            margin: '15px',
            padding: '10px',
            backgroundColor: '#f8f9fa',
            borderRadius: '5px',
        },
        jobCategories: {
            padding: '20px',
            textAlign: 'center',
        },
        category: {
            display: 'inline-block',
            margin: '15px',
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            borderRadius: '5px',
        },
        footer: {
            padding: '20px',
            textAlign: 'center',
            backgroundColor: '#343a40',
            color: 'white',
        },
    };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <div style={styles.logo}>CareerConnect</div>
                <nav style={styles.navbar}>
                    <a href="/" style={styles.navItem}>Home</a>
                    <a href="/j" style={styles.navItem}>CareerQuest</a>
                    <a href="/a" style={styles.navItem}>About Us</a>
                    <a href="/c" style={styles.navItem}>Contact</a>
                    <a href="/l" style={styles.navItem}>Login</a>
                    <a href="/p" style={styles.navItem}>Register</a>
                </nav>
                {}
                <Link to="/l">
                    <button style={styles.ctaButton}>Logout</button>
                </Link>
            </header>

            <section style={styles.hero}>
                <h1>Find Your Dream Job</h1>
                <p>Connecting Job Seekers with Employers</p>
                <div style={styles.searchBar}>
                    <input
                        type="text"
                        placeholder="Search for jobs..."
                        style={styles.searchInput}
                    />
                                    <Link to="/l">

                    <button style={styles.searchButton}>Search Jobs</button>
                    </Link>

                </div>
            </section>

            <section style={styles.features}>
    <h2>Features</h2>
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        padding: '20px',
        flexWrap: 'wrap',
    }}>
        <div style={{
            backgroundColor: '#ffebcc', // Light pastel peach
            padding: '20px',
            width: '200px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
            cursor: 'pointer',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} >
            Easy Job Posting
        </div>

        <div style={{
            backgroundColor: '#d1f7d6', // Light pastel green
            padding: '20px',
            width: '200px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
            cursor: 'pointer',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} >
            Resume Upload
        </div>

        <div style={{
            backgroundColor: '#cceeff', // Light pastel blue
            padding: '20px',
            width: '200px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
            cursor: 'pointer',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} >
            Company Profiles
        </div>

        <div style={{
            backgroundColor: '#ffd1dc', // Light pastel pink
            padding: '20px',
            width: '200px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
            cursor: 'pointer',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} >
            Real-Time Chat
        </div>
    </div>
</section>



            <section style={styles.jobCategories}>
    <h2>Job Categories</h2>
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        padding: '20px',
    }}>
        <div style={{
            backgroundColor: '#ffebcc', // Light pastel peach
            color: '#333',
            padding: '20px',
            width: '200px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
            cursor: 'pointer',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} >
            <h3>IT</h3>
            <p>Explore various roles in tech and IT.</p>
        </div>

        <div style={{
            backgroundColor: '#d1f7d6', // Light pastel green
            color: '#333',
            padding: '20px',
            width: '200px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
            cursor: 'pointer',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} >
            <h3>Marketing</h3>
            <p>Find opportunities in digital marketing, advertising, and more.</p>
        </div>

        <div style={{
            backgroundColor: '#cceeff', // Light pastel blue
            color: '#333',
            padding: '20px',
            width: '200px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
            cursor: 'pointer',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} >
            <h3>Finance</h3>
            <p>Pursue a career in finance, accounting, or investments.</p>
        </div>

        <div style={{
            backgroundColor: '#ffd1dc', // Light pastel pink
            color: '#333',
            padding: '20px',
            width: '200px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
            cursor: 'pointer',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} >
            <h3>Healthcare</h3>
            <p>Explore roles in healthcare, nursing, and medical support.</p>
        </div>
    </div>
</section>



            <footer style={styles.footer}>
                <div>Contact us: info@jobboard.com</div>
                <div>© 2024 Your Company</div>
            </footer>
        </div>
    );
};

export default Home;
