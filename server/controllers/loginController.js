const knex = require('knex')(require('../knexfile'));
const bcrypt = require('bcrypt');

const login = (req, res) => {
  const { email, password } = req.body;

  knex('users')
    .where({ email })
    .first()
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      bcrypt.compare(password, user.hashedpass, (err, result) => {
        if (err) {
          return res.status(500).json({ message: 'Error comparing passwords' });
        }

        if (result) {
          return res.status(200).json({ message: 'Login successful', user });
        } else {
          return res.status(401).json({ message: 'Invalid password' });
        }
      });
    })
    .catch((err) => {
      res.status(500).json({ message: 'Error retrieving user', error: err });
    });
};

module.exports = { login };