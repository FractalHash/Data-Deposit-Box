const knex = require('knex')(require('../knexfile'));

const getUser = (req, res) => {
  knex("users")
    .where({ id: req.params.id })
    .then((data) => {
      if (data.length === 0) {
        res.status(404).json("No user found with that ID");
      } else {
        res.status(200).json(data[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json("Error retrieving user");
    });
};

const addQuestion = (req, res) => {
  const { id } = req.params;
  const { question, answer } = req.body;

  if (!question || !answer) {
    return res.status(400).json({ message: "Please provide both question and answer" });
  }

  knex("questions")
    .insert({ user_id: id, question, answer })
    .then(() => {
      res.status(201).json({ message: "Question added successfully" });
    })
    .catch((error) => {
      res.status(500).json({ message: "Unable to add question", error });
    });
};

const getRandomQuestions = (req, res) => {
  const userId = req.params.id;

  // Fetch three random questions for the user
  knex('questions')
    .select('id', 'question')
    .where({ user_id: userId })
    .orderByRaw('RAND()')
    .limit(3)
    .then((questionRows) => {
      const questions = questionRows.map((row) => ({
        questionId: row.id,
        question: row.question,
      }));

      res.status(200).json({ questions });
    })
    .catch((err) => {
      res.status(500).json({ message: 'Error retrieving random questions', error: err });
    });
};

const submitAnswers = (req, res) => {
  const userId = req.params.id;
  const { answers } = req.body;

  // Fetch the correct answers for the user's questions
  knex('questions')
    .select('id', 'answer')
    .where({ user_id: userId })
    .then((questionRows) => {
      const correctAnswers = questionRows.reduce((acc, row) => {
        acc[row.id] = row.answer;
        return acc;
      }, {});

      // Check if the submitted answers match the correct answers
      const isCorrect = answers.every((answer) => correctAnswers[answer.questionId] === answer.answer);

      if (isCorrect) {
        res.status(200).json({ message: 'Answers are correct' });
      } else {
        res.status(400).json({ message: 'Answers are incorrect' });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Error checking answers', error: err });
    });
};

module.exports = {
  getUser,
  addQuestion,
  getRandomQuestions,
  submitAnswers
};