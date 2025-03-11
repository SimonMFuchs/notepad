let notesTitles = ['Einkaufen', 'Gartenarbeit'];
let notes = ['banana', 'rasen mähen'];

let archiveTitles = ['Wäschewaschen'];
let archive = ['Buntwäsche'];

let trashTitles = [];
let trash = [];

function init(){
    getNotesFromLocalStorage();
    getArchiveFromLocalStorage()
    renderNotes();
    renderArchive();
}

function renderNotes(){

    saveNotesToLocalStorage();
    saveNotesTitlesToLocalStorage();

    let contentRef = document.getElementById('content');

    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNotesTemplate(indexNote);
    }
}

function renderArchive(){

    let archiveContentRef = document.getElementById('archive-content');
            
    archiveContentRef.innerHTML = "";

    for (let indexArchive = 0; indexArchive < archive.length; indexArchive++) {
        archiveContentRef.innerHTML += getArchiveTemplate(indexArchive);
    }
}

function renderTrash(){
    let trashContentRef = document.getElementById('trash-content');

}

function addNote() {
    let noteInputRef = document.getElementById('note-input');
    let noteTitleInputRef = document.getElementById('note-title-input');
    let noteInput = noteInputRef.value;
    let noteTitleInput = noteTitleInputRef.value;

    if (!noteInput.length > 0 || !noteTitleInput.length > 0) {
        alert('Notiz und Titel eingeben!')        
    } else {
        notes.push(noteInput);
        notesTitles.push(noteTitleInput);
        renderNotes();
        noteInputRef.value = "";
        noteTitleInputRef.value = "";
    }
}

function noteToArchive(indexNote) {
    let noteArchived = notes[indexNote]; 
    notes.splice(indexNote, 1);
    archive.push(noteArchived);
    console.log(notesTitles);
    let noteArchivedTitles = notesTitles.splice(indexNote, 1);
    console.log(notesTitles);
    console.log(archiveTitles);
    archiveTitles.push(noteArchivedTitles);
    console.log(archiveTitles);
    saveArchiveToLocalStorage()
    renderArchive();    
    renderNotes();
}

function moveToTrash(indexArchive) {
    let noteDiscarded = notes[indexNote];
    archive.splice(indexArchive, 1);
    trash.push(noteDiscarded);
    renderArchive();
    renderTrash();
}

function toggleOverlay(){
    document.getElementById('overlay-background').classList.toggle('d-none');
}

function toggleOverlayTrash(){
    document.getElementById('overlay-trash-background').classList.toggle('d-none');
}

function prevent(event) {
    event.stopPropagation();
}

function saveNotesToLocalStorage(){
    localStorage.setItem("notesStorage", JSON.stringify(notes));
}

function saveNotesTitlesToLocalStorage(){
    localStorage.setItem("notesTitlesStorage", JSON.stringify(notesTitles));
}

function saveArchiveToLocalStorage(){
    localStorage.setItem("archiveStorage", JSON.stringify(archive));
    localStorage.setItem("archiveTitlesStorage", JSON.stringify(archiveTitles));
}

function getNotesFromLocalStorage(){
    let notesLocal = JSON.parse(localStorage.getItem("notesStorage"));
    let notesTitlesLocal = JSON.parse(localStorage.getItem("notesTitlesStorage"))

    if (!notesLocal == ""){
        notes = notesLocal;
    }
    if (!notesTitlesLocal == ""){
        notesTitles = notesTitlesLocal;
    }
}

function getArchiveFromLocalStorage(){
    let archiveLocal = JSON.parse(localStorage.getItem("archiveStorage"));
    let archiveTitlesLocal = JSON.parse(localStorage.getItem("archiveTitlesStorage"));

    if (!archiveLocal == ""){
        archive = archiveLocal;
    }
    if (!archiveTitlesLocal == ""){
        archiveTitles = archiveTitlesLocal;
    }
}
