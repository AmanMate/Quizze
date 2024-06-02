import React, { useState, useCallback } from "react";
// import axios from "axios"
// import { useNavigate, Link} from "react-router-dom";
import "./CreateQuiz.css";
import { v4 as uuidv4 } from "uuid";
// import { string } from "i/lib/util";

export default function Mymodal({ closeModal }) {
  const [activeStep, setActiveStep] = useState(0);
  const [quizName, setQuizName] = useState("");
  const [quizType, setQuizType] = useState(null);
  // const [question, setQuestion] = useState("");
  // const [userEmail, setemail] = useState("");
  const [option, setOption] = useState("");
  const [url, setUrl] = useState("");
  const [both, setBoth] = useState("");
  // const [quizId, setQuizId] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentOptions, setCurrentOptions] = useState([""]);

  const [numOfQuestion, setnumOfQuestion] = useState(1);
  const [numOfOption, setnumOfOpotion] = useState(1);
  const [typeOfOption, settypeOfOption] = useState(1);

  const handleQuizNameChange = (e) => {
    setQuizName(e.target.value);
  };

  const handleClick = (quizTypeARG) => {
    setQuizType(quizTypeARG);
  };

  const handleQuestionChange = (index, e) => {
    setCurrentQuestion(e.target.value);
    const newQuestions = [...questions];
    newQuestions[index] = e.target.value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (index, e) => {
    const newOptions = [...currentOptions];
    newOptions[index] = e.target.value;
    setCurrentOptions(newOptions);
  };

  const [isVisible, setIsVisible] = useState(true);
  const handleAddQuestions = () => {
    if (numOfQuestion < 5) {
      setQuestions((prevQuestions) => [...prevQuestions, ""]);
      setnumOfQuestion(numOfQuestion + 1);
      if (numOfQuestion === 4) {
        setIsVisible(!isVisible);
      }
    }
  };

  const handleDeleteQuestion = (index) => {
    setQuestions(questions.filter((question, i) => i !== index));
  };

  const handleAddOption = () => {
    setCurrentOptions((prevOptions) => [...prevOptions, ""]);
    console.log(currentOptions.length);
    if (currentOptions.length >= 3) {
      setnumOfOpotion(0);
    }
  };

  const handleContinueClick = () => {
    if (activeStep === 0) {
      setActiveStep((prevStep) => prevStep + 1);
    } else if (activeStep === 1) {
      setQuestions((prevQuestions) => [
        ...prevQuestions,
        { question: currentQuestion, options: currentOptions },
      ]);
      setActiveStep((prevStep) => prevStep + 1);
      if (activeStep === 1.1) {
        setActiveStep((prevStep) => prevStep + 1);
      } else if (activeStep === 1.2) {
        setActiveStep((prevStep) => prevStep + 1);
      }
    }
    if (continueToNextStep) {
      // Continue to the next step
      console.log("Continuing to the next step...");
    }
  };

  const [shareableLink, setShareableLink] = useState("");
  const [continueToNextStep, setContinueToNextStep] = useState(false);

  const handleCreateQuiz = () => {
    const quizId = uuidv4();
    const link = `https://example.com/quiz/${quizId}`;
    setShareableLink(link);
    setContinueToNextStep(true);
  };

  return (
    <div>
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="quiz-name-type">
            {activeStep === 0 && (
              <div class="action-buttons">
                <input
                  class="quiz-name"
                  placeholder="Quiz name"
                  value={quizName}
                  onChange={handleQuizNameChange}
                ></input>

                <div class="display-flex buttons">
                  <p class="quiz-type">Quiz Type</p>
                  <button
                    onClick={() => handleClick("qna")}
                    class="qna-button"
                    style={{
                      backgroundColor: quizType === "qna" ? "#60B84B" : "white",
                      color: quizType === "qna" ? "white" : "#757575",
                    }}
                  >
                    Q & A
                  </button>
                  <button
                    onClick={() => handleClick("poll")}
                    class="poll-type-button"
                    style={{
                      backgroundColor:
                        quizType === "poll" ? "#60B84B" : "white",
                      color: quizType === "poll" ? "white" : "#757575",
                    }}
                  >
                    Poll Type
                  </button>
                </div>
                <button class="cancel" onClick={closeModal}>
                  Cancel
                </button>
                <button
                  class="continue"
                  onClick={handleContinueClick}
                  disabled={!quizType}
                >
                  Continue
                </button>
              </div>
            )}
            <div class="box">
              {activeStep === 1 && (
                <div class="action-buttons">
                  <div class="question-options">
                    <div class="box1">
                      <div class="add-button-div">
                        <div class="first-render">
                          <button class="question-number">1</button>
                          <button
                            class="add-button"
                            onClick={handleAddQuestions}
                          >
                            +
                          </button>
                        </div>
                        <div class="render-parent">
                          {questions.map((Question, index) => (
                            <div class="render" key={index}>
                              <p class="inline option"></p>
                              <div>
                                <button
                                  class="question-number"
                                  value={Question}
                                >
                                  {index + 2}
                                </button>
                                {index === questions.length - 1 &&
                                  isVisible && (
                                    <button
                                      onChange={(e) =>
                                        handleQuestionChange(index, e)
                                      }
                                      class="add-button"
                                      onClick={handleAddQuestions}
                                    >
                                      +
                                    </button>
                                  )}
                                <button
                                  class="delete-button"
                                  onClick={() => handleDeleteQuestion(index)}
                                >
                                  x
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div class="inline-question ">
                        <input
                          type="text"
                          onChange={(e) => handleQuestionChange}
                          placeholder="Q & A Question"
                        ></input>
                      </div>
                      <div class="optionType">
                        <p class="optionfont">Option Type</p>
                        <div>
                          <input
                            type="radio"
                            class="optionradio"
                            name="optionradio"
                            value={option}
                            onChange={settypeOfOption(1)}
                          ></input>
                          <label>Text</label>
                          <input
                            type="radio"
                            class="optionradio"
                            name="optionradio"
                            value={url}
                            onChange={settypeOfOption(2)}
                          ></input>
                          <label>Image</label>
                          <input
                            type="radio"
                            class="optionradio"
                            name="optionradio"
                            value={both}
                            onChange={settypeOfOption(3)}
                          ></input>
                          <label>Text & Image</label>
                        </div>
                      </div>
                    </div>
                    <div class="options">
                      <div class="qnaOptions">
                        {currentOptions.map((option, index) => (
                          <div key={index}>
                            <p class="inline option"></p>
                            <input type="radio" class="radio"></input>
                            <input
                              type="text"
                              class="text"
                              value={option}
                              onChange={(e) => handleOptionChange(index, e)}
                              placeholder="Text"
                            ></input>
                          </div>
                        ))}

                        {numOfOption === 1 && (
                          <button onClick={handleAddOption}>Add Option</button>
                        )}
                      </div>
                    </div>
                  </div>
                  <button class="cancel" onClick={closeModal}>
                    Cancel
                  </button>
                  <button
                    class="continue"
                    onClick={() => {
                      handleCreateQuiz();
                      handleContinueClick();
                    }}
                  >
                    Create Quiz
                  </button>
                </div>
              )}
              {activeStep === 2 && (
                <div class="action-buttons">
                  <div class="questions">
                    <p class="published">Congrats your Quiz is Published! </p>
                    <p>Shareable link: {shareableLink}</p>
                  </div>

                  <button class="Share" onClick={() => {}}>
                    Share
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
