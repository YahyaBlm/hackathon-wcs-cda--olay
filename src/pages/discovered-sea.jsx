import '../css/discovered-sea.css';
import DiscoveredFooter from '../components/discovered-footer';
import DiscoveredHeader from '../components/discovered-header';

export default function DiscoveredSea() {
    return (
        <>
            <DiscoveredHeader className={'sea-background'} />
            <main>
                <Outlet />
            </main>
            <DiscoveredFooter className={'sea-background'} />
        </>
    );
}
