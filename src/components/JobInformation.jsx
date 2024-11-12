import React from 'react';
import Navbar from './Navbar2';
import Navbar2 from './Navbar2';

const JobsInformation = () => {
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
            textAlign: 'center',
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
            textAlign: 'left',
        },
        pastelColors: {
            pastelPeach: '#ffebcc',
            pastelGreen: '#d1f7d6',
            pastelBlue: '#cceeff',
            pastelPink: '#ffd1dc',
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
            <h2 style={styles.header}>Understanding Jobs and Career Development</h2>
            
            <section
                style={{
                    ...styles.section,
                    backgroundColor: styles.pastelColors.pastelPeach,
                    ...(hoveredSection === 'importance' ? styles.sectionHover : {}),
                }}
                onMouseEnter={() => handleMouseEnter('importance')}
                onMouseLeave={handleMouseLeave}
            >
                <h3 style={styles.title}>Why Jobs Are Important</h3>
                <p style={styles.paragraph}>
                    Jobs play a crucial role in our lives as they provide financial stability and independence. 
                    They allow individuals to support themselves and their families while contributing to the economy. 
                    Furthermore, jobs offer opportunities for personal growth, skill development, and networking, which are essential for 
                    professional success. Having a job also instills a sense of purpose and achievement, boosting overall well-being.
                </p>
            </section>

            <section
                style={{
                    ...styles.section,
                    backgroundColor: styles.pastelColors.pastelGreen,
                    ...(hoveredSection === 'development' ? styles.sectionHover : {}),
                }}
                onMouseEnter={() => handleMouseEnter('development')}
                onMouseLeave={handleMouseLeave}
            >
                <h3 style={styles.title}>What is Career Development?</h3>
                <p style={styles.paragraph}>
                    Career development refers to the ongoing process of managing your career path. 
                    It involves setting personal goals, acquiring new skills, and gaining experiences that enhance your professional growth. 
                    Career development is not just about climbing the corporate ladder; it’s about continuous learning and adaptation 
                    to the ever-changing job market. Engaging in professional development activities, seeking mentorship, and networking 
                    with industry professionals can significantly influence career progression.
                </p>
            </section>

            <section
                style={{
                    ...styles.section,
                    backgroundColor: styles.pastelColors.pastelBlue,
                    ...(hoveredSection === 'interviewTips' ? styles.sectionHover : {}),
                }}
                onMouseEnter={() => handleMouseEnter('interviewTips')}
                onMouseLeave={handleMouseLeave}
            >
                <h3 style={styles.title}>Tips to Crack Job Interviews</h3>
                <p style={styles.paragraph}>
                    Cracking job interviews requires preparation and confidence. Here are some effective strategies:
                </p>
                <ul style={styles.list}>
                    <li style={styles.paragraph}>
                        <strong>Research the Company:</strong> Understand their values, culture, and recent developments to tailor your responses.
                    </li>
                    <li style={styles.paragraph}>
                        <strong>Practice Common Interview Questions:</strong> Prepare answers for common questions and practice them to sound natural.
                    </li>
                    <li style={styles.paragraph}>
                        <strong>Dress Appropriately:</strong> First impressions matter; ensure you present yourself professionally.
                    </li>
                    <li style={styles.paragraph}>
                        <strong>Showcase Your Skills:</strong> Highlight relevant skills and experiences that align with the job requirements.
                    </li>
                    <li style={styles.paragraph}>
                        <strong>Follow Up:</strong> Send a thank-you email post-interview to express gratitude and reiterate your interest in the position.
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default JobsInformation;
