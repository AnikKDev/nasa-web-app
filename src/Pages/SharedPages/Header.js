import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100 h-28 px-7">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-4xl">hello</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li className='md:mx-5'><Link to="/">Home</Link></li>
                    <li className='md:mx-5'><Link to="/blog">Blog</Link></li>
                    <li className='md:mx-5'><Link to="/about">About</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;