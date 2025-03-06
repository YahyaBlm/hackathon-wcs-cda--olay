/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import { destinationsList } from '../data/destinations-list';

import Img from '../assets/images/forest.jpg';
import DiscoveredCard from '../components/discovered-card';
import DiscoveredFooter from '../components/discovered-footer';
import DiscoveredHeader from '../components/discovered-header';

export default function DiscoveredDesert() {
    const desertDestinations = destinationsList.filter((dest) => dest.name.startsWith('desert'));
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
                            />
                        ))}
                        <Outlet />
                    </div>
                </motion.div>
            </main>
            <DiscoveredFooter className={'desert-background'} />
        </>
    );
}
