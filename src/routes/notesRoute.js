const express = require("express");
const router = express.Router();

const {createNewNote, deleteNote, readNote} = require('../controllers/notesController');


router.post('/', createNewNote);
router.delete('/', deleteNote);
router.get('/', readNote);

module.exports = router;