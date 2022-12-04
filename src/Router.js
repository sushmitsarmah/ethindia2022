import React from 'react';

import {
    Route,
    Navigate,
    Routes
} from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Sport from './pages/Sport';
import LeaderBoard from './pages/LeaderBoard';

export const Links = [
    {
        path: "/",
        title: 'Home',
        element: <Home />,
    },
    {
        path: "/leaderboard",
        title: 'Leaderboard',
        element: <LeaderBoard />,
    },
    {
        path: "/dashboard",
        title: 'Dashboard',
        element: <Dashboard />,
        children: [
            {
                path: ':sport',
                element: <Sport />,
            }
        ]
    },
];

const Router = () => {
    return (
        <Routes>
            {Links.map((k, i) =>
                <Route key={i} path={k.path} element={k.element}>
                    {k.children ? 
                        k.children.map((d, ix) =>
                            <Route key={ix} path={d.path} element={d.element}/>
                        )
                        : ''
                    }
                </Route>
            )}
            {/* <Route path="*" element={<Navigate to="/" replace />} replace /> */}
        </Routes>
    );
};

export default Router;