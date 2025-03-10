let notesTitles = ['', ''];
let notes = ['banana', 'rasen mähen'];

let archiveTitles = [''];
let archive = ['test'];

function init(){
    getNotesFromLocalStorage()
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

function addNote() {
    let noteInputRef = document.getElementById('note-input');
    let noteInput = noteInputRef.value;

    if (!noteInput.length > 0) {
        alert('Notiz eingeben!')        
    } else {
        notes.push(noteInput);
        notesTitles.push("");
        renderNotes();
        noteInputRef.value = "";
    }
}

function noteToArchive(indexNote) {
    let noteArchived = notes.splice(indexNote, 1);
    archive.push(noteArchived);
    let noteArchivedTitles = notesTitles.splice(indexNote, 1);
    archiveTitles.push(noteArchivedTitles);
    renderArchive();    
    renderNotes();
}

function deleteFromTrash(indexArchive) {
    archive.splice(indexArchive, 1);
    renderArchive();
}

function toggleOverlay(){
    document.getElementById('overlay-background').classList.toggle('d-none');
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

// function saveArchiveToLocalStorage(){
//     console.log(archive);   
//     localStorage.setItem("archiveStorage", JSON.stringify(archive));
// }

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

// function getArchiveFromLocalStorage(){
//     let archiveLocal = JSON.parse(localStorage.getItem("archiveStorage"));

//     if (!archiveLocal == ""){
//         archive = archiveLocal;
//     }
// }




// für Auswahl zum löschen:
// function selectNote(indexNote){
//     let clickedNote = document.getElementById(indexNote);
//     let button = document.getElementById("btn"+indexNote);
//     deselectNote(button);
//     clickedNote.classList.add("note-selected");
//     button.classList.remove('d-none');
// }

// function deselectNote(button){
//     for (let i = 0; i < notes.length; i++) {
//         const note = document.getElementById(i);
//         note.classList.remove('note-selected');
//         button.classList.add('d-none')        
//     }
// }


// id="btn${indexNote}" class="d-none" 
// id="${indexNote}" 
// onclick="selectNote(${indexNote})"