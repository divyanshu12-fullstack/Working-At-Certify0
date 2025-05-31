const addNoteBtn = document.getElementById("addNote");
const notesContainer = document.getElementById("notesContainer");

// Load existing notes from localStorage when the page loads
window.onload = () => {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    notes.forEach(noteText => createNote(noteText));
};

// Save all notes to localStorage
function saveNotes() {
    const allNotes = Array.from(document.querySelectorAll("textarea"))
        .map(note => note.value);
    localStorage.setItem("notes", JSON.stringify(allNotes));
}

// Create and show a note
function createNote(text = "") {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.oninput = saveNotes;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "×";
    deleteBtn.className = "deleteBtn";
    deleteBtn.onclick = () => {
        noteDiv.remove();
        saveNotes();
    };

    noteDiv.appendChild(deleteBtn);
    noteDiv.appendChild(textarea);
    notesContainer.appendChild(noteDiv);
}

// Add new note on button click
addNoteBtn.onclick = () => {
    createNote();
    saveNotes();
};