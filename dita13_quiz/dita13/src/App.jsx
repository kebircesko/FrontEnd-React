// Importojmë React dhe dy hooks: useState dhe useEffect
import React, { useState, useEffect } from "react";

// Importojmë stilin CSS për dizajnin e quiz-it
import "./App.css";

// Krijojmë një array me pyetjet e quiz-it
const questions = [
  {
    // Pyetja
    question: "Cili lojtar ka fituar më shumë topa të artë?",
    // Opsionet e përgjigjeve
    options: ["Cristiano Ronaldo", "Lionel Messi", "Neymar", "Kylian Mbappe"],
    // Përgjigjja e saktë
    answer: "Lionel Messi",
  },
  {
    question: "Cili është klubin me më shumë tituj të fituar në Angli?",
    options: ["Liverpool", "Manchester United", "Arsenal", "Chelsea"],
    answer: "Manchester United",
  },
  {
    question:
      "Cili është lojtari që ka shënuar më shumë gola në një sezon të Ligës së Kampionëve?",
    options: ["Cristiano Ronaldo", "Lionel Messi", "Robert Lewandowski", "Raul"],
    answer: "Cristiano Ronaldo",
  },
  {
    question: "Cili lojtar ka shënuar më shumë gola për Kombëtaren e Brazilit?",
    options: ["Pele", "Ronaldo", "Neymar", "Romario"],
    answer: "Neymar",
  },
];

// Krijojmë komponentin kryesor të aplikacionit
const App = () => {
  // currentQuestion ruan indeksin e pyetjes aktuale
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // score ruan sa përgjigje të sakta ka përdoruesi
  const [score, setScore] = useState(0);
  // time ruan kohën në sekonda
  const [time, setTime] = useState(0);
  // useEffect përdoret për të krijuar timer-in
  useEffect(() => {
    // Nëse pyetjet kanë përfunduar, timer ndalet
    if (currentQuestion >= questions.length) return;
    // Krijojmë një interval që rrit kohën çdo 1 sekondë
    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    // Kur komponenti rifreskohet ose ndryshon pyetja, ndalojmë timer-in e vjetër
    return () => clearInterval(timer);
  }, [currentQuestion]); // Ky efekt ekzekutohet sa herë ndryshon currentQuestion
  // Funksioni që ekzekutohet kur përdoruesi klikon një përgjigje
  const handleAnswer = (selectedAnswer) => {
    // Kontrollojmë nëse përgjigjja është e saktë
    if (selectedAnswer === questions[currentQuestion].answer) {
      // Nëse është e saktë rrisim pikët
      setScore(score + 1);
    }
    // Kalojmë te pyetja tjetër
    setCurrentQuestion(currentQuestion + 1);
  };
  // Funksioni për të rifilluar quiz-in nga fillimi
  const restartQuiz = () => {
    // Rikthejmë pyetjen e parë
    setCurrentQuestion(0);
    // Rikthejmë pikët në 0
    setScore(0);
    // Rikthejmë kohën në 0
    setTime(0);
  };
  // Llogarisim minutat nga sekondat
  const minutes = Math.floor(time / 60);
  // Llogarisim sekondat e mbetura
  const seconds = time % 60;
  // Llogarisim përqindjen e progress bar
  const progress = (currentQuestion / questions.length) * 100;
  // Nëse të gjitha pyetjet kanë përfunduar
  if (currentQuestion >= questions.length) {
    return (
      // Shfaqim rezultatin final
      <div className="quiz-container">
        <h1>Futboll Quiz</h1>
        <h3>Quiz-i ka përfunduar!</h3>
        {/* Shfaqim rezultatin */}
        <p>Rezultati: {score} nga {questions.length}</p>
        {/* Shfaqim kohën totale */}
        <p>Koha: {minutes}m {seconds}s</p>
        {/* Butoni për të rifilluar quiz-in */}
        <button onClick={restartQuiz}>Restart Quiz 🔄</button>
      </div>
    );
  }
  // Nëse quiz-i ende vazhdon
  return (
    <div className="quiz-container">
      {/* Titulli i quiz-it */}
      <h1>Futboll Quiz</h1>
      {/* Shfaqim kohën aktuale */}
      <h4>Koha: {minutes}m {seconds}s</h4>
      {/* Shfaqim numrin e pyetjes */}
      <p>
        Pyetja {currentQuestion + 1}/{questions.length}
      </p>
      {/* Progress Bar që tregon progresin e quiz-it */}
      <div className="progress-bar">
        {/* Gjerësia ndryshon sipas progresit */}
        <div
          className="progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {/* Shfaqim pyetjen aktuale */}
      <h2>{questions[currentQuestion].question}</h2>
      {/* Krijojmë buton për çdo opsion */}
      {questions[currentQuestion].options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};
// Eksportojmë komponentin që të përdoret në aplikacion
export default App;