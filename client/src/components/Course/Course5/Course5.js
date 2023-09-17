import React from 'react'
import { Header } from "../../Header";
import { Footer } from "../../Footer";
import { Session1 } from './Session1'
import { Session2 } from './Session2'
import { Session3 } from './Session3'
import { Session4 } from './Session4'
import { Session5 } from './Session5'
import { Session6 } from './Session6'

export const Course5 = () => {
  return (
    <div>
      <Header/>
      <Session1/>
      <Session2/>
      <Session3/>
      <Session4/>
      <Session5/>
      <Session6/>
      <Footer/>
    </div>
  )
}
