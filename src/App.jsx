import { Outlet } from 'react-router-dom';

import Header from './components/header';
import './main.css';

function App() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default App;
