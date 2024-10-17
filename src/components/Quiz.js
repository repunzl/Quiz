import React, { useState } from 'react';

const quizData = {
  JavaScript: [
    { question: "Quel est le type de variable en JavaScript ?", options: ["String", "Boolean", "Undefined", "Tous les trois"], answer: "Tous les trois" },
    { question: "Comment déclare-t-on une fonction en JavaScript ?", options: ["function myFunc()", "def myFunc()", "func myFunc()", "lambda myFunc()"], answer: "function myFunc()" },
  ],
  HTML: [
    { question: "Que signifie HTML ?", options: ["HyperText Markup Language", "HighText Machine Language", "Hyperloop Machine Language", "None of these"], answer: "HyperText Markup Language" },
    { question: "Quel élément HTML est utilisé pour définir un lien hypertexte ?", options: ["<link>", "<a>", "<href>", "<url>"], answer: "<a>" },
  ],
  CSS: [
    { question: "Que signifie CSS ?", options: ["Cascading Style Sheets", "Cascading System Sheets", "Computer Style Sheets", "None of these"], answer: "Cascading Style Sheets" },
    { question: "Quelle propriété CSS est utilisée pour changer la couleur du texte ?", options: ["color", "font-color", "text-color", "background-color"], answer: "color" },
  ],
  Bootstrap: [
    { question: "Quelle est la version actuelle de Bootstrap ?", options: ["Bootstrap 3", "Bootstrap 4", "Bootstrap 5", "Bootstrap 6"], answer: "Bootstrap 5" },
    { question: "Quelle classe Bootstrap est utilisée pour un bouton primaire ?", options: [".btn-main", ".btn-primary", ".btn-primary-main", ".btn-color-primary"], answer: ".btn-primary" },
  ]
};

const Quiz = ({ topic }) => {
  const [answers, setAnswers] = useState(Array(quizData[topic].length).fill(''));
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionChange = (index, option) => {
    const newAnswers = [...answers];
    newAnswers[index] = option;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => { 
    let newScore = 0;
    for (let i = 0; i < quizData[topic].length; i++) {
      if (answers[i] === quizData[topic][i].answer) {
        newScore++;
      }
    }
    setScore(newScore);
    setShowScore(true);
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '50px auto',
      padding: '20px',
      border: '2px solid royalblue',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      backgroundColor: '#f9f9f9'
    }}>
      <h2>Quiz sur {topic}</h2>
      {showScore ? (
        <div>Vous avez obtenu {score} sur {quizData[topic].length}</div>
      ) : (
        <div>
          {quizData[topic].map((question, index) => (
            <div key={index}>
              <div>Question {index + 1}/{quizData[topic].length}</div>
              <div>{question.question}</div>
              <div>
                {question.options.map((option, i) => (
                  <div key={i}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      checked={answers[index] === option}
                      onChange={() => handleOptionChange(index, option)}
                    />
                    {option}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button onClick={handleSubmit} style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: 'royalblue',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>Envoyer</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
