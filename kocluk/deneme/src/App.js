import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './element/Navbar';
import Home from './Home';
import UyeOl from './element/UyeOl';
import UyeGirisi from './element/UyeGirisi';
import './App.css';
import LoginHome from './element/LoginHome';
import LoginHomeOgretmen from './element/LoginHomeOgretmen';
import Kunduz from './element/Kunduz';
import OgretmenSecme from './element/OgretmenSecme';
import Odeme from './element/Odeme';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "uyeol",
        element: <UyeOl />
      },
      {
        path: "uyegirisi",
        element: <UyeGirisi />
      },
      {
        path: "loginhome",  // küçük harf
        element: <LoginHome />
      },
      {path:"loginhomeogretmen",
       element :< LoginHomeOgretmen />

      },
      {
        path:"kunduz",
        element:<Kunduz/>
      },
      {path:"ogretmensecme",
        element:<OgretmenSecme />
      },
      {path:"odeme",
        element:<Odeme />
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;