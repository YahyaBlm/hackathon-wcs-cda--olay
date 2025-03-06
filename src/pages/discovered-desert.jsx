import { Outlet } from 'react-router-dom';
import { destinationsList } from '../data/destinations-list';

import DiscoveredFooter from '../components/discovered-footer';
import DiscoveredHeader from '../components/discovered-header';
import DiscoveredCard from '../components/discovered-card';
import Img from '../assets/images/forest.jpg';

export default function DiscoveredDesert() {
    const desertDestinations = destinationsList.filter((dest) => dest.name.startsWith('desert'));
    return (
        <>
            <DiscoveredHeader className={'desert-background'} />
            <main className="main-forest">
                <h2 className="discover-title">Desert</h2>
                <p>
                    "Lose yourself in the endless dunes, where the silence of the desert whispers peace to your soul."
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
            </main>
            <DiscoveredFooter className={'desert-background'} />
        </>
    );
}
