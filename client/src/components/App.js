import React from "react";
import { Home } from "./HomePage/Home";
import { AboutUs } from "./AboutUs/AboutUs";
import { Recruitment } from "./Recruitment/Recruitment";
import { Contact } from "./Contact/Contact";
import { Posts } from "./Posts/Posts";
import { ContactList } from "./ContactList/ContactList"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/AboutUs",
    element: <AboutUs/>,
  },
  {
    path: "/Recruitment",
    element: <Recruitment/>,
  },
  {
    path: "/Contact",
    element: <Contact/>,
  },
  {
    path: "/Posts",
    element: <Posts/>,
  },
  {
    path: "/ContactList",
    element: <ContactList/>,
  },
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
