import React, { useEffect, useState }from "react";
import sanityClient from "../client.js"
import image from "../img/Pic.jpg"
import Home from "../components/Home"

export default function Project(){
    const [projectData, setProjectData] = useState(null); 


    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`).then((data)=> setProjectData(data))
        .catch(console.error);
    }, []);

    return (
        <main className="relative h-full w-full">
           <img src={image} alt="Space" className="absolute object-cover w-full h-full" />
                     {/* <Home /> */}
           <section className="container mx-auto">
               <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
               {/* <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my projects page!</h2> */}
               <section className="grid grid-cols-2 gap-8">
                   {projectData && 
                   projectData.map((project, index) => (                   
                   <article className="border-l-8 border-gray-700 relative rounder-lg mr-24 shadow-xl bg-gray-200 rounded-2xl opacity-60 p-16">
                       <h3 className=" text-gray-800 text-3xl font-bold mb-2 hover:text-gray-500">
                           <a
                           href={project.link}
                           alt={project.title}
                           target="_blank"
                           rel="noopener noreferrer"
                           >
                               {project.title}
                           </a>
                       </h3>
                       <div className=" text-gray-700 text-xs space-x-4">
                           <span>
                               <strong className="font-bold">Finished on</strong>:{" "}
                               {new Date(project.date).toLocaleDateString()}
                           </span>
                           <span>
                               <strong className="font-bold">Company</strong>:{" "}
                               {project.place}
                           </span>
                           <span>
                               <strong className="font-bold">Type</strong>:{" "}
                               {project.projectType}
                           </span>
                           <p className="my-6 text-lg text-gray-700 leading-relaxed">
                               {project.description}
                           </p>
                           <a href={project.link} rel="noopener noreferrer"  target="_blank" className="text-gray-900 font-bold hover:underline hover:text-gray-500">
                               More Information{" "}
                           <span role="img" aria-label="right pointer">
                           </span>
                           </a>
                           
                       </div>
                   </article>
                   ))}
               </section>
           </section>
       </main>
    )
}