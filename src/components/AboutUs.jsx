import React from 'react';
import Navbar from './Navbar2';
import Navbar2 from './Navbar2';

const AboutUs = () => {
    
    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            margin: '0',
            padding: '20px',
            backgroundColor: '#f8f9fa', 
            color: '#343a40', 
        },
        header: {
            textAlign: 'center',
            marginBottom: '30px',
            color: '#007bff', 
            fontSize: '36px', 
            fontWeight: 'bold',
        },
        section: {
            marginBottom: '30px',
            lineHeight: '1.6',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', 
            backgroundColor: '#ffffff',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
            cursor: 'pointer',
        },
        sectionHover: {
            transform: 'scale(1.05)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', 
        },
        title: {
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '15px',
            borderBottom: '2px solid #007bff', 
            paddingBottom: '5px',
        },
        paragraph: {
            fontSize: '16px',
            marginBottom: '15px',
        },
        list: {
            listStyleType: 'disc',
            paddingLeft: '20px',
            marginTop: '10px',
        },
        listItem: {
            marginBottom: '10px',
        },
        pastelColors: {
            pastelPink: '#ffd1dc',
            pastelYellow: '#fff9c4',
            pastelGreen: '#d1f7d6',
        }
    };

    const [hoveredSection, setHoveredSection] = React.useState(null);

    const handleMouseEnter = (section) => {
        setHoveredSection(section);
    };

    const handleMouseLeave = () => {
        setHoveredSection(null);
    };

    return (
        <div style={styles.container}>
            <Navbar2 style={{ marginBottom: '20px' }} />
            <h1 style={styles.header}>About Us</h1>
            
            {/* Our Mission Section */}
            <section
                style={{
                    ...styles.section,
                    backgroundColor: styles.pastelColors.pastelPink,
                    ...(hoveredSection === 'mission' ? styles.sectionHover : {}),
                }}
                onMouseEnter={() => handleMouseEnter('mission')}
                onMouseLeave={handleMouseLeave}
            >
                <h2 style={styles.title}>Our Mission</h2>
                <p style={styles.paragraph}>
                    Our mission is to connect job seekers with employers through a streamlined and user-friendly platform. 
                    We strive to simplify the job search process and make it easier for companies to find the right talent.
                </p>
            </section>

            {/* Why Choose Us Section */}
            <section
                style={{
                    ...styles.section,
                    backgroundColor: styles.pastelColors.pastelYellow,
                    ...(hoveredSection === 'whyChooseUs' ? styles.sectionHover : {}),
                }}
                onMouseEnter={() => handleMouseEnter('whyChooseUs')}
                onMouseLeave={handleMouseLeave}
            >
                <h2 style={styles.title}>Why Choose Us?</h2>
                <ul style={styles.list}>
                    <li style={styles.listItem}>Extensive job listings across various industries.</li>
                    <li style={styles.listItem}>Advanced search options to find your ideal job.</li>
                    <li style={styles.listItem}>Real-time chat support for job seekers and employers.</li>
                    <li style={styles.listItem}>Resources and tools for career development.</li>
                    <li style={styles.listItem}>User-friendly interface and mobile-friendly design.</li>
                </ul>
            </section>

            {/* Our Team Section */}
            <section
                style={{
                    ...styles.section,
                    backgroundColor: styles.pastelColors.pastelGreen,
                    ...(hoveredSection === 'ourTeam' ? styles.sectionHover : {}),
                }}
                onMouseEnter={() => handleMouseEnter('ourTeam')}
                onMouseLeave={handleMouseLeave}
            >
                <h2 style={styles.title}>Our Team</h2>
                <p style={styles.paragraph}>
                    We have a dedicated team of professionals with extensive experience in recruitment and technology, 
                    working tirelessly to provide the best experience for our users.
                </p>
            </section>
        </div>
    );
};

export default AboutUs;
