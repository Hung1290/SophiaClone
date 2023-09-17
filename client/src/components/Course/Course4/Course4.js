import React from 'react'
import { Header } from "../../Header";
import { Footer } from "../../Footer";
import { Session1 } from './Session1'
import { Session2 } from './Session2'
import { Session3 } from './Session3'
import { Session4 } from './Session4'
import { Session5 } from '../Course3/Session5'

export const Course4 = () => {
  return (
    <div>
      <Header/>
      <Session1/>
      <Session2/>
      <Session3/>
      <Session5/>
      <Session4/>
      <Footer/>
    </div>
  )
}
