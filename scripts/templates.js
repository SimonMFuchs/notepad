function getNotesTemplate(indexNote) {
    return /*html*/`
        <p>+ ${notes[indexNote]} 
            <button onclick="noteToTrash(${indexNote})">X</button>
        </p>

    `      
}

function getArchiveTemplate(indexArchive){
    return /*html*/`
        <p>+ ${archive[indexArchive]}
            <button onclick="deleteFromTrash(${indexArchive})">Löschen</button>
        </p>
    `
}