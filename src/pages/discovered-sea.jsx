import { Outlet } from 'react-router-dom';
import { destinationsList } from '../data/destinations-list';

import DiscoveredFooter from '../components/discovered-footer';
import DiscoveredHeader from '../components/discovered-header';
import DiscoveredCard from '../components/discovered-card';

export default function DiscoveredSea() {
    const seaDestinations = destinationsList.filter((dest) => dest.name.startsWith('sea'));
    return (
        <>
            <DiscoveredHeader className={'sea-background'} />
            <main className="main-forest">
                <h2 className="discover-title">Sea</h2>
                <p>
                    "Drift away with the rhythm of the waves, where the horizon stretches beyond the worries of the
                    world."
                </p>
                <div className="destination-list">
                    {seaDestinations.map((destination) => (
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
            <DiscoveredFooter className={'sea-background'} />
        </>
    );
}
