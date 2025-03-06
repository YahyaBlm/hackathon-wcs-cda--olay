/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import { destinationsList } from '../data/destinations-list';

import Img from '../assets/images/forest.jpg';
import DiscoveredCard from '../components/discovered-card';
import DiscoveredFooter from '../components/discovered-footer';
import DiscoveredHeader from '../components/discovered-header';
import '../css/discovered-forest.css';

export default function DiscoveredForest() {
    const forestDestinations = destinationsList.filter((dest) => dest.name.startsWith('forest'));
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
                        />
                    ))}
                    <Outlet />
                </div>
            </motion.main>
            <DiscoveredFooter className={'forest-background'} />
        </>
    );
}
