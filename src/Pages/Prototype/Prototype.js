import React from 'react';
import pType1 from '../../images/drive-download-20220930T071609Z-001/Screenshot 2022-09-30 131323.png'
import pType2 from '../../images/drive-download-20220930T071609Z-001/Screenshot 2022-09-30 131404.png'
import pType3 from '../../images/drive-download-20220930T071609Z-001/Screenshot 2022-09-30 131453.png'
const Prototype = () => {
    return (
        <div className='w-4/5 mx-auto '>
            <h1 className="text-3xl my-6 text-center font-sans">Blue Holes</h1>

            <p className='text-justify leading-9'>
                The prototype of our Future Game “Blue holes” is a game created for the awareness of the people. It lets the user to gain knowledge about the sinkholes. It has some missions that, asks the user to protect their surrounding environment by doing some tasks.
            </p>

            <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className='grid grid-cols-1 md:grid-cols-2 my-6'>
                {/* image container */}
                <div className='mx-6'>
                    <img src={pType1} alt="" />
                </div>
                <div className='mx-6'>
                    <img src={pType2} alt="" />
                </div>

            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="2000"
            >
                <div className='w-1/2 mx-auto'>
                    <img src={pType3} alt="" />
                </div>
                <div className='flex justify-center items-center my-10'>
                    {/* href link btn for prototype */}
                    <button className='btn'>
                        <a target="_blank" href="https://www.figma.com/proto/nlpYkMuiCAwySRPN3kbBP8/Untitled?node-id=36%3A8802&scaling=scale-down&page-id=0%3A1&starting-point-node-id=36%3A8802">See Preview Of The Prototype</a>
                    </button>
                </div>
            </div>


        </div>
    );
};

export default Prototype;