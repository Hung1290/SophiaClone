import React from 'react'
import { Header } from "../Header";
import { Footer } from "../Footer";
import { AboutUs1 } from "./AboutUs1"
import { AboutUs2 } from "./AboutUs2"
import { AboutUs3 } from "./AboutUs3"
import { AboutUs4 } from "./AboutUs4"
import { AboutUs5 } from "./AboutUs5"
import { AboutUs6 } from "./AboutUs6"
import { AboutUs7 } from "./AboutUs7"
import { Home6 } from "../HomePage/Home6"

export const AboutUs = () => {
  return (
    <div>
      <Header/>
      <AboutUs1/>
      <AboutUs2/>
      <AboutUs3/>
      <AboutUs4/>
      <AboutUs5/>
      <AboutUs6/>
      <Home6/>
      <AboutUs7/>
      <Footer/>
    </div>
  )
}
