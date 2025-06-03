const express = require("express");
const router = express.Router();

const {createNewNote, deleteNote} = require('../controllers/notesController');


router.post('/', createNewNote);
router.delete('/', deleteNote);

module.exports = router;