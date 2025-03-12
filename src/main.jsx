import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';

import './main.css';

import Home from './pages/home.jsx';

import Carousel from './pages/carousel.jsx';
import DiscoveredSea from './pages/discovered-sea.jsx';
import Error404 from './pages/error-404.jsx';
import DiscoveredMountain from './pages/discovered-mountain.jsx';
import DiscoveredDesert from './pages/discovered-desert.jsx';
import DiscoveredForest from './pages/discovered-forest.jsx';
import TermsAndConditions from './pages/terms-and-conditions.jsx';
import PrivacyPolicy from './pages/privacy-policy.jsx';

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
                    path: '/terms-and-conditions',
                    element: <TermsAndConditions />,
                },
                {
                    path: '/privacy-policy',
                    element: <PrivacyPolicy />,
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
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
