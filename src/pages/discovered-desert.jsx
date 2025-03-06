// import { Outlet } from 'react-router-dom';

// import { destinationsList } from '../data/destinations-list';

// import '../css/discovered-desert.css';
// import DiscoveredFooter from '../components/discovered-footer';
// import DiscoveredHeader from '../components/discovered-header';

// export default function DiscoveredDesert() {
//     return (
//         <>
//             <DiscoveredHeader className={'desert-background'} />
//             <main>
//                 <Outlet />
//             </main>
//             <DiscoveredFooter className={'desert-background'} />
//         </>
//     );
// }
// import { Outlet } from 'react-router-dom';
import { destinationsList } from '../data/destinations-list';
import '../css/discovered-desert.css';
import DiscoveredFooter from '../components/discovered-footer';
import DiscoveredHeader from '../components/discovered-header';

export default function DiscoveredDesert() {
    const desertDestinations = destinationsList.filter((dest) => dest.name.startsWith('desert'));

    return (
        <>
            <DiscoveredHeader className={'desert-background'} />
            <div className="desert-destinations">
                <h2>Découvrez le désert</h2>
                <div className="destinations-list">
                    {desertDestinations.map((destination, index) => (
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        <article key={index} className="destination-card">
                            <img
                                src={destination.imgSrc || '../../public/default-image.png'}
                                alt={destination.name}
                                className="destination-image"
                            />
                            <div className="destination-info">
                                <h3>{destination.name}</h3>
                                <p>{destination.text || 'Description à venir...'}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            {/* <Outlet /> */}
            <DiscoveredFooter className={'desert-background'} />
        </>
    );
}
