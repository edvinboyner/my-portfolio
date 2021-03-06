import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import image from "../img/Pic.jpg"
import sanityClient from "../client.js";
import Home from "../components/Home"

export default function Post(){
    const[postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => setPost(data))
        .catch(console.error);
    }, []);

    
    return(
        <main className="fixed h-full w-full">
            <img src={image} alt="Space" className="absolute object-cover h-full w-full" />
            <section className="container mx-auto ">
                {/* <h1 className="text-5xl flex justify-center cursive">Blog Posts Page</h1> */}
                {/* <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my page of blog posts</h2> */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <Home /> */}
                   {postData && postData.map((post, index) => (
                       <article>
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                        <span className="block my-12 h-64 relative rounded-3xl shadow leading-snug border-l-8 border-gray-700 bg-white bg-opacity-20" key={index}>
                            {/* <img 
                            src={post.mainImage.asset.url}
                            alt={post.mainImage.alt}
                            className="w-full h-full rounded-2xl object-cover absolute"
                        /> */}
                            <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                <h3 className=" text-gray-800 text-lg font-bold px-3 py-4 bg-gray-400 opacity-70 text-gray-900 hover:text-gray-200 bg-opacity-75 rounded-lg">{post.title}</h3>
                            </span>
                        </span>
                        </Link>
                    </article>
                    ))}
                </div>
            </section>
        </main>
    )
}