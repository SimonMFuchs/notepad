let notesTitles = ['Ba', 'Aufgabe'];
let notes = ['banana', 'rasen mähen'];

let archiveTitles = [];
let archive = [];


function renderNotes() {

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
        renderNotes();
        noteInputRef.value = "";
    }
}

function checkInputLength(noteInput){

}

function noteToTrash(indexNote) {
    let noteArchived = notes.splice(indexNote, 1);
    archive.push(noteArchived);
    let noteArchivedTitles = notesTitles.splice(indexNote, 1);
    archiveTitles.push(noteArchivedTitles);
    renderNotes();
    renderArchive();
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