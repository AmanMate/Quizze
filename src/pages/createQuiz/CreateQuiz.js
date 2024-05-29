import React, { useState } from "react";
import axios from "axios"
import { useNavigate, Link} from "react-router-dom";
import "./CreateQuiz.css";

export default function Mymodal({ closeModal }) {
  const [activeStep, setActiveStep] = useState(0);
  const [quizName, setQuizName] = useState("");
  const [quizType, setQuizType] = useState("");
  const [question, setQuestion] = useState("");
  const [option, setOption] = useState("");

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentOptions, setCurrentOptions] = useState(["", ""]);

  const handleQuizNameChange = (e) => {
    setQuizName(e.target.value);
  };

  const handleClick = () => {
    setQuizType(!quizType);
  };

  const handleQuestionChange = (index, e) => {
    setCurrentQuestion(e.target.value);
    const newQuestions = [...questions];
    newQuestions[index] = e.target.value;
    setQuestions(newQuestions);  };

  const handleOptionChange = (index, e) => {
    const newOptions = [...currentOptions];
    newOptions[index] = e.target.value;
    setCurrentOptions(newOptions);
  };

  const handleAddQuestions = () => {
    setQuestions((prevQuestions) => [...prevQuestions, ""]);
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

  // async function QnAClick(e){
  //   e.preventDefault();

  //   try{

  //     await axios("http://localhost:4000/createquiz/",{
  //       action: " ",
  //       method: "POST",
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       data: JSON.stringify({
  //         questions:[
  //           {
  //             // user_email: email,
  //             // quiz_id: id,
  //             // quiz_name: name,
  //             // quiz_type: type,
  //             // question: question,

  //             options:[
  //               {
  //                 title: option,url
  //               }
  //             ]
  //           }
  //         ]
  //       })
  //     })
  //   }
  //   catch(e){
  //     console.log(e);
  //   }
  // }

  return (
    <div>
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="quiz-name-type">          
            {activeStep === 0 && (
            <div class="action-buttons">
               <input class="quiz-name" placeholder="Quiz name" value={quizName} onChange={handleQuizNameChange}></input>

               <div class="display-flex buttons">
                  <p class="quiz-type">Quiz Type</p>
                    <button
                      onClick={() => handleClick("Q&A")}
                      class="qna-button"
                      style={{
                        backgroundColor: quizType ? "#60B84B" : "white",
                        color: quizType ? "white" : "#757575",
                      }}
                    >
                      Q & A
                    </button>
                    <button
                      onClick={() => handleClick("Poll")}
                      class="poll-type-button"
                      style={{
                        backgroundColor: quizType ? "white" : "#60B84B",
                        color: quizType ? "#757575" : "white",
                      }}
                    >
                      Poll Type
                    </button>
                  </div>
              <button class="cancel" onClick={closeModal}>
                Cancel
              </button>
              <button class="continue" onClick={handleContinueClick}>Continue</button>
            </div>
            )}
              <div class="box">
                {activeStep === 1 && (
                  <div class="action-buttons">
                    
                    <div class="question-options">
                      <div class="box1">
                      {questions.map((Question, index) => (
                          <div key={index}>
                            <p class="inline option"></p>
                            <button value={Question} onChange={(e) => handleQuestionChange(index, e)} onClick={handleAddQuestions} ></button>
                          </div>
                      ))}
                      <button onClick={handleAddQuestions}></button>
                      
                         
                        <div class="inline-question ">
                           <input type="text"  onChange={(e) => handleQuestionChange} placeholder="Q & A Question"></input>
                        </div>
                    <div class="optionType">
                         <p class="optionfont">Option Type</p>
                     <input type="radio"  class="optionradio" value="text" ></input>
                          <label>Text</label>
                     <input type="radio"  class="optionradio" value="text" ></input>
                          <label>Image</label>
                     <input type="radio"  class="optionradio" value="text" ></input>
                          <label>Text & Image</label>
                     </div>
                  </div>

            
                      {currentOptions.map((option, index) => (
                          <div key={index}>
                            <p class="inline option"></p>
                               <input type="radio" class="radio"></input>
                               <input type="text"  class="text" value={option} onChange={(e) => handleOptionChange(index, e)} placeholder="Text"></input>
                          </div>
                      ))}
                              <button onClick={handleAddOption}>Add Option</button>
                                </div>
                                  <button class="cancel" onClick={closeModal}>
                                    Cancel
                                </button>
                              <button class="continue" onClick={handleContinueClick}>CreateQuiz</button>
                            </div>

                          )}
                          {activeStep === 2 && (
                              <div class="action-buttons">
                                <div class="questions">
                                  <p class="published">Congrats your Quiz is Published! </p>
                                  <input type="url"></input>
                                </div>
                                <button class="Share" onClick={() => {}}>Share</button>
                              </div>
                                  )}
              </div>


          </div>
        </div>
      </div>
    </div>
  );
}