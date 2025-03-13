let allNotes = {
    'notesTitles': ['Einkaufen', 'Gartenarbeit'],
    'notes': ['Bananen, Spaghetti und Haferflocken', 'rasen mähen'],
    'archiveTitles': ['Wäschewaschen'],
    'archive': ['Buntwäsche'],
    'trashTitles': [],
    'trash': []
}

function moveNote(indexNote, startKey, destinationKey){
    let note = allNotes[startKey].splice(indexNote, 1);
    allNotes[destinationKey].push(note[0]);
    let notesTitles = allNotes[startKey + "Titles"].splice(indexNote, 1);
    allNotes[destinationKey + "Titles"].push(notesTitles[0]);
    renderAllNotes();
}

function renderAllNotes(){
    renderNotes('note-content', 'notes');
    renderNotes('archive-content', 'archive');
    renderNotes('trash-content', 'trash');
}

function init(){
    getNotesFromLocalStorage();
    getArchiveFromLocalStorage();
    getTrashFromLocalStorage();
    renderAllNotes()
}

function renderNotes(id, arr){
    saveNotesToLocalStorage();
    saveArchiveToLocalStorage();
    saveTrashToLocalStorage();
    let contentRef = document.getElementById(id);
    contentRef.innerHTML = "";
    let keyArr = allNotes[arr];

    for (let indexNote = 0; indexNote < keyArr.length; indexNote++) {
        if (id == 'note-content') {
            contentRef.innerHTML += getNotesTemplate(indexNote);
        } else if(id == 'archive-content') {
            contentRef.innerHTML += getArchiveTemplate(indexNote);
        } else if (id == 'trash-content') {
            contentRef.innerHTML += getTrashTemplate(indexNote);
        }
    }
}

function addNote() {
    let noteInputRef = document.getElementById('note-input');
    let noteTitleInputRef = document.getElementById('note-title-input');
    let noteInput = noteInputRef.value;
    let noteTitleInput = noteTitleInputRef.value;

    if (!noteInput.length > 0 || !noteTitleInput.length > 0) {
        alert('Notiz und Titel eingeben!')        
    } else {
        allNotes.notes.push(noteInput);
        allNotes.notesTitles.push(noteTitleInput);
        renderNotes('note-content', 'notes');
        noteInputRef.value = "";
        noteTitleInputRef.value = "";
    }
}

function deleteForever(indexTrash){
    allNotes.trash.splice(indexTrash, 1);
    allNotes.trashTitles.splice(indexTrash, 1);
    renderNotes('trash-content', 'trash');
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
    localStorage.setItem("notesStorage", JSON.stringify(allNotes.notes));
    localStorage.setItem("notesTitlesStorage", JSON.stringify(allNotes.notesTitles));
}

function saveArchiveToLocalStorage(){
    localStorage.setItem("archiveStorage", JSON.stringify(allNotes.archive));
    localStorage.setItem("archiveTitlesStorage", JSON.stringify(allNotes.archiveTitles));
}

function saveTrashToLocalStorage(){
    localStorage.setItem("trashStorage", JSON.stringify(allNotes.trash));
    localStorage.setItem("trashTitlesStorage", JSON.stringify(allNotes.trashTitles));
}

function getNotesFromLocalStorage(){
    let notesLocal = JSON.parse(localStorage.getItem("notesStorage"));
    let notesTitlesLocal = JSON.parse(localStorage.getItem("notesTitlesStorage"))

    if (!notesLocal == ""){
        allNotes.notes = notesLocal;
    }
    if (!notesTitlesLocal == ""){
        allNotes.notesTitles = notesTitlesLocal;
    }
}

function getArchiveFromLocalStorage(){
    let archiveLocal = JSON.parse(localStorage.getItem("archiveStorage"));
    let archiveTitlesLocal = JSON.parse(localStorage.getItem("archiveTitlesStorage"));

    if (!archiveLocal == ""){
        allNotes.archive = archiveLocal;
    }
    if (!archiveTitlesLocal == ""){
        allNotes.archiveTitles = archiveTitlesLocal;
    }
}

function getTrashFromLocalStorage(){
    let trashLocal = JSON.parse(localStorage.getItem("trashStorage"));
    let trashTitlesLocal = JSON.parse(localStorage.getItem("trashTitlesStorage"));

    if (!trashLocal == ""){
        allNotes.trash = trashLocal;
    }
    if (!trashTitlesLocal == ""){
        allNotes.trashTitles = trashTitlesLocal;
    }
}