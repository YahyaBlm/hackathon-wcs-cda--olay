import { Outlet } from 'react-router-dom';

import '../css/discovered-desert.css';
import DiscoveredFooter from '../components/discovered-footer';
import DiscoveredHeader from '../components/discovered-header';

export default function DiscoveredDesert() {
    return (
        <>
            <DiscoveredHeader className={'desert-background'} />
            <main>
                <Outlet />
            </main>
            <DiscoveredFooter className={'desert-background'} />
        </>
    );
}
