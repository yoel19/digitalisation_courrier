import Connexion from "../connexion/login";
import Navbar from "../connexion/Navbar";
import ParametreAdmin from "../connexion/parametreAdmin";
import Users from "../connexion/Users";
import WorkspaceAdmin from "../connexion/WorkspaceAdmin";

const routes = [
   
    {
        path: '',
        element: <Connexion />
    },
    {
        path: '/dashboard/Navbar',
        element: <Navbar />
    },
    {
        path: '/dashboard/parametreAdmin',
        element: <ParametreAdmin/>
    },
    {
        path: '/dashboard/workspaceAdmin',
        element: <WorkspaceAdmin/>
    },
    {
        path: '/dashboard/users',
        element: <Users/>
    },
    /*{
        path: '/dashboard/',
        element: <SecretaryDashoard />
    },
    {
        path: '/dashboard/chief',
        element: <ChiefDashboard />
    },
    /*{
        path: '*',
        element: <Connexion />
    },*/
];

export default routes;