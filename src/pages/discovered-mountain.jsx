/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Img from '../assets/images/forest.jpg';
import DiscoveredCard from '../components/discovered-card';
import DiscoveredFooter from '../components/discovered-footer';
import DiscoveredHeader from '../components/discovered-header';
import { destinationsList } from '../data/destinations-list';

const mountainData = [
    {
        name: 'mountain1',
        imgSrc: '',
        location: 'clime',
        text: 'soth',
    },
    {
        name: 'mountain2',
        imgSrc: '',
        location: 'Jerry',
        text: 'mlqsdjfpoi',
    },
    {
        name: 'mountain3',
        imgSrc: '',
        location: 'location3',
        text: 'text3',
    },
];

export default function DiscoveredMountain() {
    const mountainDestinations = destinationsList.filter((dest) => dest.name.startsWith('mountain'));

    const [selectedDestinationIndex, setSelectedDestinationIndex] = useState(null);

    const handleCardClick = (index) => {
        console.log('got it');
        setSelectedDestinationIndex(index);
    };
    return (
        <>
            <DiscoveredHeader className={'mountain-background'} />
            <motion.main
                className="main-forest"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
            >
                <h2 className="discover-title">Mountain</h2>
                <p>"Escape to the towering peaks, where the crisp air and endless skies set your spirit free."</p>
                <div className="destination-list">
                    {mountainDestinations.map((destination, index) => (
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
                            src={mountainData[selectedDestinationIndex].imgSrc}
                            alt={mountainData[selectedDestinationIndex].name}
                        />
                        <div className="destination-text">
                            <h3>{mountainData[selectedDestinationIndex].name}</h3>
                            <p>{mountainData[selectedDestinationIndex].text}</p>
                        </div>
                    </div>
                )}
            </motion.main>
            <DiscoveredFooter className={'mountain-background'} />
        </>
    );
}
