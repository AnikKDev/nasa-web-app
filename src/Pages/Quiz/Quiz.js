import React from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
import './Quiz.css';
const Quiz = () => {
    const questions = [
        {
            questionText: 'About how big are sinkholes?',
            answerOptions: [
                { answerText: 'A house', isCorrect: true },
                { answerText: 'A football', isCorrect: false },
                { answerText: 'A city', isCorrect: false },
                { answerText: 'A car', isCorrect: false },
            ],
        },
        {
            questionText: 'Why do sinkholes occur?',
            answerOptions: [
                { answerText: 'Underground animals dig big burrows', isCorrect: false },
                { answerText: 'Grand water level decreases leading to a cavern', isCorrect: true },
                { answerText: "Sinkholes aren't real", isCorrect: false },
                { answerText: 'Heavy raingall seeps underground and makes it weak.', isCorrect: false },
            ],
        },
        {
            questionText: 'What can we say about the frequency of sinkholes?',
            answerOptions: [
                { answerText: "They've been incresasing worldwide.", isCorrect: true },
                { answerText: "They've been decreasing worldwide.", isCorrect: false },
                { answerText: "They've been about the same.", isCorrect: false },
                { answerText: "We don't have enough data.", isCorrect: false },
            ],
        },
        {
            questionText: 'How can we reduce their occurances?',
            answerOptions: [
                { answerText: "By creating opportnitites for rain.", isCorrect: false },
                { answerText: 'By reducing ground water extraction.', isCorrect: false },
                { answerText: 'By tackling global warming.', isCorrect: false },
                { answerText: "All of the above.", isCorrect: true },
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
            sessionStorage.setItem('quizScore', score)
            setShowScore(true);
            setTimeout(() => {
                window.location.reload()
            }, 2000)
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
                    (<div className=' grid md:grid-cols-2'>

                        <img style={{ height: "553px" }} className="" src="https://media.istockphoto.com/photos/sinkhole-in-sidewalk-picture-id513251419" alt="" />
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