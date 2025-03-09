let notes = ['banana', 'rasen mähen'];

function renderNotes() {

    let contentRef = document.getElementById('content');

    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNotesTemplate(indexNote);
    }
}

function getNotesTemplate(indexNote) {
    return /*html*/`
        <p id="${indexNote}" onclick="selectNote(${indexNote})">+ ${notes[indexNote]} 
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
    notes.splice(indexNote, 1);
    renderNotes();
}
// für Auswahl zum löschen:
// function selectNote(indexNote){
//     let clickedNote = document.getElementById(indexNote);
//     deselectNote();
//     clickedNote.classList.add("note-selected");
// }

// function deselectNote(){
//     for (let i = 0; i < notes.length; i++) {
//         const note = document.getElementById([i]);
//         note.classList.remove('note-selected');        
//     }
// }






// notiven archivieren