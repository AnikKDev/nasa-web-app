import React from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
import './Quiz.css';
const Quiz = () => {
    const questions = [
        {
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'New York', isCorrect: false },
                { answerText: 'London', isCorrect: false },
                { answerText: 'Paris', isCorrect: true },
                { answerText: 'Dublin', isCorrect: false },
            ],
        },
        {
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false },
            ],
        },
        {
            questionText: 'The iPhone was created by which company?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
            ],
        },
    ];
    // console.log(questions[0])
    // 
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // showing score
    const [showScore, setShowScore] = useState(false);
    // answer value
    const [score, setScore] = useState(0);
    // clicking on the answers
    const handleAnswerClick = (isCorrect) => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            if (isCorrect) {
                setScore(score + 1);

            }
        }
        else {
            setShowScore(true);
            localStorage.setItem('quizScore', score)
            alert('done')
        }
    };
    return (
        <div>

            {
                showScore ? (<div className='flex justify-center items-center flex-col h-72 score-section'>

                    <h2 className='text-3xl my-6'> You scored {score} out of {questions.length}</h2>
                    <p><small>Please refresh the page to take the quiz againn *</small></p>
                </div>)
                    :
                    (<div className=' grid grid-cols-2'>
                        <div className='modal-bg-image text-white p-6 leading-7'>
                            <h3 className="text-2xl">What meow meow?</h3>
                            <p className='mt-6 leading-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit voluptas ratione, nobis odio recusandae vero.</p>
                            <h3 className="text-2xl">What meow meow?</h3>
                            <p className='mt-6 leading-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit voluptas ratione, nobis odio recusandae vero.</p>
                            <h3 className="text-2xl">What meow meow?</h3>
                            <p className='mt-6 leading-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit voluptas ratione, nobis odio recusandae vero.</p>
                        </div>
                        <div className='w-4/5 mx-auto p-6'>
                            <div className='question-section mb-16 flex items-center'>
                                <div>
                                    <div className='question-count text-3xl'>
                                        <span className=''>Question {currentQuestion + 1}</span>/{questions.length}
                                    </div>
                                    <div className='question-text text-2xl mt-10'>
                                        {questions[currentQuestion]?.questionText}
                                    </div>
                                </div>
                            </div>
                            <div className='answer-section'>
                                {
                                    questions[currentQuestion].answerOptions.map((answers, index) => (
                                        <button className='block border-2 border-black text-black hover:bg-black hover:text-white transition-all w-full my-4 p-2 rounded-md' onClick={() => handleAnswerClick(answers.isCorrect)} key={index}>{answers.answerText}</button>
                                    ))
                                }
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Quiz;