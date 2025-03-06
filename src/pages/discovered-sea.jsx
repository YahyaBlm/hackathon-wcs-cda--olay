/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import { destinationsList } from '../data/destinations-list';

import { useState } from 'react';
import Img from '../assets/images/forest.jpg';
import DiscoveredCard from '../components/discovered-card';
import DiscoveredFooter from '../components/discovered-footer';
import DiscoveredHeader from '../components/discovered-header';

const seaData = [
    {
        name: 'sea1',
        imgSrc: '',
        location: '',
        text: 'soth',
    },
    {
        name: 'sea2',
        imgSrc: '',
        location: 'Jerry11',
        text: 'mlqsdjfpoi',
    },
    {
        name: 'sea3',
        imgSrc: '',
        location: 'location3',
        text: 'text3',
    },
];
export default function DiscoveredSea() {
    const seaDestinations = destinationsList.filter((dest) => dest.name.startsWith('mountain'));

    const [selectedDestinationIndex, setSelectedDestinationIndex] = useState(null);

    const handleCardClick = (index) => {
        console.log('got it');
        setSelectedDestinationIndex(index);
    };
    return (
        <>
            <DiscoveredHeader className={'sea-background'} />
            <motion.main
                className="main-forest"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
            >
                <h2 className="discover-title">Sea</h2>
                <p>
                    "Drift away with the rhythm of the waves, where the horizon stretches beyond the worries of the
                    world."
                </p>
                <div className="destination-list">
                    {seaDestinations.map((destination, index) => (
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
                    <div className="destination-info" id="info">
                        <img
                            src={seaData[selectedDestinationIndex].imgSrc}
                            alt={seaData[selectedDestinationIndex].name}
                        />
                        <div className="destination-text">
                            <h3>{seaData[selectedDestinationIndex].name}</h3>
                            <p>{seaData[selectedDestinationIndex].text}</p>
                        </div>
                    </div>
                )}
            </motion.main>
            <DiscoveredFooter className={'sea-background'} />
        </>
    );
}
