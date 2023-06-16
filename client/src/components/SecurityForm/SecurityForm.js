import { useState } from 'react';
import axios from 'axios';

const SecurityForm = () => {
  const [question, setQuestion] = useState('');
  const [customQuestion, setCustomQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const securityQuestions = [
    'What is your mother\'s maiden name?',
    'What was the name of your first pet?',
    'In what city were you born?',
    // Add more pre-created security questions here
  ];

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleCustomQuestionChange = (e) => {
    setCustomQuestion(e.target.value);
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      question: question === 'custom' ? customQuestion : question,
      answer: answer,
    };

    // Replace API_ENDPOINT with the actual API endpoint
    axios.post('API_ENDPOINT', data)
      .then((response) => {
        // Handle the response as needed
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Security Questions</h2>
      <p>PLease choose security questions and answers before continuing. These questions will be used to confirm your identity</p>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="question">Security Question:</label>
          <select id="question" value={question} onChange={handleQuestionChange}>
            <option value="">Select a question</option>
            {securityQuestions.map((q, index) => (
              <option key={index} value={q}>{q}</option>
            ))}
            <option value="custom">Create a custom question</option>
          </select>
        </div>
        {question === 'custom' && (
          <div>
            <label htmlFor="customQuestion">Custom Question:</label>
            <input
              type="text"
              id="customQuestion"
              value={customQuestion}
              onChange={handleCustomQuestionChange}
              placeholder="Enter your custom question"
              required
            />
          </div>
        )}
        <div>
          <label htmlFor="answer">Answer:</label>
          <input
            type="text"
            id="answer"
            value={answer}
            onChange={handleAnswerChange}
            placeholder="Enter your answer"
            required
          />
        </div>
        <div>
          <label htmlFor="question">Security Question:</label>
          <select id="question" value={question} onChange={handleQuestionChange}>
            <option value="">Select a question</option>
            {securityQuestions.map((q, index) => (
              <option key={index} value={q}>{q}</option>
            ))}
            <option value="custom">Create a custom question</option>
          </select>
        </div>
        {question === 'custom' && (
          <div>
            <label htmlFor="customQuestion">Custom Question:</label>
            <input
              type="text"
              id="customQuestion"
              value={customQuestion}
              onChange={handleCustomQuestionChange}
              placeholder="Enter your custom question"
              required
            />
          </div>
        )}
        <div>
          <label htmlFor="answer">Answer:</label>
          <input
            type="text"
            id="answer"
            value={answer}
            onChange={handleAnswerChange}
            placeholder="Enter your answer"
            required
          />
        </div>
        <div>
          <label htmlFor="question">Security Question:</label>
          <select id="question" value={question} onChange={handleQuestionChange}>
            <option value="">Select a question</option>
            {securityQuestions.map((q, index) => (
              <option key={index} value={q}>{q}</option>
            ))}
            <option value="custom">Create a custom question</option>
          </select>
        </div>
        {question === 'custom' && (
          <div>
            <label htmlFor="customQuestion">Custom Question:</label>
            <input
              type="text"
              id="customQuestion"
              value={customQuestion}
              onChange={handleCustomQuestionChange}
              placeholder="Enter your custom question"
              required
            />
          </div>
        )}
        <div>
          <label htmlFor="answer">Answer:</label>
          <input
            type="text"
            id="answer"
            value={answer}
            onChange={handleAnswerChange}
            placeholder="Enter your answer"
            required
          />
        </div>
        <div>
          <label htmlFor="question">Security Question:</label>
          <select id="question" value={question} onChange={handleQuestionChange}>
            <option value="">Select a question</option>
            {securityQuestions.map((q, index) => (
              <option key={index} value={q}>{q}</option>
            ))}
            <option value="custom">Create a custom question</option>
          </select>
        </div>
        {question === 'custom' && (
          <div>
            <label htmlFor="customQuestion">Custom Question:</label>
            <input
              type="text"
              id="customQuestion"
              value={customQuestion}
              onChange={handleCustomQuestionChange}
              placeholder="Enter your custom question"
              required
            />
          </div>
        )}
        <div>
          <label htmlFor="answer">Answer:</label>
          <input
            type="text"
            id="answer"
            value={answer}
            onChange={handleAnswerChange}
            placeholder="Enter your answer"
            required
          />
        </div>
        <div>
          <label htmlFor="question">Security Question:</label>
          <select id="question" value={question} onChange={handleQuestionChange}>
            <option value="">Select a question</option>
            {securityQuestions.map((q, index) => (
              <option key={index} value={q}>{q}</option>
            ))}
            <option value="custom">Create a custom question</option>
          </select>
        </div>
        {question === 'custom' && (
          <div>
            <label htmlFor="customQuestion">Custom Question:</label>
            <input
              type="text"
              id="customQuestion"
              value={customQuestion}
              onChange={handleCustomQuestionChange}
              placeholder="Enter your custom question"
              required
            />
          </div>
        )}
        <div>
          <label htmlFor="answer">Answer:</label>
          <input
            type="text"
            id="answer"
            value={answer}
            onChange={handleAnswerChange}
            placeholder="Enter your answer"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SecurityForm;
