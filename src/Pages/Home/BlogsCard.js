import React from 'react';
import './BlogsCard.css';
const BlogsCard = ({ bgColor, color, source }) => {
    return (
        <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="card h-80 lg:card-side bg-base-100 shadow-xl">
            <img src={source} alt="Album" />
            <div className={`card-body ${bgColor} ${color}`}>
                <h2 className="card-title">MEOWWW!!!</h2>
                <div className='my-2'>
                    <p className='leading-7'>Click the button to listen on Spotiwhy app. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eius autem aliquam unde cumque. Animi omnis nam tenetur ab. Inventore... <span className='font-bold cursor-pointer underline'>Read more</span></p>
                </div>

            </div>
        </div>
    );
};

export default BlogsCard;