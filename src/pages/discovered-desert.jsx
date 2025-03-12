/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Img from '../assets/images/forest.jpg';
import DiscoveredCard from '../components/discovered-card';
import DiscoveredFooter from '../components/discovered-footer';
import DiscoveredHeader from '../components/discovered-header';
import { destinationsList } from '../data/destinations-list';

// Données des déserts
const desertData = [
    {
        name: 'desert1',
        imgSrc: '../assets/images/home-sky.jpg',
        location: 'clime',
        text: 'soth',
    },
    {
        name: 'desert2',
        imgSrc: 'path/to/image2.jpg',
        location: 'Jerry',
        text: 'mlqsdjfpoi',
    },
    {
        name: 'desert3',
        imgSrc: 'path/to/image3.jpg',
        location: 'location3',
        text: 'text3',
    },
];

export default function DiscoveredDesert() {
    const desertDestinations = destinationsList.filter((dest) => dest.name.startsWith('desert'));

    const [selectedDestinationIndex, setSelectedDestinationIndex] = useState(null);

    const handleCardClick = (index) => {
        console.log('got it');
        setSelectedDestinationIndex(index);
    };

    return (
        <>
            <DiscoveredHeader className={'desert-background'} />
            <main>
                <motion.div
                    className="main-forest"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="discover-title">Desert</h2>
                    <p>
                        "Lose yourself in the endless dunes, where the silence of the desert whispers peace to your
                        soul."
                    </p>
                    <div className="destination-list">
                        {desertDestinations.map((destination, index) => (
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
                                src={desertData[selectedDestinationIndex].imgSrc}
                                alt={desertData[selectedDestinationIndex].name}
                            />
                            <div className="destination-text">
                                <h3>{desertData[selectedDestinationIndex].name}</h3>
                                <p>{desertData[selectedDestinationIndex].text}</p>
                            </div>
                        </div>
                    )}
                </motion.div>
            </main>
            <DiscoveredFooter className={'desert-background'} />
        </>
    );
}
