import React from 'react';
import Navbar1 from './Navbar1';

// Sample job data
const jobListings = [
    {
        title: 'Software Engineer',
        description: 'Develop and maintain software applications.',
        requirements: [
            'Bachelor\'s degree in Computer Science or related field',
            'Experience with JavaScript, React, and Node.js',
            'Strong problem-solving skills',
        ],
        responsibilities: [
            'Write clean, maintainable code',
            'Collaborate with cross-functional teams',
            'Participate in code reviews',
        ],
    },
    {
        title: 'Marketing Specialist',
        description: 'Create and execute marketing campaigns to drive brand awareness.',
        requirements: [
            'Bachelor\'s degree in Marketing or related field',
            'Proven experience in digital marketing',
            'Excellent communication skills',
        ],
        responsibilities: [
            'Develop marketing strategies',
            'Analyze market trends',
            'Manage social media accounts',
        ],
    },
    {
        title: 'Data Scientist',
        description: 'Analyze and interpret complex data to help organizations make decisions.',
        requirements: [
            'Master\'s degree in Data Science or related field',
            'Experience with Python, R, or SQL',
            'Strong statistical analysis skills',
        ],
        responsibilities: [
            'Design data models and algorithms',
            'Communicate findings to stakeholders',
            'Conduct experiments to improve data collection processes',
        ],
    },
    {
        title: 'UX/UI Designer',
        description: 'Design user-friendly interfaces for applications and websites.',
        requirements: [
            'Bachelor\'s degree in Design or related field',
            'Experience with design tools like Figma or Adobe XD',
            'Strong portfolio showcasing design skills',
        ],
        responsibilities: [
            'Create wireframes and prototypes',
            'Conduct user research and testing',
            'Collaborate with developers to implement designs',
        ],
    },
    {
        title: 'Project Manager',
        description: 'Lead projects from conception to completion.',
        requirements: [
            'Bachelor\'s degree in Business or related field',
            'Proven experience in project management',
            'Excellent organizational skills',
        ],
        responsibilities: [
            'Define project scope and objectives',
            'Coordinate with team members',
            'Monitor project progress and report on status',
        ],
    },
    {
        title: 'Sales Associate',
        description: 'Assist customers and drive sales in retail environments.',
        requirements: [
            'High school diploma or equivalent',
            'Experience in retail or customer service',
            'Strong communication skills',
        ],
        responsibilities: [
            'Greet customers and assist with their needs',
            'Maintain a clean and organized store',
            'Process transactions and handle cash',
        ],
    },
    // Additional job listings
    {
        title: 'DevOps Engineer',
        description: 'Automate and streamline operations and processes.',
        requirements: [
            'Bachelor\'s degree in Computer Science or related field',
            'Experience with AWS, Docker, and CI/CD',
            'Strong scripting skills',
        ],
        responsibilities: [
            'Manage infrastructure and deployments',
            'Monitor system performance and troubleshoot issues',
            'Implement security protocols',
        ],
    },
    {
        title: 'Content Writer',
        description: 'Create engaging and informative content for various platforms.',
        requirements: [
            'Bachelor\'s degree in English, Journalism, or related field',
            'Strong writing and editing skills',
            'Experience with SEO principles',
        ],
        responsibilities: [
            'Research and write articles',
            'Edit content for clarity and grammar',
            'Collaborate with marketing teams to create content strategies',
        ],
    },
    {
        title: 'Graphic Designer',
        description: 'Create visual content for websites and marketing materials.',
        requirements: [
            'Bachelor\'s degree in Graphic Design or related field',
            'Proficiency in Adobe Creative Suite',
            'Strong portfolio of design work',
        ],
        responsibilities: [
            'Design logos, brochures, and advertisements',
            'Collaborate with clients to understand their needs',
            'Ensure consistency across all visual branding',
        ],
    },
    {
        title: 'Network Administrator',
        description: 'Manage and maintain computer networks and systems.',
        requirements: [
            'Bachelor\'s degree in Information Technology or related field',
            'Experience with network security protocols',
            'Strong analytical and troubleshooting skills',
        ],
        responsibilities: [
            'Monitor network performance and security',
            'Resolve network issues and outages',
            'Implement upgrades and patches as necessary',
        ],
    },
    {
        title: 'Financial Analyst',
        description: 'Analyze financial data to help organizations make informed decisions.',
        requirements: [
            'Bachelor\'s degree in Finance, Economics, or related field',
            'Strong analytical skills and attention to detail',
            'Proficient in Excel and financial modeling',
        ],
        responsibilities: [
            'Prepare financial reports and forecasts',
            'Analyze trends and variances',
            'Assist in budget preparation',
        ],
    },
    {
        title: 'Human Resources Manager',
        description: 'Oversee recruitment, training, and employee relations.',
        requirements: [
            'Bachelor\'s degree in Human Resources or related field',
            'Proven experience in HR management',
            'Excellent interpersonal and communication skills',
        ],
        responsibilities: [
            'Develop and implement HR policies',
            'Manage employee onboarding and training',
            'Address employee concerns and mediate conflicts',
        ],
    },
    {
        title: 'Cybersecurity Analyst',
        description: 'Protect an organization’s computer systems and networks.',
        requirements: [
            'Bachelor\'s degree in Cybersecurity or related field',
            'Experience with security protocols and tools',
            'Strong analytical skills',
        ],
        responsibilities: [
            'Monitor network for security breaches',
            'Conduct vulnerability assessments',
            'Develop security strategies and protocols',
        ],
    },
    {
        title: 'Database Administrator',
        description: 'Manage and maintain databases to ensure data integrity and security.',
        requirements: [
            'Bachelor\'s degree in Computer Science or related field',
            'Experience with SQL and database management',
            'Strong problem-solving skills',
        ],
        responsibilities: [
            'Implement database backup and recovery plans',
            'Monitor database performance',
            'Ensure data security and compliance',
        ],
    },
    // ... add other job listings here as needed
];

