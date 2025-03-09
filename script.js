let notes = ['banana', 'rasen mähen'];

function renderNotes() {

    let contentRef = document.getElementById('content');

    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        const note = notes[indexNote];
        contentRef.innerHTML += getNotesHtmlTemplate(indexNote);
    }
}

function getNotesHtmlTemplate(indexNote) {
    return /*html*/`
        <p>+ ${notes[indexNote]}</p>`       // styling
}


// notizen hinzufügen
// notizen löschen
// notiven archivieren