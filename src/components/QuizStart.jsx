import React from 'react';
import FooterContent from './FooterContent';

function QuizStart({ dispatch, questions, totalQuestions, index, answer }) {
  const hasAnswer = answer != null; // Check if an answer has been selected

  // Function to handle the answer click
  const handleAnswerClick = (optionIndex) => {
    if (!hasAnswer) { // Prevent further clicks after an answer is selected
      dispatch({ type: 'newAnswer', payload: optionIndex });
    }
  };

  return (
    <div className='quiz'>
      <div className="quiz_header">
        <h2>{questions.question}</h2>
      </div>

      <div className="quiz_body">
        <ul>
          {questions.options.map((option, optionIndex) => (
            <li
              key={option}
              onClick={() => handleAnswerClick(optionIndex)} // Trigger the answer selection
              className={
                hasAnswer
                  ? optionIndex === questions.correctOption
                    ? 'correct' // Apply green color for the correct answer
                    : optionIndex === answer
                    ? 'wrong' // Apply red color for the wrong answer
                    : ''
                  : '' // No styling before an answer is selected
              }
              style={{ cursor: hasAnswer ? 'not-allowed' : 'pointer' }} // Disable cursor after selecting an answer
            >
              {option}
            </li>
          ))}
        </ul>
      </div>

      <div className="quiz_footer">
      <p>Question {index}/{totalQuestions}</p>
      <FooterContent dispatch={dispatch} index={index} totalQuestions={totalQuestions} />
      </div>
    </div>
  );
}

export default QuizStart;