const pastelColors = [
    'rgba(255, 182, 193, 0.7)', // Light Pink
    'rgba(173, 216, 230, 0.7)', // Light Blue
    'rgba(255, 228, 196, 0.7)', // Light Coral
    'rgba(221, 160, 221, 0.7)', // Plum
    'rgba(255, 255, 224, 0.7)', // Light Yellow
    'rgba(144, 238, 144, 0.7)', // Light Green
];

const Joblists = () => {
    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: '#f0f4f8', // Light pastel background
    };

    const cardStyle = (index) => ({
        backgroundColor: pastelColors[index % pastelColors.length], // Pastel shades
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        margin: '15px',
        padding: '20px',
        width: '300px',
        transition: 'transform 0.2s',
        backdropFilter: 'blur(10px)', // Glass effect
        border: '1px solid rgba(255, 255, 255, 0.3)', // Light border for glass effect
    });

    const titleStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#007bff',
        marginBottom: '10px',
        textAlign: 'center', // Center the title
    };

    const descriptionStyle = {
        fontSize: '16px',
        color: '#495057',
        marginBottom: '10px',
    };

    const requirementsStyle = {
        fontSize: '14px',
        color: '#6c757d',
        marginBottom: '10px',
    };

    const responsibilitiesStyle = {
        fontSize: '14px',
        color: '#6c757d',
        marginBottom: '10px',
    };

    const listStyle = {
        listStyleType: 'disc',
        paddingLeft: '20px',
        marginBottom: '10px',
    };

    const headerStyle = {
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#333', // Dark color for the title
    };

    return (
        <div>
            <Navbar1 style={{ width: '100%' }} /> {/* Navbar at the top */}
            <div style={containerStyle}> {/* Container for job listings */}
                <center><h1 style={headerStyle}></h1> </center>{/* Title for job listings */}
                {jobListings.map((job, index) => (
                    <div key={index} style={cardStyle(index)}>
                        <h3 style={titleStyle}>{job.title}</h3>
                        <p style={descriptionStyle}>{job.description}</p>
                        <h4>Requirements:</h4>
                        <ul style={listStyle}>
                            {job.requirements.map((req, i) => (
                                <li key={i} style={requirementsStyle}>{req}</li>
                            ))}
                        </ul>
                        <h4>Responsibilities:</h4>
                        <ul style={listStyle}>
                            {job.responsibilities.map((resp, i) => (
                                <li key={i} style={responsibilitiesStyle}>{resp}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Joblists;
