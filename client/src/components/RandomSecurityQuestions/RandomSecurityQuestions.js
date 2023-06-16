import { useState, useEffect } from 'react';
import axios from 'axios';

const RandomSecurityQuestions = ({ onSuccess, onFail, onRedirect }) => {
  const [questions, setQuestions] = useState([]);
  const [attempt, setAttempt] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  useEffect(() => {
    // Fetch the security questions from the API
    axios.get('API_ENDPOINT/questions')
      .then((response) => {
        // Store the questions in state
        setQuestions(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  }, []);

  useEffect(() => {
    // Select three random questions from the available questions
    const randomQuestions = selectRandomQuestions(questions);
    setSelectedQuestions(randomQuestions);
  }, [questions]);

  const selectRandomQuestions = (allQuestions) => {
    const filteredQuestions = allQuestions.filter((question) => !answers[question.id]);
    const shuffledQuestions = shuffleArray(filteredQuestions);
    return shuffledQuestions.slice(0, 3);
  };

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Send the answers to the API for validation
    axios.post('API_ENDPOINT/verify', answers)
      .then((response) => {
        if (response.data.success) {
          // User provided correct answers
          onSuccess();
        } else {
          // User provided incorrect answers
          setAttempt((prevAttempt) => prevAttempt + 1);
          if (attempt >= 1) {
            // User has already attempted twice, redirect to previous page
            onRedirect();
          } else {
            // Select new random questions excluding the missed question
            const filteredQuestions = questions.filter((question) => !answers[question.id]);
            const randomQuestions = selectRandomQuestions(filteredQuestions);
            setSelectedQuestions(randomQuestions);
          }
        }
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Security Verification</h2>
      <form onSubmit={handleFormSubmit}>
        {selectedQuestions.map((question) => (
          <div key={question.id}>
            <label htmlFor={question.id}>{question.text}</label>
            <input
              type="text"
              id={question.id}
              value={answers[question.id] || ''}
              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
              required
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RandomSecurityQuestions;
