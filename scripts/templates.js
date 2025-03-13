function getNotesTemplate(indexNote) {
    return /*html*/`
        <div class="line">
            <p>📄 ${allNotes.notesTitles[indexNote]}: ${allNotes.notes[indexNote]} </p>
            <button class="btn-move" onclick="moveNote(${indexNote}, 'notes', 'archive')" title="archivieren">📁</button>
        </div>
    `
}

function getArchiveTemplate(indexArchive) {
    return /*html*/`
        <div class="line">
            <p>📁 ${allNotes.archiveTitles[indexArchive]}: ${allNotes.archive[indexArchive]}</p>
            <div>
                <button class="btn-move" onclick="moveNote(${indexArchive}, 'archive', 'notes')" title="Wiederherstellen">📄</button>
                <button class="btn-move" onclick="moveNote(${indexArchive}, 'archive', 'trash')" title="in Papierkorp werfen">🗑️</button>
            </div>
            
        </div>
    `
}

function getTrashTemplate(indexTrash) {
    return /*html*/`
        <div class="line">
            <p>🗑️ ${allNotes.trashTitles[indexTrash]}: ${allNotes.trash[indexTrash]}</p>
            <div>
                <button class="btn-move" onclick="moveNote(${indexTrash}, 'trash', 'archive')" title="Wiederherstellen">📁</button>
                <button id="skull" class="btn-move" onclick="deleteForever(${indexTrash})" title="Für immer löschen">☠️</button>
            </div>
            
        </div>
    `
}

