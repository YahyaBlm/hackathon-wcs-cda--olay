import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Carousel from './pages/carousel.jsx';
import DiscoveredSea from './pages/discovered-sea.jsx';
import Error404 from './pages/error-404.jsx';
import DiscoveredMountain from './pages/discovered-mountain.jsx';
import DiscoveredDesert from './pages/discovered-desert.jsx';
import DiscoveredForest from './pages/discovered-forest.jsx';

const router = createBrowserRouter(
    [
        {
            element: <App />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/landscapes',
                    element: <Carousel />,
                },
                {
                    path: '/discovered-sea',
                    element: <DiscoveredSea />,
                },
                {
                    path: '/discovered-mountain',
                    element: <DiscoveredMountain />,
                },
                {
                    path: '/discovered-desert',
                    element: <DiscoveredDesert />,
                },
                {
                    path: '/discovered-forest',
                    element: <DiscoveredForest />,
                },
                {
                    path: '*',
                    element: <Error404 />,
                },
            ],
        },
    ],
    { basename: import.meta.env.BASE_URL }
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
