import React from 'react';
import Quiz from '../Quiz/Quiz';
const QuizContent = () => {
    const scoreFromStorage = sessionStorage.getItem('quizScore');
    console.log(scoreFromStorage)
    return (
        <div className='w-4/5 text-justify mx-auto'>
            {/* quiz content container */}
            <div>
                <div className='flex justify-end mb-6'>
                    <p className='border-3 border-gray-700 bg-gray-600 text-white p-3 rounded-md'>Total Score: <span className='font-bold'>{scoreFromStorage ? scoreFromStorage : scoreFromStorage}</span></p>
                </div>
                <div>
                    <h1 className='text-4xl text-center mb-8 text-bold font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing ?</h1>

                    <p className='leading-9'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex quisquam blanditiis adipisci? Officiis quia, natus odit minima magni, illo nihil velit possimus neque ipsa placeat ducimus iste id assumenda blanditiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, eveniet?</p>
                </div>
            </div>

            {/* modal */}
            <div className='flex justify-center'>
                {/* modal opening button */}
                <label htmlFor="my-modal-6" className="btn modal-button">Take the quiz</label>

                {/* modal body */}
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal ">
                    <div style={{ "height": "600px" }} className="modal-box p-0 w-11/12 max-w-6xl">
                        <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <Quiz />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizContent;