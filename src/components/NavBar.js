import React from "react";
import { NavLink } from "react-router-dom";
import {SocialIcon } from "react-social-icons";
import pdf from '../pdf/Edvin_CV_svenska.pdf'


export default function NavBar(){
    return (
        <header className="bg-gray-800 ">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact 
                    activeClassName="text-white"
                    className="inflex-flex items-center py-7 px-4 mr-4 text-gray-600 hover:text-gray-200 text-4xl cursive tracking-widest">
                        Edvin
                    </NavLink>
                    <NavLink to="/post" activeClassName="text-white"
                    className="inflex-flex items-center py-4 px-3 my-6 rounded text-gray-600 hover:text-gray-200">
                        Posts
                    </NavLink>
                    <NavLink to="/project" activeClassName="text-white"
                    className="inflex-flex items-center py-4 px-3 my-6 rounded text-gray-600 hover:text-gray-200">
                        Projects
                    </NavLink>
                    <NavLink to="/about" activeClassName="text-white"
                    className="inflex-flex items-center py-4 px-3 my-6 rounded text-gray-600 hover:text-gray-200">
                        About Me
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-9 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/edvinboyner/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                    <SocialIcon url="https://github.com/edvinboyner?tab=repositories" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} /> 

                    <SocialIcon url={pdf}  className="display: inline-block mr-4" target="_blank" bgColor="#303030" fgColor="#ffffff" style={{height: 35, width: 35}}/>
      
                    <SocialIcon url="edvin@boyner.se" network="email" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                    {/* <a target="_blank" href={pdf}>Click here for my pdf</a> */}
                </div>
            </div>
        </header>
    )
}