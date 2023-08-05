
import React from 'react';
import './App.css';
import Connexion from "./connexion/login";
import Navbar from './connexion/Navbar';
import SecretaryDashoard from './connexion/SecretaryDashboard';
import ChiefDashboard from './connexion/ChiefDashboard';
import { RouterProvider } from 'react-router-dom';
import navigation from './navigation';




function App() {
  return (
  <React.Fragment>
    <Navbar/>
  
      <RouterProvider router={navigation} >
      </RouterProvider>
  </React.Fragment>
    


  );
}

export default App;
