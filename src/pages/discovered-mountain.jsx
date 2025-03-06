/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import Img from '../assets/images/forest.jpg';
import DiscoveredCard from '../components/discovered-card';
import DiscoveredFooter from '../components/discovered-footer';
import DiscoveredHeader from '../components/discovered-header';
import { destinationsList } from '../data/destinations-list';

export default function DiscoveredMountain() {
    const mountainDestinations = destinationsList.filter((dest) => dest.name.startsWith('mountain'));
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
                        />
                    ))}
                    <Outlet />
                </div>
            </motion.main>
            <DiscoveredFooter className={'mountain-background'} />
        </>
    );
}
