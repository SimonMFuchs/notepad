function getNotesTemplate(indexNote) {
    return /*html*/`
        <p>
            ⚪ ${notesTitles[indexNote]} : ${notes[indexNote]} 
            <button class="btn" onclick="noteToArchive(${indexNote})">X</button>
        </p>
    `
}

function getArchiveTemplate(indexArchive) {
    return /*html*/`
        <p>
            ⚪ ${archiveTitles[indexArchive]} : ${archive[indexArchive]}
            <button class="btn" onclick="moveToTrash(${indexArchive})">X</button>
        </p>
    `
}

function getTrashTemplate(indexTrash) {
    return /*html*/`
        <p>
            🗑️ ${trashTitles[indexTrash]} : ${trash[indexTrash]}
            <button class="btn" onclick="deleteForever(${indexTrash})">Löschen</button>
        </p>
    `
}