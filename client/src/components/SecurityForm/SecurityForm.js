import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SecurityForm = () => {
  const [questions, setQuestions] = useState([]);

  const navigate = useNavigate()


  useEffect(() => {
    const getQuestions = async () => {
      const response = await axios.get("http://localhost:8080/user/1/random-questions")
      console.log(response.data)
      setQuestions(response.data.questions)
    }
    getQuestions()
  },[])


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const answers = questions.map(({ questionId }) => {
      const answer = e.target[`answer-${questionId}`].value
      return {questionId, answer}
    })
    console.log(answers)

    try {
      const response = await axios.post("http://localhost:8080/user/1/random-questions", { answers })
      navigate("/")
    } catch (e) {
      alert("Wrong answers!")
    }

  };

  return (
    <div>
      <h2>Security Questions</h2>
      <p>Please choose security questions and answers before continuing. These questions will be used to confirm your identity</p>
      <form onSubmit={handleFormSubmit}>
        {questions.map(({ questionId, question }) => (
          <div key={questionId}> 
            <p>{question}</p>
            <label htmlFor={ `answer-${questionId}` }>Answer:</label>
            <input
              type="text"
              id={ `answer-${questionId}` }
              placeholder="Enter your answer"
              required
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SecurityForm;
