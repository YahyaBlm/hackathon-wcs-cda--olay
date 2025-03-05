import { Outlet } from 'react-router-dom';

import Header from './components/header';
import DiscoverFooter from './components/discovered-footer';

import './main.css';

function App() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <DiscoverFooter className={'sea-background'} />

        </>
    );
}

export default App;
