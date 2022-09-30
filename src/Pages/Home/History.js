import React from 'react';
import bg1 from '../../images/tumblr_inline_p2rsnmthfb1tzhl5u_1280.webp';
const History = () => {
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className='border-1 border-black  my-20 mx-7'>
            <div className='md:grid md:grid-cols-3 h-full'>
                <div style={{ color: "#000001d6" }} className='border-2 p-4 py-8 bg-white  '>
                    {/* data here */}
                    <h2 className="text-4xl my-10 font-semibold font-mono">Our History</h2>
                    <p className='leading-8' >
                        Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things. While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface.
                        Throughout its long history, Earth has warmed and cooled time and again. Climate has changed when the planet received more or less sunlight due to subtle shifts in its orbit, as the atmosphere or surface changed, or when the Sun’s energy varied. But in the past century, another force has started to influence Earth’s climate: humanity.
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