import { Outlet } from 'react-router-dom';
import { destinationsList } from '../data/destinations-list';

import '../css/discovered-sea.css';
import DiscoveredFooter from '../components/discovered-footer';
import DiscoveredHeader from '../components/discovered-header';
import DiscoveredCard from '../components/discovered-card';
import Img from '../assets/images/forest.jpg';

export default function DiscoveredSea() {
    const seaDestinations = destinationsList.filter((dest) => dest.name.startsWith('mountain'));
    return (
        <>
            <DiscoveredHeader className={'sea-background'} />
            <main className="main-forest">
                <h2 className="discover-title">Sea</h2>
                <p>Blablabla... lorem ipsum dolor etc...</p>
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
            </main>
            <DiscoveredFooter className={'sea-background'} />
        </>
    );
}
