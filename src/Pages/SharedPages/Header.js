import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100 h-28 px-7">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-4xl">hello</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li className='md:mx-5'><NavLink to="/home">Home</NavLink></li>
                    <li className='md:mx-5'><NavLink to="/quiz">Quiz</NavLink></li>
                    <li className='md:mx-5'><NavLink to="/blog">Blog</NavLink></li>
                    <li className='md:mx-5'><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;