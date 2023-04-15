import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { HelmetProvider } from 'react-helmet-async';


import Home from './pages/Home';
import Html from './pages/Html';
import Css from './pages/css';
import Javascript from './pages/Javascript';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<h1>Sorry not Found........</h1>
  },
  {
    path: "/Html",
    element: <Html/>
    
  },
  {
    path: "/Css",
    element: <Css/>
    
  },
  {
    path: "/JavaScript",
    element: <Javascript/>
    
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
     
  </React.StrictMode>
);

