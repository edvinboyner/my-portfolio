import React from "react";
import image from "../img/Space.jpg";

export default function Home(){
    return (
        <main>
            <img src={image} alt="Space" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8 ">
                <h1 className="text-6xl text-white cursive leading-none lg:leading-snug home-name" >Edvin | Boyner</h1>
            </section>
        </main>
    )
}