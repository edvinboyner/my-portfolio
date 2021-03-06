import React from "react";
import image from "../img/Pic.jpg";
// import { NavLink } from "react-router-dom";

export default function Home(){
    return (
        <main className="fixed h-full w-full">
            <img src={image} alt="Space" className="absolute  object-cover w-full h-full " />
             <section className="relative flex justify-center min-h-screen pt-12 lg:pt-44 px-8 ">
                 <h1 className="animate-pulse flex space-x-4 text-white cursive leading-none lg:leading-snug home-name" >Edvin | Boyner</h1>
             </section>

        </main>        
    )
}