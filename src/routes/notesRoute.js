const express = require("express");
const router = express.Router();

const {createNewNote} = require('../controllers/notesController');


router.post('/', createNewNote);

module.exports = router;