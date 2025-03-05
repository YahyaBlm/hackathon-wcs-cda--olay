import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Error404 from './pages/error-404.jsx';
import Discovered from './pages/discovered.jsx';
import Carousel from './pages/carousel.jsx';

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
                    path: '/discovered',
                    element: <Discovered />,
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
