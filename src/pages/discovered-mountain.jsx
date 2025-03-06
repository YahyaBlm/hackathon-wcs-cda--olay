import { Outlet } from 'react-router-dom';

// import { destinationsList } from '../data/destinations-list';

import '../css/discovered-mountain.css';
import DiscoveredFooter from '../components/discovered-footer';
import DiscoveredHeader from '../components/discovered-header';

export default function DiscoveredMountain() {
    return (
        <>
            <DiscoveredHeader className={'mountain-background'} />
            <main>
                <Outlet />
                <p>blabla</p>
            </main>
            <DiscoveredFooter className={'mountain-background'} />
        </>
    );
}
