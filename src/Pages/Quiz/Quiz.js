import React from 'react';
import { useState } from 'react';

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
    }
    return (
        <div>
            {
                showScore ? (<div className='score-section'>You scored {score} out of {questions.length}</div>)
                    :
                    (<>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>
                                {questions[currentQuestion]?.questionText}
                            </div>
                        </div>
                        <div className='answer-section'>
                            {
                                questions[currentQuestion].answerOptions.map((answers, index) => (
                                    <button onClick={() => handleAnswerClick(answers.isCorrect)} key={index}>{answers.answerText}</button>
                                ))
                            }

                        </div>
                    </>)
            }
        </div>
    );
};

export default Quiz;