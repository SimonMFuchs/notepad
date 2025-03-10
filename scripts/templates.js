function getNotesTemplate(indexNote) {
    return /*html*/`
        <p>
            + Title: ${notesTitles[indexNote]} -> ${notes[indexNote]} 
            <button onclick="noteToTrash(${indexNote})">X</button>
        </p>
    `
}

function getArchiveTemplate(indexArchive) {
    return /*html*/`
        <p>
            + Title: ${archiveTitles[indexArchive]} -> ${archive[indexArchive]}
            <button onclick="deleteFromTrash(${indexArchive})">Löschen</button>
        </p>
    `
}