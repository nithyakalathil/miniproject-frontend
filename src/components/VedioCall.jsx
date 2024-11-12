import React, { useEffect } from 'react';
import Navbar from './Navbar';

const VedioCall = () => {
    const roomName = 'careerconnect'; 
    const displayName = 'nithya'; 

    useEffect(() => {
        const apiScript = document.createElement('script');
        apiScript.src = 'https://meet.jit.si/external_api.js';
        document.body.appendChild(apiScript);

        const initializeJitsi = () => {
            const domain = 'meet.jit.si';
            const options = {
                roomName: roomName, 
                width: '100%',
                height: '600px',
                parentNode: document.getElementById('meet'),
                userInfo: {
                    displayName: displayName 
                }
            };

            const api = new window.JitsiMeetExternalAPI(domain, options);

            // Cleanup function to dispose of the API instance
            return () => {
                api.dispose();
            };
        };

        // Execute the initialization function when the script is loaded
        apiScript.onload = initializeJitsi;

        // Cleanup script from the document body on unmount
        return () => {
            document.body.removeChild(apiScript);
        };
    }, [roomName, displayName]); 

    return (
        <div>
            <Navbar style={{ marginBottom: '20px' }} />
            <h1 style={{ textAlign: 'center' }}>Thank you for joining this virtual space where our ideas can take flight and meaningful conversations can unfold.</h1>
            <div id="meet" style={{ height: '600px' }}></div>
        </div>
    );
};

export default VedioCall;
