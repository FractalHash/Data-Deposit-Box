const router = require('express').Router();
const userController = require('../controllers/userData.js');

router.route("/user/:id")
  .get(userController.getUser)
  .post(userController.addQuestion);

router.route('/user/:id/random-questions')
  .get(userController.getRandomQuestions)
  .post(userController.submitAnswers);

module.exports = router;