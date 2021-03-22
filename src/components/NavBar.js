import React from "react";
import { NavLink } from "react-router-dom";
import {SocialIcon } from "react-social-icons";

export default function NavBar(){
    return (
        <header className="bg-gray-900">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact 
                    activeClassName="text-white"
                    className="inflex-flex items-center py-7 px-4 mr-4 text-gray-600 hover:text-gray-200 text-4xl cursive tracking-widest">
                        Edvin
                    </NavLink>
                    <NavLink to="/post" activeClassName="text-white"
                    className="inflex-flex items-center py-4 px-3 my-6 rounded text-gray-600 hover:text-gray-200">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project" activeClassName="text-white"
                    className="inflex-flex items-center py-4 px-3 my-6 rounded text-gray-600 hover:text-gray-200">
                        Projects
                    </NavLink>
                    <NavLink to="/about" activeClassName="text-white"
                    className="inflex-flex items-center py-4 px-3 my-6 rounded text-gray-600 hover:text-gray-200">
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-9 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/edvinboyner/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                    <SocialIcon url="https://github.com/edvinboyner?tab=repositories" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} /> 
                    {/* <SocialIcon url="" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} /> */}
                </div>
            </div>
        </header>
    )
}