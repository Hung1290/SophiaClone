import React from "react";
import { Home } from "./HomePage/Home";
import { AboutUs } from "./AboutUs/AboutUs";
import { Recruitment } from "./Recruitment/Recruitment";
import { Contact } from "./Contact/Contact";
import { Posts } from "./Posts/Posts";
import { ContactList } from "./ContactList/ContactList"
import { Course1 } from "./Course/Course1/Course1"
import { Course2 } from "./Course/Course2/Course2"
import { Course3 } from "./Course/Course3/Course3"
import { Course4 } from "./Course/Course4/Course4"
import { Course5 } from "./Course/Course5/Course5"
import { Course6 } from "./Course/Course6/Course6"
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
  {
    path: "/Course1",
    element: <Course1/>,
  },
  {
    path: "/Course2",
    element: <Course2/>,
  },
  {
    path: "/Course3",
    element: <Course3/>,
  },
  {
    path: "/Course4",
    element: <Course4/>,
  },
  {
    path: "/Course5",
    element: <Course5/>,
  },
  {
    path: "/Course6",
    element: <Course6/>,
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
