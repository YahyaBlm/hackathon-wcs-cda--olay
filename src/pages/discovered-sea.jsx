/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import { destinationsList } from '../data/destinations-list';

import Img from '../assets/images/forest.jpg';
import DiscoveredCard from '../components/discovered-card';
import DiscoveredFooter from '../components/discovered-footer';
import DiscoveredHeader from '../components/discovered-header';

export default function DiscoveredSea() {
    const seaDestinations = destinationsList.filter((dest) => dest.name.startsWith('sea'));
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
                        />
                    ))}
                    <Outlet />
                </div>
            </motion.main>
            <DiscoveredFooter className={'sea-background'} />
        </>
    );
}
