/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import { destinationsList } from '../data/destinations-list';

import { useState } from 'react';
import Img from '../assets/images/forest.jpg';
import DiscoveredCard from '../components/discovered-card';
import DiscoveredFooter from '../components/discovered-footer';
import DiscoveredHeader from '../components/discovered-header';
import '../css/discovered-forest.css';

const forestData = [
    {
        name: 'forest1',
        imgSrc: '',
        location: '',
        text: 'formei,t',
    },
    {
        name: 'forest2',
        imgSrc: '',
        location: 'forest 2',
        text: 'mlqsdjfpoi',
    },
    {
        name: 'forest3',
        imgSrc: 'gohglle',
        location: 'location3',
        text: 'text3',
    },
];

export default function DiscoveredForest() {
    const forestDestinations = destinationsList.filter((dest) => dest.name.startsWith('forest'));

    const [selectedDestinationIndex, setSelectedDestinationIndex] = useState(null);

    const handleCardClick = (index) => {
        console.log('got it');
        setSelectedDestinationIndex(index);
    };

    return (
        <>
            <DiscoveredHeader className={'forest-background'} />
            <motion.main
                className="main-forest"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
            >
                <h2 className="discover-title">Forest</h2>
                <p>
                    "Disappear into the heart of the forest, where the whispering trees guard the secrets of true
                    serenity."
                </p>
                <div className="destination-list">
                    {forestDestinations.map((destination, index) => (
                        <DiscoveredCard
                            key={index}
                            img={Img}
                            city={destination.location}
                            description={destination.description}
                            onClick={() => handleCardClick(index)}
                        />
                    ))}
                    <Outlet />
                </div>

                {selectedDestinationIndex !== null && (
                    <div className="destination-info">
                        <img
                            src={forestData[selectedDestinationIndex].imgSrc}
                            alt={forestData[selectedDestinationIndex].name}
                        />
                        <div className="destination-text">
                            <h3>{forestData[selectedDestinationIndex].name}</h3>
                            <p>{forestData[selectedDestinationIndex].text}</p>
                        </div>
                    </div>
                )}
            </motion.main>
            <DiscoveredFooter className={'forest-background'} />
        </>
    );
}
