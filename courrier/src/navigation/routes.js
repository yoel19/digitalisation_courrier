import Connexion from "../connexion/login";
import Navbar from "../connexion/Navbar";
import SecretaryDashoard from '../connexion/SecretaryDashboard';
import ChiefDashboard from '../connexion/ChiefDashboard';

const routes = [
    {
        path: '*',
        element: <Connexion />
    },
    {
        path: '/connexion',
        element: <Connexion />
    },
    {
        path: '/dashboard/Navbar',
        element: <Navbar />
    },
    {
        path: '/dashboard/secretary',
        element: <SecretaryDashoard />
    },
    {
        path: '/dashboard/chief',
        element: <ChiefDashboard />
    }
];

export default routes;