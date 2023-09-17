import React from 'react'
import { Header } from "../../Header";
import { Footer } from "../../Footer";
import { Session1 } from './Session1'
import { Session2 } from './Session2'
import { Session3 } from './Session3'
import { Home8 } from '../../HomePage/Home8'

export const Course6 = () => {
  return (
    <div>
      <Header/>
      <Session1/>
      <Session2/>
      <Session3/>
      <div className='bg-[#fafafa]'>
      <Home8/>
      </div>
      <Footer/>
    </div>
  )
}
