import React from 'react';
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Post1 } from "./Post1";
import { Post2 } from "./Post2";

export const Posts = () => {
  return (
    <div>
        <Header/>
        <Post1/>
        <Post2/>
        <Footer/>
    </div>
  )
}
