const express = require("express");
const router = express.Router();

const {createNewNote, deleteNote, readNote, updateNote} = require('../controllers/notesController');


router.post('/', createNewNote);
router.delete('/', deleteNote);
router.get('/', readNote);
router.put('/', updateNote);

module.exports = router;