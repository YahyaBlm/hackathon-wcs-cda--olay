import '../css/discovered-mountain.css';
import DiscoveredFooter from '../components/discovered-footer';
import DiscoveredHeader from '../components/discovered-header';

export default function DiscoveredMountain() {
    return (
        <>
            <DiscoveredHeader className={'mountain-background'} />
            <main>
                <Outlet />
            </main>
            <DiscoveredFooter className={'mountain-background'} />
        </>
    );
}
