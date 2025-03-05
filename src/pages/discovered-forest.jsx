import { Outlet } from 'react-router-dom';

import '../css/discovered-forest.css';
import DiscoveredFooter from '../components/discovered-footer';
import DiscoveredHeader from '../components/discovered-header';

export default function DiscoveredForest() {
    return (
        <>
            <DiscoveredHeader className={'forest-background'} />
            <main>
                <Outlet />
            </main>
            <DiscoveredFooter className={'forest-background'} />
        </>
    );
}
