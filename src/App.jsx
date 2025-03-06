import { Outlet } from 'react-router-dom';

import './main.css';

function App() {
    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default App;
