import EinkaufsListe from "../model/EinkaufsListe";

const createEinkaufsListe = async (url: string, newEinkaufsListe: EinkaufsListe): Promise<void> => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEinkaufsListe),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status ${response.status}`);
        }
    } catch (e) {
        console.error("Fehler beim Hochladen einer neuen EinkaufsListe: ", e);
    }
}

const updateEinkaufsListe = async (url: string, updatedEinkaufsListe: EinkaufsListe) => {
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateEinkaufsListe),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status ${response.status}`);
        }
    } catch (e) {
        console.error('Fehler beim Modifizieren einer EinkaufsListe:', e);
    }
}

const deleteEinkaufsListeById = async (url: string, id: number) => {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status ${response.status}`);
        }
    } catch (e) {
        console.error('Fehler beim Löschen einer EinkaufsListe:', e);
    }
}

export { createEinkaufsListe, updateEinkaufsListe, deleteEinkaufsListeById }