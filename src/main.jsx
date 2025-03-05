import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';

const router = createBrowserRouter(
    [
        {
            element: <App />,
            children: [
                {
                    path: '',
                    element: '',
                    loader: () => {
                        return '';
                    },
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
