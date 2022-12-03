import React from 'react';

import {
    createBrowserRouter,
    BrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
    Navigate,
    Routes
} from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

export const Links = [
    {
        path: "/",
        title: 'Home',
        element: <Home />,
    },
    {
        path: "/dashboard",
        title: 'Dashboard',
        element: <Dashboard />,
    },
];

const Router = () => {
    return (
        <Routes>
            {Links.map((k, i) =>
                <Route key={i} path={k.path} element={k.element} />
            )}
            <Route path="*" element={<Navigate to="/" replace />} replace />
        </Routes>
    );
};

export default Router;