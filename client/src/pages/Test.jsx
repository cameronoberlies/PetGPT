
import React, { useState } from 'react';
// import Chat from '../components/ai';
import '../test.css';
import { useNavigate } from 'react-router-dom';
import Breeds from './Breed';

function Test() {
const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 'lifestyle',
      text: 'What is your lifestyle?',
      options: [
        { id: 'active', text: 'Active' },
        { id: 'moderate', text: 'Moderate' },
        { id: 'relaxed', text: 'Relaxed' },
      ],
    },
    {
      id: 'home',
      text: 'What type of home do you live in?',
      options: [
        { id: 'apartment', text: 'Apartment' },
        { id: 'houseWithYard', text: 'House with Yard' },
        { id: 'houseWithoutYard', text: 'House without Yard' },
        { id: 'farm', text: 'Rural/Farm' },
      ],
    },
    {
      id: 'household',
      text: 'What is your household composition?',
      options: [
        { id: 'single', text: 'Single' },
        { id: 'couple', text: 'Couple' },
        { id: 'family', text: 'Family with Children' },
      ],
    },
    {
      id: 'size',
      text: 'What is your dog size preference?',
      options: [
        { id: 'small', text: 'Small' },
        { id: 'medium', text: 'Medium' },
        { id: 'large', text: 'Large' },
      ],
    },
    // {
    //   id: 'shedding',
    //   text: 'What is your shedding preference?',
    //   options: [
    //     { id: 'low', text: 'Low' },
    //     { id: 'moderate', text: 'Moderate' },
    //     { id: 'high', text: 'High' },
    //   ],
    // },
    // {
    //   id: 'climate',
    //   text: 'What is the climate where you live?',
    //   options: [
    //     { id: 'hot', text: 'Hot' },
    //     { id: 'mild', text: 'Mild' },
    //     { id: 'cold', text: 'Cold' },
    //   ],
    // },
  ];

  const optionClicked = (questionId, optionId) => {
    setAnswers((prevAnswers) => {
      const newAnswers = {
        ...prevAnswers,
        [questionId]: optionId,
      };
      console.log(newAnswers); 
      return newAnswers;
    });
  };

  const isQuestionAnswered = (questionId) => {
    return answers.hasOwnProperty(questionId);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };


//   const restartSurvey = () => {
//     setAnswers({});
//     setCurrentQuestion(0);
//     setShowResults(false);
//   };

  const navigate = useNavigate();
  const goToResultsPage = () => {
    navigate('/breed', { state: { answers } });
  }

  return (
    <>
      <div className="container mt-sm-5 my-1">
        <div className="question ml-sm-5 pl-sm-5 pt-2">
          <div className="py-2 h5">
            <b>
              Question {currentQuestion + 1} of 4. {questions[currentQuestion].text} 
            </b>
          </div>
          <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
            <ul>
              {questions[currentQuestion].options.map((option) => (
                <li key={option.id} className="options">
                  <label>
                    <input
                      type="checkbox"
                      checked={
                        isQuestionAnswered(questions[currentQuestion].id) &&
                        answers[questions[currentQuestion].id] === option.id
                      }
                      onChange={() =>
                        optionClicked(questions[currentQuestion].id, option.id)
                      }
                    />
                    {' '}
                    {option.text}
                    <span className="checkmark"></span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="d-flex align-items-center pt-3">
          <div id="prev">
            <button
              className="btn btn-primary"
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
          </div>
          <div className="ml-auto mr-sm-5">
            <button
              className="btn btn-success"
              onClick={() => {
                if (currentQuestion === questions.length - 1) {
                  goToResultsPage();
                } else {
                  handleNextQuestion();
                }
              }}
            >
              {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
           
          </div>
        </div>
      </div>
      {showResults && <Breeds answers={answers} />}
      {/* {showResults && (
        <div className="final-results">
          <Chat {...answers} />
          <button className="btn btn-primary d-flex justify-content-center mx-auto"  onClick={() => restartSurvey()}>
            Restart survey
          </button> 
        </div>
      )} 
       <Chat {...choices} /> */}
    </>
  );
}

export default Test;
