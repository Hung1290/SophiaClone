import React from 'react'
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Home1 } from './Home1'
import { Home2 } from './Home2'
import { Home3 } from './Home3'
import { Home4 } from './Home4'
import { Home5 } from './Home5'
import { Home6 } from './Home6'
import { Home7 } from './Home7'
import { Home8 } from './Home8'
import { Home9 } from './Home9'

export const Home = () => {
  return (
    <div>
        <Header/>
        <Home1/>
        <Home2/>
        <Home3/>
        <Home4/>
        <Home5/>
        <div className='bg-[#f8f9fa]'>
        <Home6/>
        </div>
        <Home7/>
        <Home8/>
        <Home9/>
        <Footer/>
    </div>
  )
}
