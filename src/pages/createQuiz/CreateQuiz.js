import React, { useState } from "react";
import "./CreateQuiz.css";

export default function Mymodal({ closeModal }) {
  const [activeStep, setActiveStep] = useState(0);
  const [quizName, setQuizName] = useState("");
  const [quizType, setQuizType] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentOptions, setCurrentOptions] = useState(["", ""]);

  const handleQuizNameChange = (e) => {
    setQuizName(e.target.value);
  };

  const handleClick = () => {
    setQuizType(!quizType);
  };

  const handleQuestionChange = (e) => {
    setCurrentQuestion(e.target.value);
  };

  const handleOptionChange = (index, e) => {
    const newOptions = [...currentOptions];
    newOptions[index] = e.target.value;
    setCurrentOptions(newOptions);
  };

  const handleAddOption = () => {
    setCurrentOptions((prevOptions) => [...prevOptions, ""]);
  };

  const handleContinueClick = () => {
    if (activeStep === 0) {
      setActiveStep((prevStep) => prevStep + 1);
    } else if (activeStep === 1) {
      setQuestions((prevQuestions) => [...prevQuestions, { question: currentQuestion, options: currentOptions }]);
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  return (
    <div>
      <div class="modal-wrapper"></div>
      <div class="modal-container">
        <div class="quiz-name-type">
          <input class="quiz-name" placeholder="Quiz name" value={quizName} onChange={handleQuizNameChange}></input>

          <div class="display-flex buttons">
            <p class="quiz-type">Quiz Type</p>
            <button
              onClick={handleClick}
              class="qna-button"
              style={{
                backgroundColor: quizType ? "#60B84B" : "white",
                color: quizType ? "white" : "#757575",
              }}
            >
              Q & A
            </button>
            <button
              onClick={handleClick}
              class="poll-type-button"
              style={{
                backgroundColor: quizType ? "white" : "#60B84B",
                color: quizType ? "#757575" : "white",
              }}
            >
              Poll Type
            </button>
          </div>
          {activeStep === 0 && (
            <div class="action-buttons">
              <button class="cancel" onClick={closeModal}>
                Cancel
              </button>
              <button class="continue" onClick={handleContinueClick}>Continue</button>
            </div>
          )}
          {activeStep === 1 && (
            <div class="action-buttons">
              {/* <div className="qnaQues">
              <input type="text" value={currentQuestion} onChange={setCurrentQuestion()} placeholder="Q & A Question"></input>
              </div>
              <div id="optiontype">
              <input type="radio" value={currentOptions} onchange={setCurrentOptions()}>Option Type</input>
              </div> */}

              <button class="cancel" onClick={closeModal}>
                Cancel
              </button>
              <button class="continue" onClick={handleContinueClick}>CreateQuiz</button>
            </div>
          )}
          {activeStep === 2 && (
            <div class="action-buttons">
              <button class="cancel" onClick={closeModal}>
                Cancel
              </button>
              <button class="continue" onClick={() => {}}>Create Quiz</button>
            </div>
          )}
        </div>
        {activeStep === 1 && (
          <div class="question-options">
            <div>
              <p class="inline question">Question</p>
              <input type="text" value={currentQuestion} onChange={handleQuestionChange}></input>
            </div>
            {currentOptions.map((option, index) => (
              <div key={index}>
                <p class="inline option">Option {index + 1}</p>
                <input type="text" value={option} onChange={(e) => handleOptionChange(index, e)}></input>
              </div>
            ))}
            <button onClick={handleAddOption}>Add Option</button>
          </div>
        )}
        {activeStep === 2 && (
          <div class="questions">
            {questions.map((question, index) => (
              <div key={index}>
                <p class="inline question">Question {index + 1}</p>
                <p>{question.question}</p>
                <ul>
                  {question.options.map((option, index) => (
                    <li key={index}>{option}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}