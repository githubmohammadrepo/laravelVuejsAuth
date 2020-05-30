import Home from './components/Home';
import Login from './components/auth/Login';

import About from './components/About';

export default [
    {
        path: '/',
        component: Home,
        meta:{
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/about',
        component: About
    },

];
