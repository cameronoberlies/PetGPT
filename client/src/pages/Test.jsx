import React, { useState } from 'react';
import Chat from '../components/ai';
import '../App.css';

function Test() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      text: 'How active are you?',
      options: [
        { id: 0, text: 'Very active' },
        { id: 1, text: 'Not very active' },
      ],
    },
    {
      text: 'What type of home do you live in?',
      options: [
        { id: 0, text: 'Apartment' },
        { id: 1, text: 'House' },
      ],
    },
    {
      text: 'What size dog are you looking for?',
      options: [
        { id: 0, text: 'Large' },
        { id: 1, text: 'Small' },
      ],
    },
    {
      text: 'What type of climate do you live in?',
      options: [
        { id: 0, text: 'Hot' },
        { id: 1, text: 'Cold' },
      ],
    },
  ];

  const optionClicked = (optionId) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionId;
    setAnswers(newAnswers);
  };

  const isQuestionAnswered = (questionIndex) => {
    return typeof answers[questionIndex] !== 'undefined';
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the survey back to the default */
  const restartSurvey = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <>
      <div className="App">
        {/* 1. Header */}
        <h1>Dog Matcher</h1>

        {/* 3. Show results or show the survey */}
        {showResults ? (
          /* 4. Final Results */
          <div className="final-results">
            <Chat {...answers} />
            <button onClick={() => restartSurvey()}>Restart survey</button>
          </div>
        ) : (
          /* 5. Survey Card */
          <div className="survey-card">
            {/* Current Question */}
            <h2>
              Question: {currentQuestion + 1} out of {questions.length}
            </h2>
            <h3 className="question-text">{questions[currentQuestion].text}</h3>
            <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
              {/* List of possible answers */}
              <ul>
                {questions[currentQuestion].options.map((option) => {
                  return (
                    <li key={option.id}>
                      <label>
                        <input
                          type="checkbox"
                          checked={isQuestionAnswered(currentQuestion) && answers[currentQuestion] === option.id}
                          onChange={() => optionClicked(option.id)}
                        />
                        {option.text}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
            <button onClick={() => handleNextQuestion()}>Next</button>
          </div>
        )}
      </div>
      {/* <Chat {...choices} /> */}
    </>
  );
}

export default Test;
