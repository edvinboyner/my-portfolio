import React, { useEffect, useState } from "react";
import sanityClient from "../client.js"
import image from "../img/Pic.jpg"
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"
import Home from "../components/Home"


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function About(){
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "author"]{
            name, 
            bio,
            "authorImage": image.asset->url
        }`)
        .then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if(!author) return   <main className="fixed h-full w-full">
                <img src={image} alt="black" className="relative object-cover w-full h-full" />
    </main>

    return(
        <main className="fixed h-full w-full">
                  <img src={image} alt="black" className="absolute object-cover w-full h-full" />
                     {/* <Home /> */}
             <div className="p-36  container mx-auto relative">
                 <section className=" max-w-screen-lg justify-center bg-black opacity-90 rounded-lg shadow-2xl lg:flex p-10 ">
                     <img src={urlFor(author.authorImage).url()} className="rounded w-32 h-32 lg:w-44 lg:h-64 mr-8" alt={author.name} />
                     <div className="text-lg flex flex-col justify-center">
                         <h1 className="cursive text-6xl text-gray-400 mb-4">Hey there. I'm {" "}
                         <span className="animate-pulse text-gray-100">{author.name}</span>
                             </h1>
                         <div className="prose lg:prose-xl text-white">
                             <BlockContent blocks={author.bio} projectId="tm6jkk8f" dataset="production"/>
                         </div>
                     </div>
                 </section>
             </div>
         </main>
    )
}