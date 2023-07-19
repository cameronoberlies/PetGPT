import React, { useState } from 'react';
import Chat from '../components/ai';
import '../App.css';

function Test() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 'active',
      text: 'How active are you?',
      options: [
        { id: 'Active', text: 'Very active' },
        { id: 'Not active', text: 'Not very active' },
      ],
    },
    {
      id: 'home',
      text: 'What type of home do you live in?',
      options: [
        { id: 'Apartment', text: 'Apartment' },
        { id: 'House', text: 'House' },
      ],
    },
    {
      id: 'size',
      text: 'What size dog are you looking for?',
      options: [
        { id: 'Large', text: 'Large' },
        { id: 'Small', text: 'Small' },
      ],
    },
    {
      id: 'climate',
      text: 'What type of climate do you live in?',
      options: [
        { id: 'Hot', text: 'Hot' },
        { id: 'Cold', text: 'Cold' },
      ],
    },
  ];

  const optionClicked = (questionId, optionId) => {
    setAnswers((prevAnswers) => {
      const newAnswers = {
        ...prevAnswers,
        [questionId]: optionId,
      };
      console.log(newAnswers); // Log the updated answers object
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

  /* Resets the survey back to the default */
  const restartSurvey = () => {
    setAnswers({});
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
                          checked={isQuestionAnswered(questions[currentQuestion].id) && answers[questions[currentQuestion].id] === option.id}
                          onChange={() => optionClicked(questions[currentQuestion].id, option.id)}
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
  console.log(answers)
}

export default Test;
