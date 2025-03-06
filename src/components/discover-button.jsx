// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/discover-button.css';

const DiscoverButton = ({ route, title }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(route);
    };

    return (
        <motion.button className="button" onClick={handleClick} whileTap={{ scale: 0.9 }}>
            {title}
        </motion.button>
    );
};

export default DiscoverButton;
