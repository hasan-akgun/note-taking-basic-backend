const express = require("express");
const router = express.Router();

const {createNewNote, deleteNote, readAllNotes, updateNote, readNoteId} = require('../controllers/notesController');


router.post('/', createNewNote);
router.delete('/', deleteNote);
router.get('/', readAllNotes);
router.get('/:id', readNoteId)
router.put('/', updateNote);

module.exports = router;