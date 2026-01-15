import React, { useState } from "react"; 
import "./App.css"; 

const questions = [
  {
    question: "Cili lojtar ka fituar më shumë topa të artë?",
    options: ["Cristiano Ronaldo", "Lionel Messi", "Neymar", "Kylian Mbappe"],
    answer: "Lionel Messi",
  },
  {
    question: "Cili është klubi me më shumë tituj të fituar në Angli?",
    options: ["Liverpool", "Manchester United", "Arsenal", "Chelsea"],
    answer: "Manchester United",
  },
  {
    question: "Cili është lojtari që ka shënuar më shumë gola në një sezon të Ligës së Kampionëve?",
    options: ["Cristiano Ronaldo", "Lionel Messi", "Robert Lewandowski", "Raul"],
    answer: "Cristiano Ronaldo",
  },
  {
    question: "Cili lojtar ka shënuar më shumë gola për Kombëtaren e Brazilit?",
    options: ["Pele", "Ronaldo", "Neymar", "Romario"],
    answer: "Neymar",
  },
  {
    question: "Cili ekip ka fituar më shumë tituj në La Liga?",
    options: ["Barcelona", "Real Madrid", "Atletico Madrid", "Sevilla"],
    answer: "Real Madrid",
  },
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0); 
  const [score, setScore] = useState(0); 

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1); 
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestion(0);
  };

  if (currentQuestion >= questions.length) {
    return (
      <div className="quiz-container">
        <h1>Futboll Quiz</h1>
        <h3>Quiz-i ka përfunduar!</h3>
        <p>Shkalla e saktësisë: {score} nga {questions.length}</p>
        {score >= 4 ? <p>Shumë mirë!</p> : <p>Përmirsohu!</p>}
        <button className="restart-button" onClick={handleRestart}>
          Rifillo Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h1>Futboll Quiz</h1>
      <div className="question-section">
        <h2>{questions[currentQuestion].question}</h2>
        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
