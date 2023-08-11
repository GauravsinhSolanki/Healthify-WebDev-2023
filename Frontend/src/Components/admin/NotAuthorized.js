import React from 'react';

const NotAuthorized = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>403 Not Authorized</h1>
            <p>You do not have permission to view this page.</p>
            <a href="/">Return to Home</a>
        </div>
    );
};

export default NotAuthorized;
