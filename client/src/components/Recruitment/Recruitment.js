import React from 'react'
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Recruitment1 } from './Recruitment1';
import { Recruitment2 } from './Recruitment2';
import { Recruitment3 } from './Recruitment3';

export const Recruitment = () => {
  return (
    <div>
        <Header/>
        <Recruitment1/>
        <Recruitment2/>
        <Recruitment3/>
        <Footer/>
    </div>
  )
}
