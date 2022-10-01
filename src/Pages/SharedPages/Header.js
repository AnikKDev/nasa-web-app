import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100 h-28 px-7">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-4xl">Blue Marble</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li className='md:mx-5'><NavLink to="/home">Home</NavLink></li>
                    <li className='md:mx-5'><NavLink to="/quiz">Quiz</NavLink></li>
                    <li className='md:mx-5'><NavLink to="/prototype">Prototype</NavLink></li>
                    <li className='md:mx-5'><NavLink to="/calamities">Natural Calamities</NavLink></li>
                    <li className='md:mx-5'><NavLink to="/gallery">Gallery</NavLink></li>
                    {/* <li className='md:mx-5'><NavLink to="/about">About</NavLink></li> */}
                </ul>
            </div>
        </div>
    );
};

export default Header;