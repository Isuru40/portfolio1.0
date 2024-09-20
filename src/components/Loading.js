import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Loading = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/home'); // Redirect to home after 3 seconds
        }, 3000);
    }, [navigate]);

    return (
        <div className="loading">
            <h1>Loading...</h1>
            <div className="spinner"></div>
        </div>
    );
};

export default Loading;
