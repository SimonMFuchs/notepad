let notes = ['banana', 'rasen mähen'];
let archive = [];

function renderNotes() {

    let contentRef = document.getElementById('content');

    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNotesTemplate(indexNote);
    }
}

function getNotesTemplate(indexNote) {
    return /*html*/`
        <p>+ ${notes[indexNote]} 
            <button onclick="deleteNote(${indexNote})">X</button>
        </p>

    `      
}

function addNote() {
    let noteInputRef = document.getElementById('note-input');
    let noteInput = noteInputRef.value;

    notes.push(noteInput);

    renderNotes();

    noteInputRef.value = "";
}

function deleteNote(indexNote) {
    pushArchive(indexNote)
    notes.splice(indexNote, 1);
    renderNotes();
}

// notiven archivieren
// beim löschen in ein neues array pushen
// archiv anzeigen lassen

function pushArchive(indexNote){
    let noteArchived = notes[indexNote];
    archive.push(noteArchived);
    renderArchive();
}

function renderArchive(){

    let archiveContentRef = document.getElementById('archive-content');
            
    archiveContentRef.innerHTML = "";

    for (let indexArchive = 0; indexArchive < archive.length; indexArchive++) {
        archiveContentRef.innerHTML += getArchiveTemplate(indexArchive);
    }
}

function getArchiveTemplate(indexArchive){
    return /*html*/`
        <p>+ ${archive[indexArchive]}</p>
    `
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