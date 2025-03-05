import { Outlet } from 'react-router-dom';

import DiscoverHeader from '../components/discovered-header';
import DiscoverFooter from '../components/discovered-footer';

import '../main.css';
import '../css/discovered.css';

function App() {
    return (
        <>
            <DiscoverHeader />
            <main>
                <Outlet />
            </main>
            <DiscoverFooter />
        </>
    );
}

export default App;
