import { Outlet } from 'react-router-dom';
import { destinationsList } from '../data/destinations-list';

import DiscoveredFooter from '../components/discovered-footer';
import DiscoveredHeader from '../components/discovered-header';
import DiscoveredCard from '../components/discovered-card';

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
                    {desertDestinations.map((destination) => (
                        <DiscoveredCard
                            key={destination.id}
                            img={destination.imgSrc}
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
