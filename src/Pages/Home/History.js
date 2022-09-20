import React from 'react';
import bg1 from '../../images/tumblr_inline_p2rsnmthfb1tzhl5u_1280.webp';
const History = () => {
    return (
        <div className='border-1 border-black  my-20 mx-7'>
            <div className='md:grid md:grid-cols-3 h-full'>
                <div style={{ color: "#000001d6" }} className='border-2 p-4 py-8 bg-white  '>
                    {/* data here */}
                    <h2 className="text-4xl my-10 font-semibold font-mono">Our History</h2>
                    <p className='leading-8' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minus possimus ratione laboriosam corrupti. Impedit necessitatibus assumenda, molestiae modi optio adipisci dignissimos! Ab debitis vel modi ad, aliquid doloremque expedita esse molestiae cupiditate voluptate facilis porro recusandae ipsa minima fugiat fuga tempora dolores laborum accusamus. Dolorem suscipit minima enim modi culpa quo quibusdam. Voluptatibus, perspiciatis earum a nihil ratione, laudantium tenetur vel facere ab corporis
                    </p>
                </div>
                <div className='border-1 border-white col-span-2'>
                    {/* image here */}
                    <img className='h-full w-full' src={bg1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default History;