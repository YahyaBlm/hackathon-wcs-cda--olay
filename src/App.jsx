import { Outlet } from 'react-router-dom';

import './main.css';

function App() {
    return (
        <>
            <main style={{ backgroundColor: '#e4e4e48f' }}>
                <Outlet />
            </main>
        </>
    );
}

export default App;
