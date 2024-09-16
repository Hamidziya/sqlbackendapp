const express = require('express');
const router = express.Router();
const db = require('../config/db');


// Get all users
router.get('/', (req, res) => {
  db.query('SELECT * FROM actor', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get a single user by ID
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  db.query('SELECT * FROM users WHERE id = ?', [userId], (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
});

// Create a new user
router.post('/', (req, res) => {
  const newUser = req.body;
  db.query('INSERT INTO doctratedata SET ?', newUser, (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, ...newUser });
  });
});

// Update a user
router.put('/:id', (req, res) => {
  const userId = req.params.id;
  const updateUser = req.body;
  db.query('UPDATE users SET ? WHERE id = ?', [updateUser, userId], (err) => {
    if (err) throw err;
    res.json({ id: userId, ...updateUser });
  });
});

// Delete a user
router.delete('/:id', (req, res) => {
  const userId = req.params.id;
  db.query('DELETE FROM users WHERE id = ?', [userId], (err) => {
    if (err) throw err;
    res.sendStatus(204);
  });
});

module.exports = router;
