import { Outlet } from 'react-router-dom';
import { destinationsList } from '../data/destinations-list';

import '../css/discovered-forest.css';
import DiscoveredFooter from '../components/discovered-footer';
import DiscoveredHeader from '../components/discovered-header';
import DiscoveredCard from '../components/discovered-card';
import Img from '../assets/images/forest.jpg';

export default function DiscoveredForest() {
    const forestDestinations = destinationsList.filter((dest) => dest.name.startsWith('forest'));
    return (
        <>
            <DiscoveredHeader className={'forest-background'} />
            <main className="main-forest">
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
            </main>
            <DiscoveredFooter className={'forest-background'} />
        </>
    );
}
