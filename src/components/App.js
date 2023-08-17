import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home } from "./HomePage/Home";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },

])

function App() {
  return (
  <div>
    <Header/>
    <RouterProvider router={router}/>
    <Footer/>
  </div>
  )
}

export default App;
