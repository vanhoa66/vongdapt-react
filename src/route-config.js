import React from 'react';

// import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
// import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import MyAccountPage from './pages/MyAccountPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    // {
    //     path: '/product/:id',
    //     exact: true,
    //     main: ({ match }) => <ProductPage match={match} />
    // },
    {
        path: '/login',
        exact: true,
        main: () => <LoginPage />
    },

    {
        path: '/myaccount',
        exact: true,
        main: () => <MyAccountPage />
    },
    // { 
    //     path: '',
    //     exact: true,
    //     main: () => <NotfoundPage />
    // },
];

export default routes;