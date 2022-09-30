import React from 'react';
import './BlogsCard.css';
const BlogsCard = ({ bgColor, color, source, title, content, link }) => {
    // const = data;
    return (
        <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="card lg:card-side bg-base-100 shadow-xl">
            <img src={source} className="w-1/2 h-full" alt="Album" />
            <div className={`card-body ${bgColor} ${color}`}>
                <h2 className="card-title">{title}</h2>
                <div className='my-2'>
                    <p className='leading-7'>{content}   <span className='font-bold cursor-pointer underline'><a target="_blank" href={link}>Read more</a></span></p>
                </div>

            </div>
        </div>
    );
};

export default BlogsCard;