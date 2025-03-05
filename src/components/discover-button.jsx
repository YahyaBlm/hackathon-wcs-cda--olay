import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/discover-button.css';

const DiscoverButton = ({ route }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(route);
    };

    return (
        <button className="button" onClick={handleClick}>
            Discover
        </button>
    );
};

export default DiscoverButton;
